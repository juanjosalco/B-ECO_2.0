"use client";
import {React, useRef} from 'react';
import '../styles/Contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
        const form = useRef()
        const sendEmail = (e) => {
            e.preventDefault();
        
            emailjs
              .sendForm('service_9yqogri', 'template_scyvczr', form.current, {
                publicKey: 'uTgNVas0TYVGHRs43',
              })
              .then((result) => {
                  console.log('SUCCES...',result.text);
                }, (error) => {
                  console.log('FAILED...', error.text);
                },
                e.target.reset()
              );
          };
    return(
        <section className="contactUsContainer">
            <section className='contactIntro'>
                <h2 style={{color: "#006733", fontSize: "2.5rem"}}>Quieres colaborar con nosotros?</h2>
                <p className='textF'>En el corazón del cambio y la acción, te invitamos a ser parte de algo más grande que tú mismo. Bienvenido a B-eco, donde la pasión por la sostenibilidad se convierte en un catalizador para transformar ideas en acciones tangibles y crear un impacto duradero.

                La revolución sostenible está en marcha, y en B-eco, queremos que seas parte de ella. Únete a nosotros, donde la pasión se encuentra con la acción y donde cada pequeño paso nos acerca a un mañana más brillante. ¡Te invitamos a ser parte de la revolución B-eco!

                ¿Listo para unirte? ¡Nosotros estamos listos para transformar juntos! 🌿</p>
            </section>
            <form ref={form} 
                onSubmit = {sendEmail}>
                    <section className="contactInfo">
                        <div className='names'>
                            <div className='firstName'>
                                    <label for="fname" style={{fontWeight: "bold", marginLeft: "1rem"}}>Nombre(s)</label>
                                    <input type="text" id="fname" name="fname" className='FirstcontactInput'/>
                            </div>
                            <div className='lastName'>
                                <label for="lname" style={{fontWeight: "bold", marginLeft: "1rem"}}>Apellido(s)</label>
                                <input type="text" id="lname" name="lname" className='FirstcontactInput'/>
                            </div>
                        </div>
                        <div className='email'>
                            <div style={{fontWeight: "bold", marginLeft: "1rem"}}>Correo</div>
                            <input type='email'
                                name = 'user_email' required 
                                className='contactInput'/>
                        </div>
                        <div className='tel'>
                            <div style={{fontWeight: "bold", marginLeft: "1rem"}}>Telefono Celular</div>
                            <input type='tel'
                                name = 'subject' required 
                                className='contactInput'/>
                        </div>
                        <div className='subject'>
                            <div style={{fontWeight: "bold", marginLeft: "1rem"}}>Motivo / Descripcion de colaboración con B-ECO</div>
                            <textarea className='subjectInput'></textarea>
                        </div>
                    </section>

                    <section className="sendInfo">
                        <button type="submit" className='buttonEnviar'>
                            <span>
                                Enviar
                            </span>
                        </button>
                    </section>
            </form>
        </section>
    )
}

export default Contact