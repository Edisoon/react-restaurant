import React from 'react'

function Header() {
    return (
        <div id='main'>
            <div className="header-heading">
                <h3>Es un buen momento para una buena Hamburgesa!</h3>
                <h1><span>Hamburgesa</span> del<br/> Mes</h1>
                <p className="details">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className="header-btns">
                    <a href="#" className="header-btn">Ordena Ya!</a>
                </div>
            </div>
        </div>
    )
}

export default Header;
