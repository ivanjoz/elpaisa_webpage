import { useEffect } from "react";
import { AnimateEffect2, AnimateIn, FooterBar, MenuBar } from "../components/components";

import esquina5_svg from "@svg/esquina5.svg";
import frame2_svg from "@svg/frame2.svg";
import mensaje_enviado_svg from "@svg/mensaje_enviado.svg";
import map_logo_svg from "@svg/map_logo.svg";

import { CarruselEntradas, CarruselInicio, NuestrosPlatos } from "@/components/entradas";
import { parseSVG } from "@/components/globals";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter()

  useEffect(()=> {

  },[])

  return <>
  <MenuBar />
  <div id="inicio" className="mob-0 w100">
    <CarruselInicio />
  </div>
  <div id="inicio-mobile" style={{ backgroundImage: 'url(images/fondo_movil3.jpg)' }} 
    className="capa1-m cover-c inline-v jc mob-1 w100">
    <div className="box5 inline-v jc">
      <span className="bienve">Bienvenidos</span>
      <span className="elpaisa">El Paisa</span>
      <span className="text4">RESTAURANT TURÍSTICO</span>
    </div>
  </div>
  <div className="reservar-m inline-v mob-1 w100">
    <button onClick={ev => {
      ev.stopPropagation()
      // openReservaM()
      router.push("/carta")
    }} className="bn4">VER LA CARTA</button>
  </div>
  <div id="nosotros" className="bienvenidos mob-0 w100">
    <div className="inline-h w100 h100">
      <div className="banner1 inline-v jc">
        <span className="mB02 tt5">Sobre Nosotros</span>
        <img src="images/paisalogo3.jpg" className="mB02"/>
        <span className="text6 lh16" >
          “Somos una cadena de restaurantes, de platos marinos y criollos, que brindamos un ambiente agradable para diversos gustos, basados en un servicio personalizado, productos de calidad, con un equipo humano apasionado y comprometido en superar sus expectativas… Somos su PAISA”
        </span>
      </div>
      <div className="box1 flex">
        <div className="anchor1"></div>
        <div className="anchor2"></div>
        <AnimateIn rootMargin="-100px">
          <div style={{ backgroundImage: 'url(images/pescado.jpg)' }}
            className="square1">
            <div><span>PRODUCTOS FRESCOS <br/> Y DE CALIDAD</span></div>
            <span>Cada día seleccionamos los mejores insumos, manteniéndolos frescos para ser cocinados en un ambiente limpio y ordenado.</span>
          </div>
        </AnimateIn>
        <AnimateIn rootMargin="-100px" delay={400}>
          <div style={{ backgroundImage: 'url(images/tradicion1.jpg)' }}
            className="square1">
            <div><span>TRADICIÓN CON <br/> INNOVACIÓN</span></div>
            <span>Preparamos la comida peruana que más nos representa pero siempre buscando un sabor único que cautive hasta los más exigentes paladares.</span>
          </div>
        </AnimateIn>
        <AnimateIn rootMargin="-100px" delay={200}>
          <div style={{ backgroundImage: 'url(images/atencion2.jpg)' }}
            className="square1">
            <div><span>BUENA ATENCIÓN <br/> Y AMABILIDAD</span></div>
            <span>Estamos comprometidos a darle una atención cálida y oportuna, a resolver sus inquietures y a brindarle un servicio de primer nivel.</span>
          </div>
        </AnimateIn>
        <AnimateIn rootMargin="-100px" delay={600}>
          <div style={{ backgroundImage: 'url(images/ambiente2.jpg)' }} 
          className="square1">
            <div><span>AMBIENTE AGRADABLE <br/> Y FAMILIAR</span></div>
            <span>Contamos con un ambiente para sentirse en familia, con estacionamiento, música en vivo, WI-FI, baños limpios y más comodidades.</span>
          </div>
        </AnimateIn>
      </div>
    </div>
  </div>  
  <div id="nosotros-mobile" className="bienvenidos-m mob-1 inline-v jc w100">
    <div className="box6 inline-v">
      <span className="mB02 h3 light">SOBRE NOSOTROS</span>
      <img src="images/paisalogo3.jpg" className="mB02"/>
      <span className="text5 lh16" >
        “Somos una cadena de restaurantes, de platos marinos y criollos, que brindamos un ambiente agradable para diversos gustos, basados en un servicio personalizado, productos de calidad, con un equipo humano apasionado y comprometido en superar sus expectativas… Somos su PAISA”
      </span>
    </div>
  </div>
  <div className="inline-v bienvenidos2-m mob-1 w100">
    <AnimateEffect2 cssOnShow="animate" rootMargin="0px 0px -450px 0px"
      style={{ backgroundImage: 'url(images/pescado.jpg)' }}
      className="square3 mB03 cover-c"
    >
     <div className="box">
        <div>PRODUCTOS FRESCOS <br/> Y DE CALIDAD</div>
        <div>
          <span>Cada día seleccionamos los mejores insumos, manteniéndolos frescos para ser cocinados en un ambiente limpio y ordenado.</span>
        </div>
      </div>
    </AnimateEffect2>
    <AnimateEffect2 cssOnShow="animate" rootMargin="0px 0px -450px 0px"
      style={{ backgroundImage: 'url(images/tradicion1.jpg)' }}
      className="square3 mB03 cover-c"
    >
      <div className="box">
        <div>TRADICIÓN CON <br/> INNOVACIÓN</div>
        <div>
          <span>Preparamos la comida peruana que más nos representa pero siempre buscando un sabor único que cautive hasta los más exigentes paladares.</span>
        </div>
      </div>
    </AnimateEffect2>
    <AnimateEffect2 cssOnShow="animate" rootMargin="0px 0px -450px 0px"
      style={{ backgroundImage: 'url(images/atencion2.jpg)' }}
      className="square3 mB03 cover-c"
    >
      <div className="box">
        <div>BUENA ATENCIÓN <br/> Y AMABILIDAD</div>
        <div>
          <span>Estamos comprometidos a darle una atención cálida y oportuna, a resolver sus inquietures y a brindarle un servicio de primer nivel.</span>
        </div>
      </div>
    </AnimateEffect2>
    <AnimateEffect2 cssOnShow="animate" rootMargin="0px 0px -450px 0px"
      style={{ backgroundImage: 'url(images/ambiente2.jpg)' }}
      className="square3 mB03 cover-c"
    >
      <div className="box">
        <div>AMBIENTE AGRADABLE <br/> Y FAMILIAR</div>
        <div>
          <span>Contamos con un ambiente para sentirse en familia, con estacionamiento, música en vivo, WI-FI, baños limpios y más comodidades.</span>
        </div>
      </div>
    </AnimateEffect2>
  </div>

  <div id="servicios" style={{ backgroundImage: 'url(images/back1.jpg)' }}
    className="servicios1 cover-c mob-0 w100">
    <div className="cover2"></div>
    <div className="cover1 inline-v jc">
      <div className="inline-v rec1">
        <span className="t1">Servicios</span>
        <div id="servicios1" className="inline-h">
          <div className="box2" role="wifi">
            <i className="icon-wifi"></i>
            <span>WIFI GRATIS</span>
          </div>
          <div className="box2 selected" role="estacionamiento">
            <i className="icon-taxi"></i>
            <span>ESTACIONAMIENTO <br/> GRATIS</span>
          </div> 
          <div className="box2" role="juegos">
            <i className="icon-cubes"></i>
            <span>JUEGOS PARA <br/> NIÑOS</span>
          </div>
          <div className="box2" role="delivery">
            <i className="icon-bicycle"></i>
            <span>DELIVERY</span>
          </div>
        </div>
        <div className="info">
          <div className="servicios-detalle">
            <div role="wifi" className="hide"><span>Contamos con conexión WIFI en todos nuestros locales para que te mantengas conectados con quienes te importan.</span></div>
            <div role="estacionamiento" className="show"><span>Contamos con playa de estacionamiento en todos nuestros locales.</span></div> 
            <div role="juegos" className="hide inline-v">
              <span>Trae a los engreidos de la casa.Contamos con juegos de niños para solo El Paisa de Santa Teresa de Ávila.</span>
              <span>Contamos con show en vivo desde la 1pm.</span>
            </div>  
            <div role="delivery" className="hide inline-v">
              <span className="h1">Central Telefónica:(44) 216410</span>
              <span>Todos los días desde de las 9:00am hasta las 4:00pm</span>
            </div>             
          </div>
        </div>
      </div>
    </div>    
  </div>

  <div id="servicios-mobile" className="servicios-m mob-1 inline-v cover-c w100"
    style={{ backgroundImage: 'url(images/fondo4.jpg)' }}
   >
    <div className="margen1"></div>
    <div className="servicios4 inline-v jc">
      <AnimateEffect2 className="box7" cssOnShow="animated" rootMargin="0px 0px -450px 0px">
        <i className="icon-wifi anime2"></i>
        <span className="anime2">WIFI GRATIS</span>
        <span className="t1">Todos nuestros locales poseen Wi-Fi gratis.</span>
      </AnimateEffect2>
      <AnimateEffect2 cssOnShow="animated" rootMargin="0px 0px -450px 0px" className="box7">
        <i className="icon-taxi anime2"></i>
        <span className="anime2">ESTACIONAMIENTO <br/> GRATIS</span>
        <span className="t1">Contamos con playa de estacionamiento en todos nuestros locales.</span>
      </AnimateEffect2>
      <AnimateEffect2 cssOnShow="animated" rootMargin="0px 0px -450px 0px" className="box7">
        <i className="icon-cubes anime2"></i>
        <span className="anime2">JUEGOS PARA <br/> NIÑOS</span>
        <span className="t1">Diviértete con tu familia y deja a los niños jugar.</span>
      </AnimateEffect2>
      <AnimateEffect2 cssOnShow="animated" rootMargin="0px 0px -450px 0px" className="box7">
        <i className="icon-bicycle anime2"></i>
        <span className="anime2">DELIVERY</span>
        <span className="t1 inline-v">CENTRAL TELEFÓNICA: <br/> (44)216410 <br/>
          <span className="h6">Todos los días desde de las 9:00am hasta las 4:00pm</span>
        </span>
      </AnimateEffect2>
    </div>
  </div>

  <div id="platos" className="platos inline-v w100">
    <span className="tt2">Nuestros Platos</span>
    <span className="mT02 pp1">NUESTROS MEJORES PLATOS A TU DISPOSICIÓN</span>
    <NuestrosPlatos />
  </div>

  <div className="mob-0 carta inline-v jc w100">
    <img className="frame1" src={parseSVG(frame2_svg)} alt="frame 2"/>
    <div className="carta1 flex">
      <div className="w100 tt2 c">Toda Nuestra Carta</div>
      <div className="colunm">
        <span>ENTRADAS</span>
        <div className="colunm list">
          <span>Leche de Tigre</span>
          <span>Leche de Pantera</span>
          <span>Ensalada Mixta Personal</span>
          <span>Ensalada Mixta Familia</span>
          <span>Yuquita Frita en Huancaína</span>
          <span>Yuquita Frita en Huacamole</span>
          <span>Papa a la Huancaína</span>
          <span>Ocopa</span>
          <span>Coctel de Langostinos</span>
          <span>Choro a la Chalaca</span>
          <span>Langostinos saltados al pisco</span>
          <span>Causa Acevichada</span>
          <span>Festival Criollo</span>
        </div>
      </div>
      <div className="colunm">
        <span>FUSIONES</span>
        <div className="colunm list">
          <span>Duo Marino</span>
          <span>Paisa Marino</span>
          <span>Juerga Marina</span>
          <span>Especial 4 Estaciones</span>
          <span>Festival de Cremas Paisa</span>
          <span>Ronda Piurana</span>
          <span>Ronda a lo Paisa</span>
        </div>
        <span>TORTILLAS</span>
        <div className="colunm list">
          <span>De Mariscos</span>
          <span>De Langostino/Calamar</span>
        </div>
      </div>
      <div className="colunm">
        <span>CEVICHES</span>
        <div className="colunm list">
          <span>Ceviche de Pescado</span>
          <span>Ceviche Mixto</span>
          <span>Ceviche Corvina/Lenguado</span>
          <span>Ceviche Mero/Ojo de Uva</span>
          <span>Ceviche Conchas Negras</span>
          <span>Ceviche Lengostino/Pulpo</span>
          <span>Ceviche Crema de Rocoto</span>
          <span>Ceviche a lo Paisa</span>
          <span>Ceviche Clásico</span>
          <span>Ceviche Clásico Especial</span>
          <span>Tiradito</span>
          <span>Tiradito Tricolor</span>
        </div>
      </div>
      <div className="colunm">
        <span>CHICHARRONES</span>
        <div className="colunm list">
          <span>Chicharrón de Pescado</span>
          <span>Chicharrón Mixto</span>
          <span>Chicharrón de Langostino</span>
          <span>Apanado</span>
          <span>Jalea Mixta</span>
          <span>Jalea Real</span>
          <span>Jalea Criolla</span>
        </div>
        <span>ARROCES</span>
        <div className="colunm list">
          <span>Arroz con Mariscos</span>
          <span>Arroz con Langostinos</span>
          <span>Arroz con Conchas Negras</span>
          <span>Chaufa de Mariscos</span>
          <span>Chaufa de Pescados</span>
          <span>Chaufa de Langostinos</span>
        </div>
      </div>
    </div>
  </div>

  <div style={{ backgroundImage: 'url(images/reservas3.jpg)' }} 
    className="reservas cover-c mob-0 w100">
    <div className="capa4 inline-v jc">
      <div className="boder3">
        <div className="black1 inline-v jc">
          <span className="tt2">Reservar Una Mesa</span>
          <span className="sub3 mB02">LA MEJOR EXPERIENCIA EN SERVICIO</span>
          {/* <!-- Reservas 1 --> */}
          <div className="reserva11 inline-v">
            
            <span className="text1">
              Para reservar una mesa primero llene sus datos, luego según el número de personas pague la cantidad solicitada (desde S/.20) como adelanto a su consumo.
            </span>
            <span className="text1">Aceptamos todas las tarjetas.</span>
            <span className="text1">Se le enviará un cupón con un código a su correo.</span>
            <span className="mB02">(De lunes a viernes)</span>
            <div className="inline-h mB014">
              <input role="name" name="Nombre" className="in2 mR10" placeholder="Nombre" type="text" required/>
              <input role="tel" name="Teléfono" className="in2" placeholder="Teléfono" type="text" required/>
            </div>
            <div className="inline-h mB014">
              <input role="mail" name="Correo Eletrónico" className="in2 mR10" placeholder="Correo Electrónico" type="text" required/>
              <input role="fec" name="Fecha de Reserva" id="in-fecha1" className="in2" placeholder="Fecha" type="text" required/>
            </div>
          </div>
          {/* <!-- Reservas 2 --> */}
          <div className="reserva12 inline-v">
            <span className="text1 mB02">
              Ahora, según la cantidad de personas que asistirán seleccione el monto que abonará como adelanto a su consumo. Le enviaremos por correo un vale de consumo por dicho monto. <br/>
            </span>
            <div className="inline-h montos1 w100">
              <div role="500" key="1" className="inline-v jc mon1">
                <div>S/. <span className="fs1">20</span> .00 </div>
                <span>hasta <div className="c1">3</div></span>
                <span>personas</span>
              </div>
              <div role="3500" key="2" className="inline-v jc mon1">
                <div>S/. <span className="fs1">35</span>.00</div>
                <span>hasta <div className="c1">6</div></span>
                <span>personas</span>
              </div>
              <div role="5000" key="2" className="inline-v jc mon1">
                <div>S/. <span className="fs1">50</span>.00 </div>
                <span>+ de <div className="c1">6</div></span>
                <span>personas</span>
              </div>
            </div>
          </div>
          { /* <!-- Loader de reserva --> */}
          <div id="enviando-reserva" className="enviando-mensaje hide">
            <div className="loader">Enviado...</div>
            <span>Generando Reserva...</span>
          </div>
          {/* <!-- Confirmación de reserva --> */}
          <div className="reserva-ok inline-v hide">
            <span>Hemos registrado su reserva exitosamente</span>
            <span>Su código de reserva es:</span>
              <div id="code-reserva" style={{ fontSize: 'calc(1rem + 1vw)' }}>201-859-885</div>
            <span>o puede usar el siguiente código QR</span>
            <div className="inline-v jc ctn-img-qr">
              <img id="reserva-qr-img" style={{ width: "100%", height: "100%" }} src="images/exampleqr.png"/>
            </div>
            <span>Se ha enviado el ticket de reserva a su correo</span>
            <button id="cerrar-reserva" className="bn21 mT01">CERRAR</button>
          </div>
          {/*  <!-- Botones --> */}
          <div className="inline-h mB02 mT01">
            <button className="g-2 hide bn8" id="atras-reserva">{"<"} ATRÁS</button>
            <button id="reserva-bn1" 
              className="bn21 g-1">SIGUIENTE {">"}</button>
            <button id="reserva-pago" 
            className="bn21 g-2 hide">REALIZAR PAGO</button>
          </div>
        </div>
      </div>
      <div style={{ backgroundImage: 'url(images/reservas3.jpg)' }} 
        className="reserva-form cover-c">        
        <div className="capa5 inline-v jc">  
        </div>
        <div className="dsd">ddasd</div>
      </div>
    </div>
  </div>

  <div  id="locales" className="locales w100 inline-v jc w100">
    <div className="div1" style={{ marginBottom: "5vh" }}>
      <span className="tt2">Nuestros Locales
      </span>
    </div>
    <div className="cards2 m-wrap">
      <div className="card2 inline-v">
        <img src="images/local1.jpg" alt=""/>
        <div className="inline-v ac h5">
          <span>Las Gemas 418</span>
          <span>Urb. Santa Inés</span>
          <span className="h3 mB01" style={{ marginTop: "1.5vh" }}>(044)200450</span>
          <button onClick={ev => {
            ev.stopPropagation()
            window.open('https://goo.gl/maps/gh9Ec2D5hkkeAru68', '_blank')
          }} className="bn7 s1">
            <i className="icon-location"></i>Ver Mapa</button>
        </div>
      </div>
      <div className="card2 inline-v">
        <img src="images/local4.jpg" alt=""/>
        <div className="inline-v ac h5">
          <span>Fray Predro Urraca 515</span>
          <span>Urb. San Andrés</span>
          <span className="h3 mB01" style={{ marginTop: "1.5vh" }}>(044)225803</span>
          <button onClick={ev => {
            ev.stopPropagation()
            window.open('https://goo.gl/maps/iPpJq97XXPqjiYr2A', '_blank')
          }} className="bn7 s1">
            <i className="icon-location"></i>Ver Mapa</button>
        </div>
      </div>
      <div className="card2 inline-v">
        <img src="images/local3.jpg" alt=""/>
        <div className="inline-v ac h5">
          <span>Ca. Ricardo Palma Nº 491</span>
          <span>El Boquerón, Huanchaco.</span>
          <span className="h3 mB01" style={{ marginTop: "1.5vh" }}>(044)278997</span>
          <button onClick={ev => {
            ev.stopPropagation()
            window.open('https://goo.gl/maps/gYZWMUG3V8dJc6Ds9', '_blank')
          }} className="bn7 s1">
              <i className="icon-location"></i>Ver Mapa</button>
        </div>
      </div>
      <div className="card2 inline-v">
        <img src="images/local2.jpg" alt=""/>
        <div className="inline-v ac h5">
          <span>Ca. Algallpampa Mz LL Lt.12</span>
          <span>Urb. Santa Teresa</span>
          <span className="h3 mB01" style={{ marginTop: "1.5vh" }}>(044)215606</span>
          <button onClick={ev => {
            ev.stopPropagation()
            window.open('https://goo.gl/maps/r1smkoQ8yfnUrpmp6', '_blank')
          }} className="bn7 s1">
              <i className="icon-location"></i>Ver Mapa</button>
        </div>
      </div>
    </div>
  </div>

  <div id="galeria" className="galeria1 inline-v jc w100">
    <span className="tt2 mB02">Galería de Fotos</span>
    <AnimateEffect2 cssOnShow="show">
      <div id="galeria1" className="gal1 inline-h">
        <div id="anchor3" className="anchor3"></div>
        <div id="anchor4" className="anchor4"></div>
        <div>
          <div className="box9 ancho box9 an1-top">
            <img role="ancho" src="cms/S_1570567498.jpeg"/>
          </div>
          <div className="inline-h">
            <div className="inline-v">
              <div className="box9 an1-left">
                <img role="normal" src="cms/S_1570567444.jpeg"/>
              </div>
              <div className="box9 an1-left">
                <img role="normal" src="cms/S_1571956940.jpeg"/>
              </div>
            </div>
            <div className="inline-v an1-bottom">
              <div className="box9 alto">
                <img role="alto" src="cms/S_1571956924.jpeg"/>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="inline-h reverse">

              <div className="inline-v">
                <div className="box9 an1-top">
                  <img role="normal" src="cms/S_1570567444.jpeg"/>
                </div>
                <div className="box9 an1-right">
                  <img role="normal" src="cms/S_1570567454.jpeg"/>
                </div>
              </div>

              <div className="inline-v">
                <div className="box9 alto an1-right">
                  <img role="alto" src="cms/S_1571957118.jpeg"/>
                </div>
              </div>
            </div>

            <div className="box9 ancho an1-bottom">
              <img role="ancho" src="cms/S_1571956953.jpeg"/>
            </div>

          </div>
        </div>
      </div>
    </AnimateEffect2>
  </div>

  {/* <!-- NOTICIAS --> */}
  <div id="noticias" className="noticias inline-v w100">
    <img className="esquina5" src={parseSVG(esquina5_svg)}/>
    <span className="tt2 mB01">Noticias</span>
    <CarruselEntradas/>
  </div>
          
  <div className="redes inline-v w100">
    <span className="tt2 mB01">Redes Sociales</span>
    <div className="inline-h m">
      <iframe className="iframe1" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Felpaisainternacional%2F&tabs=timeline&width=500&height=450&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=693927014404441" width="500" height="450" 
      style={{ border: 'none', overflow: 'hidden' }} 
      scrolling="no" frameBorder={0} allow="encrypted-media"></iframe>
      <div className="inline-v">
        
        <iframe className="iframe2" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Felpaisainternacional%2Fvideos%2F414164495815275%2F&width=550&show_text=false&appId=693927014404441&height=308" width="550" height="308" 
        style={{ border: 'none', overflow: 'hidden' }}  scrolling="no" frameBorder={0}allow="encrypted-media" allowFullScreen={true}></iframe>

        <button className="bn21" onClick={ev => {
          ev.stopPropagation()
          window.open('https://www.facebook.com/pg/elpaisainternacional/videos/', '_blank')
        }}>MÁS VIDEOS</button>
      </div>
    </div>
  </div>
  
  <div id="contacto" className="contacto2 inline-v ac w100">
    <div className="contact-form-ctn inline-v">
      <span className="tt2 mB01">CONTÁCTANOS</span>
      <span className="text7 light">NO DUDE EN PONERSE EN CONTACTO CON NOSOTROS Y HACERNOS UNA CONSULTA</span>
      <div className="form1 form-hide inline-v">
        <div className="inline w100 contact-inputs">
          <input role="nombre" name="Nombre" placeholder="Nombre" className="in4" type="text" required/>
          <input name="Asunto" role="asunto" placeholder="Asunto" className="in4" type="text" required/>
          <input name="Correo Electrónico" role="mail" placeholder="Correo Electrónico" className="in4" type="email" required/>
        </div>
        <textarea name="Contenido del Mensaje" role="contenido" placeholder="Mensaje Aquí..." className="in4 w100 mT03" cols={30} rows={7} required></textarea>
      </div>
      <button className="bn21 s1 enviar form-hide">ENVIAR MENSAJE</button>
      <div id="enviando1" className="enviando-mensaje">
        <div className="loader">Enviado...</div>
        <span>Enviado mensaje...</span>
      </div>
      <div id="enviado1" className="mensaje-enviado">
        <span>Hemos recibido su mensaje</span>
        <img src={parseSVG(mensaje_enviado_svg)} alt="mensaje enviado"/>
        <span>Nos pondremos en contacto con usted en breve de ser el caso.</span>
        <span>Muchas gracias por su interés <br/> en El Paisa.</span>
      </div>
    </div>
  </div>
  <div className="mapa1 cover-c inline-v jc w100" 
    style={{ backgroundImage: "url(svg/paisa_map2.svg)" }}>
    <div className="cir3 inline-v jc hide">
      <span>VER EN MAPS</span>
      <img src={parseSVG(map_logo_svg)} alt="map logo"/>
    </div>
    <button className="bn21 s1" style={{marginRight: "25%",  marginTop: "20%" }}>
      VER EN MAPAS
    </button>
  </div>
  <FooterBar/>
</>
}
