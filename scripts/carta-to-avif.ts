#!/usr/bin/env bun
/**
 * Convierte el PDF de la carta en imágenes AVIF (una por página) y reemplaza
 * las imágenes actuales de public/carta.
 *
 * Usa las herramientas que ya están instaladas en el sistema (Fedora):
 *   - pdftoppm  (poppler-utils)  -> renderiza cada página del PDF a PNG
 *   - avifenc   (libavif-tools)  -> codifica cada PNG a AVIF
 *
 * Uso:
 *   bun run scripts/carta-to-avif.ts
 *   bun run scripts/carta-to-avif.ts --pdf "public/carta/CARTA 2026_ok.pdf" --width 1400 --quality 62
 *
 * Opciones:
 *   --pdf <ruta>      PDF de entrada (default: el único .pdf en public/carta)
 *   --out <carpeta>   Carpeta de salida (default: public/carta)
 *   --prefix <texto>  Prefijo de los archivos (default: carta_page_)
 *   --width <px>      Ancho de la imagen en píxeles (default: 1400)
 *   --quality <0-100> Calidad AVIF, 100 = lossless (default: 58)
 *   --speed <0-10>    Velocidad del encoder, 0 = más lento/mejor (default: 4)
 *   --yuv <444|420>   Submuestreo de color (default: 444, mejor para texto)
 *   --keep            No borrar los .avif previos de la carpeta de salida
 *   --no-docs         No sincronizar los avif hacia docs/carta
 *   --dry-run         Solo muestra lo que haría
 */

import { existsSync } from "node:fs";
import { mkdir, readdir, rm, copyFile, stat } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";

const ROOT = path.resolve(import.meta.dir, "..");

// ---------------------------------------------------------------- args

type Args = Record<string, string | boolean>;

function parseArgs(argv: string[]): Args {
  const args: Args = {};
  for (let i = 0; i < argv.length; i++) {
    const token = argv[i];
    if (!token.startsWith("--")) continue;
    const key = token.slice(2);
    const next = argv[i + 1];
    if (next && !next.startsWith("--")) {
      args[key] = next;
      i++;
    } else {
      args[key] = true;
    }
  }
  return args;
}

const args = parseArgs(process.argv.slice(2));

const num = (key: string, fallback: number) => {
  const raw = args[key];
  if (raw === undefined) return fallback;
  const value = Number(raw);
  if (!Number.isFinite(value)) throw new Error(`--${key} debe ser un número (recibido: ${raw})`);
  return value;
};

const OUT_DIR = path.resolve(ROOT, String(args.out ?? "public/carta"));
const PREFIX = String(args.prefix ?? "carta_page_");
const WIDTH = num("width", 1400);
const QUALITY = num("quality", 58);
const SPEED = num("speed", 4);
const YUV = String(args.yuv ?? "444");
const KEEP_OLD = args.keep === true;
const SYNC_DOCS = args.docs !== false && args["no-docs"] !== true;
const DRY_RUN = args["dry-run"] === true;

// ---------------------------------------------------------------- helpers

async function run(cmd: string[]) {
  const proc = Bun.spawn(cmd, { stdout: "pipe", stderr: "pipe" });
  const [stdout, stderr, code] = await Promise.all([
    new Response(proc.stdout).text(),
    new Response(proc.stderr).text(),
    proc.exited,
  ]);
  if (code !== 0) {
    throw new Error(`Falló: ${cmd.join(" ")}\n${stderr || stdout}`);
  }
  return stdout;
}

async function requireTool(bin: string, paquete: string) {
  const proc = Bun.spawn(["which", bin], { stdout: "ignore", stderr: "ignore" });
  if ((await proc.exited) !== 0) {
    throw new Error(`No se encontró "${bin}". Instalar con: sudo dnf install ${paquete}`);
  }
}

const kb = (bytes: number) => `${(bytes / 1024).toFixed(0)} KB`;

/** Ejecuta `tasks` con como máximo `limit` en paralelo, preservando el orden. */
async function mapLimit<T, R>(items: T[], limit: number, fn: (item: T, index: number) => Promise<R>) {
  const results = new Array<R>(items.length);
  let cursor = 0;
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (cursor < items.length) {
      const index = cursor++;
      results[index] = await fn(items[index], index);
    }
  });
  await Promise.all(workers);
  return results;
}

async function findPdf(): Promise<string> {
  if (args.pdf) {
    const pdf = path.resolve(ROOT, String(args.pdf));
    if (!existsSync(pdf)) throw new Error(`No existe el PDF: ${pdf}`);
    return pdf;
  }
  const candidates = (await readdir(OUT_DIR))
    .filter((file) => file.toLowerCase().endsWith(".pdf"))
    .sort();
  if (candidates.length === 0) {
    throw new Error(`No hay ningún .pdf en ${OUT_DIR}. Usar --pdf <ruta>`);
  }
  if (candidates.length > 1) {
    throw new Error(
      `Hay varios .pdf en ${OUT_DIR} (${candidates.join(", ")}). Especificar cuál con --pdf <ruta>`,
    );
  }
  return path.join(OUT_DIR, candidates[0]);
}

async function pageCount(pdf: string): Promise<number> {
  const info = await run(["pdfinfo", pdf]);
  const match = info.match(/^Pages:\s+(\d+)$/m);
  if (!match) throw new Error(`No se pudo leer el número de páginas de ${pdf}`);
  return Number(match[1]);
}

// ---------------------------------------------------------------- main

await requireTool("pdftoppm", "poppler-utils");
await requireTool("avifenc", "libavif-tools");

const pdf = await findPdf();
const pages = await pageCount(pdf);

console.log(`PDF     : ${path.relative(ROOT, pdf)} (${pages} páginas)`);
console.log(`Salida  : ${path.relative(ROOT, OUT_DIR)}/${PREFIX}N.avif`);
console.log(`Formato : ancho ${WIDTH}px · calidad ${QUALITY} · yuv${YUV} · speed ${SPEED}`);

if (DRY_RUN) {
  console.log("\n--dry-run: no se generó ni borró nada.");
  process.exit(0);
}

// Borra los avif previos (la carta nueva puede tener otra cantidad de páginas).
if (!KEEP_OLD) {
  const previous = (await readdir(OUT_DIR)).filter((file) => file.endsWith(".avif"));
  await Promise.all(previous.map((file) => rm(path.join(OUT_DIR, file))));
  console.log(`\nBorrados ${previous.length} .avif previos de ${path.relative(ROOT, OUT_DIR)}`);
}

await mkdir(OUT_DIR, { recursive: true });
const workDir = path.join(tmpdir(), `carta-avif-${process.pid}`);
await mkdir(workDir, { recursive: true });

const started = Date.now();
let total = 0;

try {
  const pageNumbers = Array.from({ length: pages }, (_, index) => index + 1);
  // pdftoppm y avifenc ya usan varios hilos internamente: 4 páginas a la vez
  // aprovecha los cores sin saturar la máquina.
  const sizes = await mapLimit(pageNumbers, 4, async (page) => {
    const png = path.join(workDir, `page-${page}`);
    const avif = path.join(OUT_DIR, `${PREFIX}${page}.avif`);

    // -scale-to-x mantiene el ancho exacto; -scale-to-y -1 conserva el aspecto.
    await run([
      "pdftoppm", "-png", "-r", "300",
      "-scale-to-x", String(WIDTH), "-scale-to-y", "-1",
      "-f", String(page), "-l", String(page), "-singlefile",
      pdf, png,
    ]);

    // yuv444 mantiene nítidos los bordes del texto de colores de la carta.
    await run([
      "avifenc",
      "-q", String(QUALITY),
      "-s", String(SPEED),
      "-y", YUV,
      "--ignore-exif", "--ignore-xmp",
      `${png}.png`, avif,
    ]);

    await rm(`${png}.png`);

    const { size } = await stat(avif);
    console.log(`  página ${String(page).padStart(2)} → ${PREFIX}${page}.avif  ${kb(size)}`);
    return size;
  });

  total = sizes.reduce((acc, size) => acc + size, 0);
} finally {
  await rm(workDir, { recursive: true, force: true });
}

console.log(
  `\nListo: ${pages} imágenes · ${kb(total)} en total · ` +
  `${((Date.now() - started) / 1000).toFixed(1)}s`,
);

// docs/ es la salida publicada (GitHub Pages) y build.js copia sin borrar,
// así que se sincroniza aquí para que no queden imágenes viejas.
const docsDir = path.join(ROOT, "docs", "carta");
if (SYNC_DOCS && existsSync(docsDir)) {
  const stale = (await readdir(docsDir)).filter((file) => file.endsWith(".avif"));
  await Promise.all(stale.map((file) => rm(path.join(docsDir, file))));
  for (const page of Array.from({ length: pages }, (_, index) => index + 1)) {
    const file = `${PREFIX}${page}.avif`;
    await copyFile(path.join(OUT_DIR, file), path.join(docsDir, file));
  }
  console.log(`docs/carta sincronizado (${stale.length} viejas borradas, ${pages} copiadas)`);
}

console.log(`\nRecuerda que pages/carta.tsx debe listar ${pages} páginas ("${PREFIX}N").`);
