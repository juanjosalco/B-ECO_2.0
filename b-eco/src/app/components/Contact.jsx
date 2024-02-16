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
            <h2 style={{color: "#006733", fontSize: "2.5rem"}}>Sigue nuestras acciones</h2>
            <p className='textF'>En el corazón del cambio y la acción, te invitamos a ser parte de algo más grande que tú mismo. Bienvenido a B-eco, donde la pasión por la sostenibilidad se convierte en un catalizador para transformar ideas en acciones tangibles y crear un impacto duradero.

            La revolución sostenible está en marcha, y en B-eco, queremos que seas parte de ella. Únete a nosotros, donde la pasión se encuentra con la acción y donde cada pequeño paso nos acerca a un mañana más brillante. ¡Te invitamos a ser parte de la revolución B-eco!

            ¿Listo para unirte? ¡Nosotros estamos listos para transformar juntos! 🌿</p>

            <form ref={form} 
            onSubmit = {sendEmail}
            className="contactInfo">
                <input type='text'
                    placeholder='Full Name'
                    name = 'user_name' required />
                <input type='email'
                    placeholder='Email'
                    name = 'user_email' required />
                <input type='text'
                    placeholder='Subject'
                    name = 'subject' required />
                <textarea></textarea>
                <button type="submit" className='button'>
                    Send message
                </button>
            </form>
        </section>
    )
}

export default Contact