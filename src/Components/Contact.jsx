import React from 'react'

function Contact() {
    return (
        <div id='contact'>
            <h1>Reserva Tu Mesa</h1>
            <form>
                <input type="text" placeholder='Nombre Completo'/>    
                <input type="email" placeholder='Tu Email'/>   
                <textarea placeholder='Escribe alguna nota aqui...'></textarea> 
                <input type="submit" value='HAZ TU RESERVA'/>
            </form>            
        </div>
    )
}

export default Contact;
