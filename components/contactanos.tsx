
export const ContactanosSection = () => {

  return <>
  <div className="w100" id="contacto-anchor"
    style={{ height: '0', marginTop: '-4rem', marginBottom: '4rem' }}></div>
  <div id="contacto1" className="contactanos flex mob-0 w100">
    <div className="t1 inline-v">
        <h1>CONTÁCTANOS</h1>
    </div>
    <div className="inline-v con1 mR40">
      <h2 className="mB02">NOTICIAS</h2>
      <div id="twitter-tl" className="twitter-dark inline-v">
        <div className="header">
        
          <div className="inline-v jc">
            <span><h3>Twitter Timeline</h3></span>
            <div className="inline-h">
              <span>Unicore Perú</span>
              <span className="tname">@unicoreperu</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="inline-v contact-form-ctn">
      <span className="mB02"><h3>¿Tienes alguna consulta?</h3></span>
      <div className="inline-v contact-form">
        <span className="mB03">Déjanos un mensaje y te responderemos a la brevedad</span>
        <div className="inline-h mB014">
          <span>NOMBRES</span>
          <input name="Nombre" type="text" required/>
        </div>
        <div className="inline-h mB014">
          <span>EMAIL</span>
          <input name="Email" type="email" required/>
        </div>
        <div className="inline-h">
          <span>MENSAJE</span>
          <textarea name="Mensaje" rows={12} required></textarea>
        </div>
        <div>
          <button className="b2 mT02 enviar">ENVIAR</button>
        </div>
      </div>
      <div id="enviando1" className="enviando-mensaje">
        <div className="loader">Enviado...</div>
        <span>Enviado mensaje...</span>
      </div>
      <div id="enviado1" className="mensaje-enviado">
        <span>Hemos recibido su mensaje</span>
   
        <span>Nos pondremos en contacto con usted en breve de ser el caso.</span>
        <span>Muchas gracias por su interés <br/> en Unicore.</span>
      </div>
    </div>
  </div>
    <div id="contacto2" className="mob-1 contacto4 inline-v c w100">
    <h2 className="mB03">CONTÁCTANOS</h2>
      <div className="inline-v contact-form-ctn">
        <span className="mB02"><h3>¿Tienes alguna consulta?</h3></span>
        <div className="inline-v contact-form mob">
          <span className="mB03">Déjanos un mensaje y te responderemos a la brevedad</span>
          <div className="inline-h mB014">
            <span>NOMBRES</span>
            <input name="Nombre" type="text" required />
          </div>
          <div className="inline-h mB014">
            <span>EMAIL</span>
            <input name="Email" type="email" required />
          </div>
          <div className="inline-h">
            <span>MENSAJE</span>
            <textarea name="Mensaje" rows={12} required></textarea>
          </div>
          <div>
            <button className="b2 mT02 enviar">ENVIAR</button>
          </div>
        </div>  
        <div id="enviando1" className="enviando-mensaje">
          <div className="loader">Enviado...</div>
          <span>Enviado mensaje...</span>
        </div>
        <div id="enviado1" className="mensaje-enviado">
          <span>Hemos recibido su mensaje</span>
      
          <span>Nos pondremos en contacto con usted en breve de ser el caso.</span>
          <span>Muchas gracias por su interés <br/> en Unicore.</span>
        </div>
      </div>
    </div>
  </>
}