import { FooterBar, MenuBar } from "@/components/components";

// Generadas con: bun run scripts/carta-to-avif.ts
const cartaImages = Array.from({ length: 12 }, (_, index) => `carta_page_${index + 1}`);

export default function Carta() {
  return <>
    <MenuBar />
    <div className="w100">
    { cartaImages.map((image, index) => {
        const src = `/carta/${image}.avif`;

        return <div className="w100 carta-img" key={image}>
          <picture>
            <source type="image/avif" srcSet={src}/>
            <img
              src={src}
              alt=""
              decoding="async"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </picture>
        </div>
      })
    }
    </div>
    <FooterBar/>
  </>
}
