import React from 'react';
import Productbox from './Productbox';
import pimage1 from '../images/s1.png'
import pimage2 from '../images/s2.png'

function Products() {
    return (
        <div id='products'>
            <h1>Escoge & Disfruta</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad aliquid nam voluptates tempora ducimus? Voluptate!</p>
            <div className="a-container">
                <Productbox image={pimage1} title='Super Smash'/>
                <Productbox image={pimage2} title='Super Pulled'/>
                <Productbox image={pimage1} title='Bacconator'/>
            </div>
        </div>
    )
}

export default Products;
