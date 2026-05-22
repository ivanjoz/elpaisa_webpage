import fs from 'fs';
import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, 'out');
const port = Number(process.env.PORT || 3000);

const contentTypes = {
  '.avif': 'image/avif',
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

function resolvePath(url) {
  const pathname = decodeURIComponent(new URL(url, `http://localhost:${port}`).pathname);
  const cleanPath = path.normalize(pathname).replace(/^(\.\.[/\\])+/, '');
  const requestedPath = path.join(root, cleanPath);

  if (!requestedPath.startsWith(root)) {
    return null;
  }

  const candidates = [
    requestedPath,
    path.join(requestedPath, 'index.html'),
    `${requestedPath}.html`,
  ];

  return candidates.find((candidate) => fs.existsSync(candidate) && fs.statSync(candidate).isFile()) || null;
}

const server = http.createServer((req, res) => {
  const filePath = resolvePath(req.url || '/');

  if (!filePath) {
    const notFoundPath = path.join(root, '404.html');
    res.writeHead(404, { 'Content-Type': contentTypes['.html'] });
    fs.createReadStream(fs.existsSync(notFoundPath) ? notFoundPath : path.join(root, 'index.html')).pipe(res);
    return;
  }

  res.writeHead(200, {
    'Content-Type': contentTypes[path.extname(filePath)] || 'application/octet-stream',
  });
  fs.createReadStream(filePath).pipe(res);
});

server.listen(port, () => {
  console.log(`Serving ${root} at http://localhost:${port}`);
});
