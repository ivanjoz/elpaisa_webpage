import { CSSProperties, memo, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';

const entradas = [
  {contenido: `Gracias al programa #TopsDelSabor por la nota!
  Somos #ElPaisaInternacional  
  ☑️ Lo mejor en #pescados, #mariscos y criollos solo en #ElPaisaInternacional 🌞🍴😎
  ⏰ Horario: Lunes a Domingo: 10am a 5pm.
  ☑ WiFi y Pago con Visa`,
  fecha: '10-SEP-2019',
  imagen: 'fb_post11.jpg',
  url: 'https://www.facebook.com/elpaisainternacional/',
  },
  {contenido: `Comenzamos la semana con un delicioso #ArrozConPato 😉
  ☑️ Lo mejor en #pescados, #mariscos y criollos solo en #ElPaisaInternacional 🌞🍴😎  
  ⏰ Horario: Lunes a Domingo: 10am a 5pm.  
  ☑ WiFi y Pago con Visa`,
  fecha: '18-OCT-2019',
  imagen: 'fb_post21.jpg',
  url: 'https://www.facebook.com/elpaisainternacional/',
  },
  {contenido: `Disfruta de este fin de semana con un riquísimo #SudadoDeMariscos
  ☑️ Lo mejor en #pescados, #mariscos y criollos solo en #ElPaisaInternacional 🌞🍴😎  
  ⏰ Horario: Lunes a Domingo: 10am a 5pm.  
  ☑ WiFi y Pago con Visa`,
  fecha: '14-OCT-2019',
  imagen: 'fb_post31.jpg',
  url: 'https://www.facebook.com/elpaisainternacional/',
  },
  {contenido: `Delicioso #ChicharrónMixto!
  ☑️ Lo mejor en #pescados, #mariscos y criollos solo en #ElPaisaInternacional 🌞🍴😎  
  ⏰ Horario: Lunes a Domingo: 10am a 5pm.  
  ☑ WiFi y Pago con Visa`,
  fecha: '06-OCT-2019',
  imagen: 'fb_post41.jpg',
  url: 'https://www.facebook.com/elpaisainternacional/',
  },
  {contenido: `Gracias amigos de #TopsDelSabor
  Somos #ElPaisaInternacional  
  ☑️ Lo mejor en #pescados, #mariscos y criollos solo en #ElPaisaInternacional 🌞🍴😎  
  ⏰ Horario: Lunes a Domingo: 10am a 5pm.  
  ☑ WiFi y Pago con Visa`,
  fecha: '05-OCT-2019',
  imagen: 'fb_post51.jpg',
  url: 'https://www.facebook.com/elpaisainternacional/',
  }
]

const useResizeObserver = <T extends HTMLElement>(
  callback: (target: T, entry: ResizeObserverEntry) => void
) => {
  const ref = useRef<T>(null)

  useLayoutEffect(() => {
    const element = ref?.current
    if (!element) { return }

    const observer = new ResizeObserver((entries) => {
      callback(element, entries[0]);
    })

    observer.observe(element)
    return () => {
      observer.disconnect()
    }
  }, [callback, ref])
  return ref
}

export const CarruselEntradas = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)

  const checkIsMobile = () => {
    return typeof window !== 'undefined' && window.screen.availWidth < 580
  }

  const [itemsToShow, setItemsToShow] = useState(3)

  useEffect(()=> {
    setItemsToShow(checkIsMobile() ? 1 : 3)
  },[])

  const onResize = useCallback((target: HTMLDivElement) => {
    setItemsToShow(checkIsMobile() ? 1 : 3)
  },[])
  
  console.log("items to show:: ", itemsToShow)

  const ref = useResizeObserver(onResize)

  const style: CSSProperties = {
    alignSelf: 'center',
    background: 'transparent',
    border: '1px solid #00000069',
    boxShadow: '0 0.25em 0.5em 0 rgb(0 0 0 / 21%)',
    borderRadius: '5px',
    color: '#000000d4',
    cursor: 'pointer',
    fontSize: '20px',
    height: '2.6rem',
    lineHeight: 1,
    textAlign: 'center',
    width: "2.1rem",
    position: 'absolute',
    zIndex: 50,
  }

  if(itemsToShow === 1){
    style.bottom = '-0.8rem'
    style.width = '3.2rem'
    style.height = '2rem'
  }
  
  return <div className="w100 p-rel">
    <ReactSimplyCarousel
      activeSlideIndex={activeSlideIndex}
      onRequestChange={setActiveSlideIndex}
      itemsToShow={itemsToShow}
      itemsToScroll={1}
      forwardBtnProps={{
        // Here you can also pass className, or any other button element attributes
        style: { ...style, right: itemsToShow === 1 ? '3rem' : '-2.4rem'  },
        children: <span>{`>`}</span>,
      }}
      backwardBtnProps={{
        // Here you can also pass className, or any other button element attributes
        style: { ...style, left: itemsToShow === 1 ? '3rem' : '-2.4rem'  },
        children: <span>{`<`}</span>,
      }}
      speed={400}
      easing="linear"
    >
      { entradas.map((et, idx) => {
        if(!et.contenido) return null
        return <div className="card2-c bb" key={idx}>
          <div className="card1">
            <div>
              <img src={"images/" + et.imagen} alt="talleres"/>
            </div>
            <div className="tt">
              <span className="icon icon-user">
              <span>@elpaisa</span></span>
              <span className="icon icon-calendar">
              <span>{et.fecha}</span></span>
            </div>
            <div className="tt1 inline-v">
              <div className="inline-v">
                {et.contenido}
              </div>
              <button className="bn7" onClick={ev => {
                ev.stopPropagation()
                window.open('https://www.facebook.com/elpaisainternacional/','_blank')
              }}>
                LEER MÁS
              </button> 
            </div> 
          </div>
        </div>
        })
      }
    </ReactSimplyCarousel>
    <div className="flex w100" style={{ marginTop: itemsToShow === 1 ? "4vw" : '8px' }}>
      { entradas.map((x,idx) => {
          let cN = "slide-circle"
          if(activeSlideIndex === idx) cN += " active"
          return <div className={cN} key={idx}></div>
        })
      }
    </div>
  </div>
}


export const CarruselInicio = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const [animate, setAnimate] = useState(0)
  const [selectedSlice, setSelectedSlice] = useState(0)
  const [ THIS ] = useState(()=> {
    return { timeoutMap: new Map() as Map<number,NodeJS.Timeout> }
  })

  const style: CSSProperties = {
    alignSelf: 'center',
    background: 'transparent',
    border: '1px solid #ffffff94',
    boxShadow: '0 0.25em 0.5em 0 rgb(0 0 0 / 47%)',
    borderRadius: '5px',
    color: '#ffffffd4',
    cursor: 'pointer',
    fontSize: '20px',
    height: '2.6rem',
    lineHeight: 1,
    textAlign: 'center',
    width: "2.1rem",
    position: 'absolute',
    zIndex: 50,
  }

  /*
  if(itemsToShow === 1){
    border: 1px solid #ffffff94;
    box-shadow: 0 0.25em 0.5em 0 rgb(0 0 0 / 47%);
    border-radius: 5px;
    color: #ffffffd4;
  }
  */
  
  useEffect(()=> {
    setAnimate(11)
    THIS.timeoutMap.set(12, setTimeout(()=> { setAnimate(12) },400))
    THIS.timeoutMap.set(13, setTimeout(()=> { setAnimate(13) },550))
    THIS.timeoutMap.set(14, setTimeout(()=> { setAnimate(14) },900))
  },[])

  useEffect(()=> {
    for(let [key, timmer] of THIS.timeoutMap){
      clearTimeout(timmer)
      THIS.timeoutMap.delete(key)
    }

    if(selectedSlice === 0){
      setAnimate(12)
      THIS.timeoutMap.set(13, setTimeout(()=> { setAnimate(13) },400))
      THIS.timeoutMap.set(14, setTimeout(()=> { setAnimate(14) },550))
      // setTimeout(()=> { setAnimate(14) },900)
    } else if(selectedSlice === 1){
      setAnimate(21)
      THIS.timeoutMap.set(22, setTimeout(()=> { setAnimate(22) },400))
      THIS.timeoutMap.set(23, setTimeout(()=> { setAnimate(23) },550))
      THIS.timeoutMap.set(24, setTimeout(()=> { setAnimate(24) },900))
    } else if(selectedSlice === 2){
      setAnimate(31)
      THIS.timeoutMap.set(32, setTimeout(()=> { setAnimate(32) },400))
      THIS.timeoutMap.set(33, setTimeout(()=> { setAnimate(33) },550))
      THIS.timeoutMap.set(34, setTimeout(()=> { setAnimate(34) },900))
    }
    
  },[selectedSlice])

  return <ReactSimplyCarousel
    activeSlideIndex={activeSlideIndex}
    onRequestChange={setActiveSlideIndex}
    itemsToShow={1}
    itemsToScroll={1}
    forwardBtnProps={{
      // Here you can also pass className, or any other button element attributes
      style: { ...style, right: 1 === 1 ? '3rem' : '-1.4rem'  },
      children: <span>{`>`}</span>,
    }}
    backwardBtnProps={{
      // Here you can also pass className, or any other button element attributes
      style: { ...style, left: 1 === 1 ? '3rem' : '-1.4rem'  },
      children: <span>{`<`}</span>,
    }}
    speed={250}
    easing="linear"
    onAfterChange={idx => {
      if(idx !== selectedSlice){
        setSelectedSlice(idx)
      }
    }}
  >
    <div role="inicio" className="capa1 w100 inline-v" 
      style={{ width: '100vw' }} draggable={false}>
      <div className="capa-efecto5 anime1 show z10"></div>
      <div className={"capa-efecto z10 " + ([11,12,13,14].includes(animate) ? "animate" : "") + ([12,13,14].includes(animate) ? " fade" : "")}></div>
      <div className={"capa-efecto2 z10 " + (animate > 0 ? "animate" : "")}></div>
      <div className="slide1 inline-v jc">
        <img onLoad={ev => {
          ev.stopPropagation()
          /* efectoEntrada() */
        }} className="fondo2" src="images/slide1.jpg" draggable={false}/>
        <div className="inline-v z05">
          <span className={"paisa-e1 anime1 bienve"+([11,12,13,14].includes(animate) ? " show" : "")}>Bienvenidos</span>
          <span className={"paisa-e2 anime1"+([12,13,14].includes(animate) ? " show" : "")}
            style={{ fontSize: "6vw", fontFamily: "playball" }}>
            El Paisa
          </span>
          <span className={"paisa-e3 anime1 subt1"+([13,14].includes(animate) ? " show" : "")}>RESTAURANT TURÍSTICO</span>
          <button onClick={ev => {
            ev.stopPropagation()
            // scrollToElement('.reservas.cover-c',-100)
          }} className={"paisa-e4 anime1 bn21 mT02"+([14].includes(animate) ? " show" : "")}>RESERVE UNA MESA</button>
        </div>
      </div>
    </div>
    <div className="capa1 w100 inline-v" style={{ width: '100vw' }}>
      <div className="slide1 inline-v jc">
        <div className={"capa-efecto6 anime1 z10 " +([21,22,23,24].includes(animate) ? "show" : "")}></div>
        <img className="fondo2" src="images/slide3.jpg" draggable={false}/>
        <div className="inline-v z10">
          <span style={{ fontSize: "var(--fs5)" }}
            className={"bienve anime1 e1 paisa-e5 " +([21,22,23,24].includes(animate) ? "show" : "")}>Disfruta de un</span>
          <span className={"anime1 paisa-e6 " + ([22,23,24].includes(animate) ? "show" : "")}
            style={{ fontSize: "3.5vw", fontFamily: "playball" }}>
              Ambiente Agradable
          </span>
          <div className={"inline-v anime1 paisa-e7 " + ([23,24].includes(animate) ? "show" : "")}>
            <span className="subt1">CON MÚSICA EN VIVO, ESTACIONAMIENTO</span>
            <span className="subt1">Y UNA ATENCIÓN OPORTUNA</span>
          </div>
          <button onClick={ev => {
            ev.stopPropagation()
            // scrollToElement('.reservas.cover-c',-100)
          }}
            className={"bn21 mT03 anime1 paisa-e8 " + ([24].includes(animate) ? "show" : "")}>RESERVE UNA MESA</button>
        </div>
      </div>
    </div>
    <div className="capa1 w100 inline-v" style={{ width: '100vw' }}>
      <div className="slide1 inline-v jc">
        <div className={"capa-efecto7 anime1 z10"+([31,32,33,34].includes(animate) ? " show" : "")}></div>
        <img className="fondo2" src="images/slider2.jpg" draggable={false}/>
        <div className="inline-v z10">
          <span style={{ fontSize: "var(--fs5)" }}
            className={"bienve anime1 paisa-e9"+([31,32,33,34].includes(animate) ? " show" : "")}>Disfuta de nuestros</span>
          <span className={"anime1 paisa-e10"+([32,33,34].includes(animate) ? " show" : "")} 
            style={{ fontSize: "3.5vw", fontFamily: "playball" }}>Deliciosos Platos</span>
          <span className={"subt1 anime1 paisa-e11"+([33,34].includes(animate) ? " show" : "")}>VARIEDAD Y TRADICIÓN PARA TU PALADAR</span>
          <button className={"bn21 mT02 anime1 paisa-e12"+([34].includes(animate) ? " show" : "")}>VER PLATOS</button>
        </div>
      </div>
    </div>
  </ReactSimplyCarousel>
}


const platos = [
  { grupo:1, name:'Ceviche Mixto', image:'imagen1.jpg'},
  { grupo:1, name:'Ocopa', image:'paisa22.jpg'},
  { grupo:1, name:'Papa a la Huancaína', image:'entrada3.jpg'},
  { grupo:1, name:'Ensalada Familiar', image:'paisa4.jpg'},
  { grupo:1, name:'Yuquitas Fritas', image:'entrada5.jpg'},
  { grupo:1, name:'Ensalada Personal', image:'entrada6.jpg'},
  // Pescados y mariscos
  { grupo:2, name:'Chicharrón de Pescado', image:'p_chicharron_pescado.webp'},
  { grupo:2, name:'Pescado Apanado', image:'p_pescado_apanado.jpg'},
  { grupo:2, name:'Parihuela Mixta', image:'p_ceviche_paisa.jpg'},
  { grupo:2, name:'Arroz con Mariscos', image:'p_arroz_mariscos.jpg'},
  { grupo:2, name:'Ceviche a lo Paisa', image:'p_parihuela.jpg'},
  { grupo:2, name:'Pescado Frito', image:'p_pescado_frito.jpg'},
  { grupo:2, name:'Sudado de Pescado', image:'p_sudado_pescado.jpg'},
  // Platos Especiales
  { grupo:3, name:'Lomo Saltado', image:'p_lomo_saltado.jpg'},
  { grupo:3, name:'1/2 Cuy (Ajiaco o Frito)', image:'p_cuy_frito.jpg'},
  { grupo:3, name:'Pollo a la Plancha', image:'p_pollo_plancha.jpg'},
  { grupo:3, name:'Arroz con Pollo', image:'p_arroz_pollo.jpg'},
  { grupo:3, name:'Chicharrón de Pollo', image:'p_chicharron_pollo.jpg'},
  { grupo:3, name:'Cabrito Norteño', image:'p_cabrito.jpg'},
  { grupo:3, name:'Filete de Pescado', image:'p_filete_pescado.jpg'},
]

const platosGrupos = [
  { grupo:1, name:'Nuestras Entradas' },
  { grupo:2, name:'Pecados y Mariscos' },
  { grupo:3, name:'Platos Especiales' },
  { grupo:4, name:'Internacional' },
  { grupo:5, name:'Tragos y Bebidas' },
]

export const NuestrosPlatos = () => {

  const [selected, setSelected] = useState(1)

  return <>
    <div className="inline-h m-wrap mT04">
      { platosGrupos.map((e,i) => {
          return <div key={i} className={"box3 "+(e.grupo === selected ? "selected" : "")}
            onClick={ev => {
              ev.stopPropagation()
              setSelected(e.grupo)
            }}
          >
            {e.name}
          </div>
        })
      }
    </div>
    <div className="in-flex jc mT03 li-platos">
    { platos.map((e,i) => {
        if(selected !== e.grupo) return null
        return <div key={i} className="inline-v box4">
          <div className="cir2 cover-c"
            style={{ backgroundImage: `url(images/${e.image}` }}
          >
            <div className="inner1"></div>
          </div>
          <span>{e.name}</span>
        </div>
      })
    }
    </div>
  </>

}