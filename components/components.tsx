import { useRouter } from 'next/router'
import React, { CSSProperties, DetailedHTMLProps, FC, ImgHTMLAttributes, PropsWithChildren, RefObject, useEffect, useRef, useState } from "react"

export const ImgDesk = (props: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>,HTMLImageElement>) => {
  return <picture style={{ display: 'contents' }}>
    <source srcSet={"images/blank.png"} media="(max-width: 550px)" />
    <source srcSet={props.src} media="(min-width: 550px)" />
    <img {...props} src="images/blank.png" />
  </picture>
}

export const ImgMob = (props: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>,HTMLImageElement>) => {
  return  <picture style={{ display: 'contents' }}>
    <source srcSet={props.src} media="(max-width: 550px)" />
    <source srcSet={"images/blank.png"} media="(min-width: 550px)" />
    <img {...props} src="images/blank.png" />
  </picture>
}

export const MenuBar = () => {
  const router = useRouter()
  const menuRef = useRef<HTMLDivElement>()
  const [menuSelected, setMenuSelected] = useState("Inicio") 
  
  useEffect(() => {
    let eT, wH, apear, disapear // Variables

    const updateVariables = () => {
      // Distancia del margen superior del elemento hasta el Top
      eT = 0; let _elm = menuRef.current;
      while(_elm){
        eT += _elm.offsetTop
        _elm = _elm.offsetParent as HTMLDivElement
      }
      wH = window.innerHeight // Altura de la pantalla
      // Distancia donde el elemento comienza a aparecer en el viewport
      apear = eT - wH
      // Distancia donde el elemento desaparece del viewport
      disapear = eT
    }
    
    const handleScroll = () => {
      if(typeof eT !== 'number'){ updateVariables() }
      let wy = window.scrollY - 15; // Posición del scroll
      if( wy > eT){
        document.body.classList.add('menu-on')
      } else if( wy < eT){
        document.body.classList.remove('menu-on');
      }
      window.addEventListener
    }
    handleScroll()

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleScroll)

    return () => {
      window.removeEventListener("scroll",handleScroll)
    }
  })

  const wd = () => window.screen.availWidth

  const menusOptions = [
    { name: "Inicio",
      handler: () => { 
        const hash = wd() > 550 ? "inicio" : "inicio-mobile"
        router.push("/#" + hash)
      }
    },
    { name: "Nosotros",
      handler: () => { 
        const hash = wd() > 550 ? "nosotros" : "nosotros-mobile"
        router.push("/#" + hash)
      }
    },
    { name: "Servicios",
      handler: () => { 
        const hash = wd() > 550 ? "servicios" : "servicios-mobile"
        router.push("/#"+hash ) 
      }
    },
    { name: "Carta",
      handler: () => { router.push("/carta") }
    },
    { name: "Locales",
      handler: () => { 
        router.push("/#locales")
      }
    },
    { name: "Galería",
      handler: () => { 
        router.push("/#galeria")
      }
    },
    { name: "Noticias",
      handler: () => { 
        router.push("/#noticias")
      }
    },
    { name: "Contacto",
      handler: () => { router.push("/#contacto") }
    }
  ]

  const [showMenu, setShowMenu] = useState(false)

  /*
      <div _menu="inicio" className="active">
        <span>Inicio</span>
        <div></div>
      </div>
  */
  
  return <>
  <div className="layer1 w100 inline mob-0">
    <div>
      <div><span>Teléfonos (+44)216410</span></div>
    </div>
    <div>
      <div>Contacto: contacto@elpaisa.pe</div>
    </div>
  </div>
  <div className="menu1 inline ac mob-0" ref={menuRef}>
    <img className="logo" src="images/paisa_logo.png"/>
    <div className="inline-h menu-elms">
      { menusOptions.map((menu,i) => {
          let cN = ""
          if(menuSelected === menu.name){ cN += " active" }

          return <div key={i} className={cN} onClick={ev => {
            ev.stopPropagation()
            setMenuSelected(menu.name)
            menu.handler()
          }}>
            <span> { menu.name }</span>
            <div></div>
          </div>
        })
      }
    </div>
  </div>
  <div id="mob-menu-icon" className="_mobile" onClick={ev => {
    ev.stopPropagation()
    setShowMenu(!showMenu)
  }}>
    MENU
  </div>
    { showMenu &&
      <div id="mob-menu">
        { menusOptions.map((menu,i) => {
            return <div key={i} className="" onClick={ev => {
              ev.stopPropagation()
              setShowMenu(false)
              menu.handler()
            }}>
              {menu.name}
            </div>
          })
        }
      </div>
    }
  </>
}

export const FooterBar = () => {
  return <>
    <div className="footer inline-v w100 bb">
      <div className="footer-ctn in-flex">
        <div>
          <span>ENLACES</span>
          <div className="colunm menu-footer">
            <span role="inicio">Inicio</span>
            <span role="nosotros">Nosotros</span>
            <span role="servicios">Servicios</span>
            <span role="platos">Platos</span>
            <span role="reservas">Reserva una mesa</span>
            <span role="locales">Locales</span>
            <span role="galeria">Galería</span>
            <span role="noticias">Noticias</span>
            <span role="contacto">Contacto</span>
          </div>
        </div>
        <div>
          <span>HORARIO DE ATENCIÓN</span>
          <span className="red">Lunes - Domingo :</span>
          <span className="s2">de 9:00am - 5:00pm</span>
        </div>
        <div>
          <span>CONTACTO</span>
          <span className="red">Teléfono</span>
          <div className="colunm telefonos">
            <span>
              (044)200450 - Las Gemas 418 <br/>
              Urb. Santa Ines
            </span>
            <span>
              (044)225803 - Pedro Urraca 515 <br/> Urb. San Andres I Etapa
            </span>
            <span>
              (044)278997 - Av. Victor Larco 812 <br/> Huanchaco
            </span>
            <span>
              (044)216410 - Mz N Lot 10 <br/>
              Urb. Santa Teresa De Avila
            </span>
          </div>
        </div>
        <div>
          <span>SOBRE NOSOTROS</span>
          <span className="red">Restaurant Turístico El Paisa</span>
          <span>Inversiones Turísticas Santa Inés SAC</span>
          <span className="mB02">RUC: 20518902301</span>
          <span className="mB02">Cadena de restaurantes de comida marina y criolla.</span>
          <span className="red">E-Mail :</span>
          <span>ventas@elpaisa.pe</span>
        </div>
      </div>
    </div>
    <div className="desarrollado w100 inline-v jc bb">
      <span>©Copyright 2019 - El Paisa Internacional</span>
    </div>
  </>
}

export interface IBackgroundParallax {
  children: JSX.Element
  reverse?: boolean
  offset?: number
}

export const BackgroundParallax = (props: IBackgroundParallax) => {

  const [ THIS ] = useState(() => {
    const THIS = {
      element: null as HTMLDivElement,
      apear: 0, disapear: 0, range: 0, compense: 0, offset: 0
    }
    return THIS
  })

  useEffect(() => {
    const updateVariables = () => {
      // Distancia del margen superior del elemento hasta el Top
      if(!THIS.element) return
  
      THIS.offset = props.offset || 100
      if(THIS.offset > 99) THIS.offset = 99
  
      const eT = THIS.element.offsetTop
      const eH = THIS.element.offsetHeight // Altura del elemento	
      const wH = window.innerHeight // Altura de la pantalla
      // Distancia donde el elemento comienza a aparecer en el viewport (no puede ser menor a cero)
      THIS.apear = eT - wH; if(THIS.apear < 0) THIS.apear = 0
      // Distancia donde el elemento desaparece del viewport
      THIS.disapear = eT + eH
      // Máximo valor posible de window.scrollY;
      let maxScroll = document.body.scrollHeight - wH
      // Si [disapear] es mayor que el máximo, se iguala al máximo
      if(THIS.disapear > maxScroll) THIS.disapear = maxScroll
      // Rango donde se ejecutará el parallax
      THIS.range = THIS.disapear - THIS.apear
      // Compense es el porcentaje fijo que debe agregarse al backgroud position para que la imagen esté centrada en caso de offset menor a 100
      // Cuando el offset = 100; compense = 0;
      THIS.compense = ( THIS.range * ( 1 - THIS.offset / 100 ) ) / 2
    }

    updateVariables() 

    const onWindowScroll = () => {
      if(!THIS.element) return
      // console.log(THIS)
      const wy = window.scrollY // Posición del scroll
      // Si el elemento no está en el viewport no hace nada
      if( THIS.apear > wy || wy > THIS.disapear ){ return }
      
      let perc = ( (wy - THIS.apear + THIS.compense) / THIS.range) * THIS.offset
      // Si el parallax es inverso
      if(props.reverse) perc = 100 - perc
      // Agrega el estilo al objeto
      THIS.element.style.backgroundPosition = '0 '+ perc + '%';
    }

    const updateAndScroll = () => {
      updateVariables()
      onWindowScroll()
    }

    window.addEventListener("scroll", onWindowScroll)
    window.addEventListener("load", updateAndScroll)
    window.addEventListener("resize", updateAndScroll)
    
    return () => {
      window.removeEventListener("scroll", onWindowScroll)
      window.removeEventListener("load", updateAndScroll)
      window.removeEventListener("resize", updateAndScroll)
    }
  },[])
  
  return <>
    { React.cloneElement(props.children, {
        ref: (ref) => (THIS.element = ref)
      })
    }
  </>
}

interface IContentParallax {
  children: JSX.Element
  disappearOffset?: number
  offset?: number
}

export const ContentParallax = (props: IContentParallax) => {

  const [ THIS ] = useState(() => {
    const THIS = {
      element: null as HTMLDivElement,
      apear: 0, disappear: 0, range: 0, compense: 0, offset: 0
    }
    return THIS
  })

  useEffect(() => {
    const updateVariables = () => {
      // Distancia del margen superior del elemento hasta el Top
      if(!THIS.element) return
      const parent = THIS.element.parentElement

      THIS.offset = props.offset || 100
      if(THIS.offset > 99) THIS.offset = 99
      
      // Distancia donde el elemento comienza a aparecer en el viewport (no puede ser menor a cero)
      THIS.apear = parent.offsetTop - window.innerHeight
      if(THIS.apear < 0) THIS.apear = 0
      // Distancia donde el elemento desaparece del viewport
      THIS.disappear = parent.offsetTop + parent.offsetHeight
        + (props.disappearOffset||0)
      // Máximo valor posible de window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight
      // Si [disapear] es mayor que el máximo, se iguala al máximo
      if(THIS.disappear > maxScroll) THIS.disappear = maxScroll
    }

    updateVariables() 

    const onWindowScroll = () => {
      if(!THIS.element) return
      const wy = window.scrollY // Posición del scroll
      // Si el elemento no está en el viewport no hace nada
      if(THIS.apear > wy || wy > THIS.disappear ){ return }
      
      const parent = THIS.element.parentElement
      // La diferencia es la cantidad máxima de PX a desplazar
      const dfr = parent.offsetHeight - THIS.element.offsetHeight
      // Porcentaje de desplazamiento dentro del contenedor padre
      const perc = ((wy - THIS.apear) / (THIS.disappear - THIS.apear))
      // Pixel a mover
      const pxToMove = Math.floor(dfr * perc)
      THIS.element.style.top = `${pxToMove}px`
    }

    const updateAndScroll = () => {
      updateVariables()
      onWindowScroll()
    }

    window.addEventListener("scroll", onWindowScroll)
    window.addEventListener("load", updateAndScroll)
    window.addEventListener("resize", updateAndScroll)
    
    return () => {
      window.removeEventListener("scroll", onWindowScroll)
      window.removeEventListener("load", updateAndScroll)
      window.removeEventListener("resize", updateAndScroll)
    }
  },[])
  
  return <>
    { React.cloneElement(props.children, {
        ref: (ref) => (THIS.element = ref)
      })
    }
  </>
}

const useElementOnScreen = (ref: RefObject<Element>, rootMargin = "0px", delay = 0) => {
  const [isIntersecting, setIsIntersecting] = useState(true)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if(delay){
          setTimeout(() => { setIsIntersecting(entry.isIntersecting) },delay)
        } else {
          setIsIntersecting(entry.isIntersecting)
        }
      },
      { rootMargin }
    )
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return isIntersecting
}

export interface AnimateInProps extends PropsWithChildren {
  delay?: number
  rootMargin?: string
  className?: string
  style?: CSSProperties
  cssOnShow?: string
}

export const AnimateIn: FC<AnimateInProps> = (props) => {
  const ref = useRef<HTMLDivElement>(null)
  const onScreen = useElementOnScreen(ref, props.rootMargin, props.delay)
  return (
    <div ref={ref} className={props.className||""}
      style={{
        ...(props.style||{}),
        opacity: onScreen ? 1 : 0,
        translate: onScreen ? "none" : "0 150px",
        transition: "500ms ease-in-out",
      }}
    >
      {props.children}
    </div>
  )
}


export const AnimateEffect2: FC<AnimateInProps> = (props) => {
  const ref = useRef<HTMLDivElement>(null)
  let rootMargin = props.rootMargin || "-200px 0px -150px 0px"
  const onScreen = useElementOnScreen(ref, rootMargin)

  let cN = props.className||""
  if(onScreen) cN += (" " + props.cssOnShow||"active")
  
  return (
    <div ref={ref} className={cN}
      style={{
        ...(props.style||{}),
      }}
    >
      {props.children}
    </div>
  )
}