// Configuración de Google Analytics
export const initGlobals = () => {

  window.dataLayer = window.dataLayer || []
  window.gtag = () => { dataLayer.push(arguments) }
  gtag('js', new Date()); gtag('config', 'UA-96862731-6');
  
  const d = document
  window.Id = (x) => { return d.getElementById(x) }

  // FUNCIÓN PARA FORMATEAR LA FECHA
  window.date1 = (date) => {
      var d;
      if(date){ d = new Date(date);
      } else { d = new Date() }
  
      let dia = d.getDate();
      if(dia < 10){ dia = "0"+dia }
      let mes = d.getMonth()+1;
      if(mes < 10){ mes = "0"+mes }
      let year = d.getFullYear();
      year = String(year).substr(2,2)
  
      return dia+"-"+mes+"-"+year;
  }
  
  window.fDate = (date,opt) => {
    // Validas las fechas
    if(!date) date = 946738800000;
    if(date < 100000000000) date = date*60000;
    var d; // La fecha a parsear
    date ? d = new Date(date) : d = new Date()
    // Obtiene el día
    let dia = d.getDate(); if(dia < 10) dia = "0"+dia;
    // Obtiene el mes
    let mes = d.getMonth()+1; if(mes < 10) mes = "0"+mes;
    // Obtiene el año
    let fullYear = d.getFullYear();
    let year = String(fullYear).substr(2,2);
  
    if(!opt || opt === 1) return dia+"-"+mes+"-"+year;
    if(opt === 4) return fullYear+"-"+mes+"-"+dia;
    // Obtiene la hora y minueros
    let hora = d.getHours(); if(hora < 10) hora = "0"+hora;    
    let min = d.getMinutes(); if(min < 10) min = "0"+min;
  
    if(opt === 2)
        return dia+"-"+mes+"-"+year+" "+hora+":"+min;
    if(opt === 3)
        return dia+"-"+mes+"-"+year+" ("+hora+":"+min+")";
    // Obtiene los segundos
    let sec = d.getSeconds(); if(sec < 10) sec = "0"+sec;
    if(opt === 5) return hora+":"+min+":"+sec;
  }
  
  // FUNCIÓN PARA EL FORMULARIO DE CONTACTO
  // Indicador de espera de respuesta del servidor
  window.sss = false; 
  window.sendFormMessage = function(form){
    if(!form) return
    let This = this;
    let formContainer = form.parentElement;
    let sendButton = form.querySelector('button.enviar');
    // let inputs = form.querySelectorAll('*[contacto]');
    // Agrega validación al input de email
    let inMail = form.querySelector('input[type="email"]');
    if(inMail){
      inMail.addEventListener('blur',()=>{
        let test = regexTestMail(inMail.value);
        if(!test){ inMail.value = '' };
      })
    }
    let obj;
    sendButton.onclick = ()=>{

    }
    // Función para enviar mensaje
    this.enviarMensaje = function(obj){
      console.log('Enviando mensaje...')
      formContainer.classList.add('enviando')
      fetch("/send-contacto", {
        method: 'POST', body: JSON.stringify(obj),
        headers:{ 'Content-Type': 'application/json'}
      })
      .then(res => res.text())
      .then(res => { sss = false; // Respuesta Recibida
        formContainer.classList.remove('enviando')
        if(res === "ok"){
          formContainer.classList.add('enviado')
        } else {  alert(res); };
      });
    };
  };
  
  // FUNCIÓN PARA CORROBORAR SI UN EMAIL ES VÁLIDO
  window.regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  window.regexTestMail = (e) => { return regexMail.test(e) }
  window.bodyHeight
  window.addEventListener('DOMContentLoaded', ()=>{ 
    bodyHeight = d.body.clientHeight
    if(!bodyHeight) return
    window.addEventListener('scroll', ()=>{ 
      if(bodyHeight !== d.body.clientHeight){
        let event = new CustomEvent('bodyResize')
        window.dispatchEvent(event);
        bodyHeight = d.body.clientHeight;
        console.log('bodyResize...')
      }
    })
  })
  
  // EFECTO DE ANIMACIÓN ON SCROLL
  window.onScollAnimate = function(elm,css,n1,n2){
    // console.log("creando animacion...")
    let eT, eH, wH, wy, apear, disapear; // Variables
    if(!n1) n1 = 90; // Porción que se agrega luego del apear
    if(!n2) n2 = 80; // Porción que se agrega antes del disapear
    if(!css) css = "anm1"; // Clase de CSS
    // console.log(css+" | "+n1+" | "+n2);
    var apeared = false; // Estado de si apareció
    // Actualiza las varibles de distancia
    function updateVars(){
      // Distancia del margen superior del elemento hasta el Top
      eT = 0; let _elm = elm;
      while(_elm){eT += _elm.offsetTop; _elm = _elm.offsetParent};
      eH = elm.offsetHeight; // Altura del elemento	
      wH = window.innerHeight; // Altura de la pantalla
      // Distancia donde el elemento comienza a aparecer en el viewport
      apear = eT - wH + n1;
      // Distancia donde el elemento desaparece del viewport
      disapear = eT + eH - n2 * 2;
    }; updateVars();
    // Cambia la posición del backgroud
    function animate(){
      
      wy = window.scrollY; // Posición del scroll
      // console.log("Scroll: "+wy+" | Apear : "+apear+" | Disapear :"+disapear);
      if( wy > apear && wy < disapear && !apeared){
        elm.classList.add(css); apeared = true;
      } else if ( wy < apear && apeared){
        elm.classList.remove(css); apeared = false;
      } else if ( wy > disapear && apeared){
        elm.classList.remove(css); apeared = false;
      } else return;
    }
    window.addEventListener('bodyResize', ()=>{ 
      updateVars(); animate()
    });
    window.addEventListener('resize', ()=>{ 
      updateVars(); animate()
    });
    window.addEventListener("scroll", animate);
  }
  
  window.addEventListener('DOMContentLoaded', ()=>{ 
    let anime = d.querySelectorAll('[anime]');
    anime = Array.from(anime);
    for(let e of anime){
      e.classList.add("anime");
      let conf = e.getAttribute("anime");
      conf = conf.split(":");
      if(conf[1]) conf[1] = parseInt(conf[1]);
      if(conf[2]) conf[2] = parseInt(conf[2]);
      new onScollAnimate(e,conf[0],conf[1],conf[2]);
    }
  });
}

