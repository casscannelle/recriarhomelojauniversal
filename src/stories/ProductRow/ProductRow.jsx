import './ProductRow.css'
import React from 'react';
import Products from '../Products/Products';

export const ProductRow = (props) => {
    return (
        <section className="produtos"> 
            <h3>{props.nome}</h3>
            <div>
                <Products />
            </div>
        </section>
    )
};

