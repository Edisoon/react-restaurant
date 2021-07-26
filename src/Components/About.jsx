import React from 'react';
import aboutimage from '../images/about.png'

function About() {
    return (
        <div id='about'>
            <div className="about-text">
                <h1>Evento Siguiente</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim vitae incidunt dolorem illum officiis at aliquid explicabo necessitatibus animi, itaque adipisci alias. Assumenda, molestiae nostrum.</p>
                <button>Leer Mas</button>
            </div>
            <div className="about-image">
                <img src={aboutimage} alt="" />
            </div>
            
        </div>
    )
}

export default About;
