import { CSSProperties, useState } from "react";
import ReactSimplyCarousel from 'react-simply-carousel';

const nosotrosMisionPalabras = [
  { name: "Desarrollar",
    desc: "El desarrollo es un proceso sinérgico, metódico y constructivo que lleva a la concretación o mejora de una cosa, persona o idea. En UNICORE estamos constantemente desarrollando y desarrollándonos."
  },
  { name: "soluciones",
    desc: "Toda solución apunta a resolver un problema e incentivar un cambio. Todas nuestros proyectos nacen del diagnóstico de una necesidad, agregando valor a la sociedad."
  },
  { name: "tecnológicas",
    desc: "La tecnología es la sistematización instrumental de un conocimiento que va desde un software ERP como GERP hasta los métodos cuantitativos para la toma de decisiones que utilizamos en nuestras asesorías."
  },
  { name: "basadas en infraestructuras web",
    desc: "La web soluciona el problema de la convergencia y hace que el software pueda ejecutarse en cualquier dispositivo y OS. La infraestructura (servidores, base de datos, fibra óptica, SSD, DNS, CDN) es ahora más económica, rápida, accesible y potente que nunca."
  },
  { name: "bajo un modelo",
    desc: ""
  },
  { name: "escalable",
    desc: "Un sistema escalable es aquél cuya base está diseñada para incorporar nuevas funcionalidades, de forma que pueda expandirse, desarrollarse y actualizarse fácilmente."
  },
  { name: "accesible",
    desc: "Creemos que la tecnología debe ser accesible e inclusiva para facilitar su adopción en la realidad peruana, por ello buscamos que nuestros productos y servicios estén al alcance de cualquier empresa o usuario."
  },
  { name: "y replicable",
    desc: "Un software replicable es aquél que no necesita una configuración personalizada (a medida) para ser utilizado, es decir, se distribuyen réplicas exactas, lo que posibilita su masificación reduciendo los costos."
  },
  { name: "integrando soporte",
    desc: "El soporte es el proceso de ayudar a nuestros clientes a que aprendan el uso de las tecnologías que ofrecemos, de forma que obtengan resultados más rápido y con menos esfuerzo."
  },
  { name: "y",
    desc: ""
  },
  { name: "asesoría a nivel de gestión",
    desc: "La asesoría implica un diagnóstico situacional de la empresa, desde su abastecimiento hasta el manejo de su información. La tecnología es una herramienta, sin embargo, todo comienza en la gestión y en la planificación."
  },
  { name: "con el fin de",
    desc: ""
  },
  { name: "mejorar los procesos,",
    desc: "El enfoque basado en procesos (ISO 9001) implica conocer sus entradas y salidas, sus confluencias e interdependencias, para comprender cómo se articula la empresa, revelando puntos de mejora."
  },
  { name: "actividades",
    desc: "Entendemos la actividad como las acciones (internas o externas) que realiza una empresa en consecución de sus objetivos, los cuales pueden medirse con indicadores financieros, comerciales y de gestión."
  },
  { name: "y",
    desc: ""
  },
  { name: "decisiones",
    desc: "Toda herramienta de gestión está orientada, en última instancia y en cualquier nivel de la empresa, a mejorar, afinar y otorgar evidencias para la toma de desiciones; dado que, conjuntamente, enrumban la actividad empresarial."
  },
  { name: "de las",
    desc: ""
  },
  { name: "empresas peruanas.",
    desc: "Las -pequeñas- empresas peruanas necesitan incorporar tecnologías, métodos de gestión y manejo de la información dentro de sus procesos, dada la cultura empresarial predominante. Nos sumamos al reto de modernizar la gestión del empresariado peruano, llevándolo a nuevos horizontes."
  },
]

export const NosotrosMision = () => {

  const [ THIS ] = useState({ timmer: null as NodeJS.Timeout } )
  const [ content, setContent ] = useState("")

  return <>
    <div id="mision1" className="flex mision1 mw130h w100 mB04">
      { nosotrosMisionPalabras.map(({ name, desc }) => {
          if(!desc) return <div>{name}</div>
          return <div className="mi"
            onMouseEnter={ev => {
              ev.stopPropagation()
              if(THIS.timmer){
                clearTimeout(THIS.timmer)
              }
              setContent(desc)
            }}
            onMouseLeave={ev => {
              ev.stopPropagation()
              THIS.timmer = setTimeout(()=> {
                setContent("")
              },200)
            }}
          >
            {name}
          </div>
        })
      }
    </div>
    <div className="mT02 w60">
      <span id="mision-des">{content || "(Pasa el mouse por las palabras para comprender a detalle nuestra misión)"}</span>
    </div>
  </>
}

export const ExplicacionDeLaMision = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  
  const style: CSSProperties = {
    alignSelf: 'center',
    background: 'black',
    border: 'none',
    borderRadius: '50%',
    color: 'white',
    cursor: 'pointer',
    fontSize: '20px',
    height: 30,
    lineHeight: 1,
    textAlign: 'center',
    width: 30,
    position: 'absolute',
    bottom: '-2rem',
    zIndex: 50
  }

  return <div className="p-rel w100">
    <ReactSimplyCarousel
      activeSlideIndex={activeSlideIndex}
      onRequestChange={setActiveSlideIndex}
      itemsToShow={1}
      infinite={true}
      itemsToScroll={1}
      forwardBtnProps={{
        //here you can also pass className, or any other button element attributes
        style: { ...style, right: '20vw' },
        children: <span>{`>`}</span>,
      }}
      backwardBtnProps={{
        //here you can also pass className, or any other button element attributes
        style: { ...style, left: '20vw' },
        children: <span>{`<`}</span>,
      }}
      responsiveProps={[
        {
          itemsToShow: 1,
          itemsToScroll: 1,
        },
      ]}
      speed={400}
      easing="linear"
    >
      { nosotrosMisionPalabras.map(x => {
          if(!x.desc){
            return null
          }
          return <div className="inline-v jc sl4 w100" style={{ width: '82vw' }}>
              <h3 className="mB02 title-2">{x.name}</h3>
              <span className="h5 subt-2">{x.desc}</span>
          </div>
        })
      }
    </ReactSimplyCarousel>
  </div>
}

export const CosmovisionList = [
  "Creemos en la tolerancia y el respeto, en los derechos individuales y en que cada persona es una expresión legítima y valorable de sí misma.",
  "Creemos en que las empresas, de cualquier tamaño, son el motor de la generación de valor y que su iniciativa es indispensable para el desarrollo.",
  "Creemos que todas las profesiones son trascendentes y que el arte es una expresión sublime del sentir humano.",
  "Creemos que la tecnología, el conocimiento y la información deben ser accesibles y transparentes.",
  "Creemos que la única forma de que los países y gobiernos avancen en la senda del desarrollo es mediante una población culta, educada e informada.",
  "Creemos en el método científico y en que la toma de decisiones debe ser racional, insesgada, imparcial y sustentada en evidencias.",
  "Creemos en que no hay respuestas sencillas para los dilemas y conflictos que afligen nuestra época pero que debemos actuar con conciencia y consenso tratando incesantemente de resolverlos.",
  "Creemos en la urgencia de detener el cambio climático y la degradación de nuestro planeta.",
  "Creemos que el inmenso poder de la tecnología debe manejarse con responsabilidad y cautela.",
  "Creemos que, a pesar de todo, cada época histórica es mejor que la anterior y por tanto creemos en la humanidad y en su capacidad de levantarse, corregirse y superarse."
]

export const CosmovisionListComponent = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  
  const style: CSSProperties = {
    alignSelf: 'center',
    background: 'black',
    border: 'none',
    borderRadius: '50%',
    color: 'white',
    cursor: 'pointer',
    fontSize: '20px',
    height: 30,
    lineHeight: 1,
    textAlign: 'center',
    width: 30,
    position: 'absolute',
    bottom: '-2rem',
    zIndex: 50
  }

  return <div className="p-rel w100">
    <ReactSimplyCarousel
      activeSlideIndex={activeSlideIndex}
      onRequestChange={setActiveSlideIndex}
      itemsToShow={1}
      infinite={true}
      itemsToScroll={1}
      forwardBtnProps={{
        //here you can also pass className, or any other button element attributes
        style: { ...style, right: '20vw' },
        children: <span>{`>`}</span>,
      }}
      backwardBtnProps={{
        //here you can also pass className, or any other button element attributes
        style: { ...style, left: '20vw' },
        children: <span>{`<`}</span>,
      }}
      responsiveProps={[
        {
          itemsToShow: 1,
          itemsToScroll: 1,
        },
      ]}
      speed={400}
      easing="linear"
    >
      { CosmovisionList.map((content, idx) => {
          return <div className="inline-v jc sl4 w100" style={{ width: '82vw' }}>
            <h2 className="mB02">{idx+1} / 10</h2>
            <span>{content}</span>
          </div>
        })
      }
    </ReactSimplyCarousel>
  </div>
}

const OrigenDeLaMarca = [
  "El primer logo fue una ilustración bicromática que muestra un árbol enraizando en un cerebro. El árbol y el pájaro representan una concepción panteísta de la naturaleza como sistema y sujeto. El átomo en el centro representa la materia y el sol, la energía, haciendo referencia a dicotomías presentes en la física como: materia-energía, partícula-onda,física cuántica-relativista.",
  "La naturaleza, mediante el entendimiento de sus propiedades físicas, dotan al ser humano de ideas (ilustradas a través del foco) que representan el conocimiento y las invenciones que han ido dando forma al mundo. La tecnología la interpretamos como una instrumentalización de los arquetipos de la naturaleza.",
  "El ser humano se encandila y asombra al recibir el poder y la responsabilidad de cambiar la realidad. Es un niño porque eso somos ante la vastedad del universo. El cerebro enraizado simboliza la evolución y nuestro deber de preservar la vida en el mundo en compensación por los recursos que obtenemos de él."
]

export const OrigenDeLaMarcaCarrusel = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  
  const style: CSSProperties = {
    alignSelf: 'center',
    background: 'black',
    border: 'none',
    borderRadius: '50%',
    color: 'white',
    cursor: 'pointer',
    fontSize: '20px',
    height: 30,
    lineHeight: 1,
    textAlign: 'center',
    width: 30,
    position: 'absolute',
    bottom: '-2.6 rem',
    zIndex: 50
  }

  return <div className="p-rel w100" style={{ marginTop: '1rem' }}>
    <ReactSimplyCarousel
      activeSlideIndex={activeSlideIndex}
      onRequestChange={setActiveSlideIndex}
      itemsToShow={1}
      infinite={true}
      itemsToScroll={1}
      forwardBtnProps={{
        //here you can also pass className, or any other button element attributes
        style: { ...style, right: '20vw' },
        children: <span>{`>`}</span>,
      }}
      backwardBtnProps={{
        //here you can also pass className, or any other button element attributes
        style: { ...style, left: '20vw' },
        children: <span>{`<`}</span>,
      }}
      responsiveProps={[
        {
          itemsToShow: 1,
          itemsToScroll: 1,
        },
      ]}
      speed={400}
      easing="linear"
    >
      { OrigenDeLaMarca.map((content) => {
          return <div className="inline-v w100" style={{ width: '92vw' }}>
            <span className="h5" style={{ color: '#252525' }}>{content}</span>
          </div>
        })
      }
    </ReactSimplyCarousel>
  </div>
}

const ElLogoActual = [
  "Contiene el mismo significado en trazos más simples. La forma inferior azul representa una mano tendida, mientras que la forma verde representa una hoja, ilustrando la sinergia humano-naturaleza. Los círculos son partículas (materia) y la formas onduladas representan movimiento (energía), haciendo alusión a las dicotomías de la física.",
  "En el dibujo superior se aprecia la cabeza de un águila (fuerza y precisión), completando nuestra visión de la naturaleza como sistema y sujeto. El dibujo inferior posee la forma de un cetáceo, animales distinguidos por su inteligencia. En el centro se distingue además una ola de mar.",
  "El círculo negro representa la unión de todo ese universo (UNI), de la naturaleza, la vida, la mente y el ser humano, con en un eje o núcleo común (CORE). De ahí nace UNICORE, una aleación de ideas y personas cuya inspiración y sinergia las impulsa a concretar objetivos que expandan las fronteras de la humanidad."
]

export const ElLogoActualCarrusel = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  
  const style: CSSProperties = {
    alignSelf: 'center',
    background: 'black',
    border: 'none',
    borderRadius: '50%',
    color: 'white',
    cursor: 'pointer',
    fontSize: '20px',
    height: 30,
    lineHeight: 1,
    textAlign: 'center',
    width: 30,
    position: 'absolute',
    bottom: '-2.6rem',
    zIndex: 50
  }

  return <div className="p-rel w100" style={{ marginTop: '1rem' }}>
    <ReactSimplyCarousel
      activeSlideIndex={activeSlideIndex}
      onRequestChange={setActiveSlideIndex}
      itemsToShow={1}
      infinite={true}
      itemsToScroll={1}
      forwardBtnProps={{
        //here you can also pass className, or any other button element attributes
        style: { ...style, right: '20vw' },
        children: <span>{`>`}</span>,
      }}
      backwardBtnProps={{
        //here you can also pass className, or any other button element attributes
        style: { ...style, left: '20vw' },
        children: <span>{`<`}</span>,
      }}
      responsiveProps={[
        {
          itemsToShow: 1,
          itemsToScroll: 1,
        },
      ]}
      speed={400}
      easing="linear"
    >
      { ElLogoActual.map((content) => {
          return <div className="inline-v w100" style={{ width: '92vw' }}>
            <span className="h5" style={{ color: '#252525' }}>{content}</span>
          </div>
        })
      }
    </ReactSimplyCarousel>
  </div>
}