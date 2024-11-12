import { FooterBar, MenuBar } from "@/components/components";

const cartaImages = [
  "carta_page_1",  "carta_page_2", "carta_page_3", "carta_page_4"
]

export default function Carta() {
  return <>
    <MenuBar />
    <div className="w100">
    { cartaImages.map(image => {
        return <div className="w100 carta-img">
          <picture>
            <source type="image/avif" srcSet={`/images/${image}.avif`}/>  
            <source type="image/webp" srcSet={`/images/${image}.webp`}/> 
            <img src={`/images/${image}.webp`} /> 
          </picture>
        </div>
      })
    }
    </div>
    <FooterBar/>
  </>
}