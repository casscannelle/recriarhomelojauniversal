import './ProductRow.css'
import React from 'react';
import CardProduct from '../CardProduct/CardProduct';

export const ProductRow = (props) => {
    return (
        <section className="produtos"> 
            <h3>{props.nome}</h3>
            <div className="inline-produtos">
            <CardProduct /> 
            <CardProduct /> 
            <CardProduct />
            <CardProduct />
            <CardProduct />
            </div>
        </section>
    )
}