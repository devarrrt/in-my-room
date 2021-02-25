import React from 'react'
import tumbaImg from '../assets/tumba.png'
import heartSvg from '../assets/heart.svg'
import cartSvg from '../assets/cart.svg'
import { Stars } from './Stars'





const randomPrice = ( price ) => {
    price.toString().replace( /\B(?=(\d{3})+(?!\d))/g, '' )
}

export const Product = ({
    title,
    rating,
    price,
    color,
    material,
    size,
    mechanism,
    seller, }) => {
    return (
        <div className="product">
            <div className="product__overlay"></div>
            <ul className="columns columns--product">
                <li>
                    <div className="columns__preview">
                        <div className="columns__preview-image">
                            <img width="148" src={tumbaImg} alt="Тумба" />
                        </div>
                        <h5>{title}</h5>
                    </div>
                </li>

                <li className="columns__rating">
                    <Stars count={ Math.floor( rating ) } />
                    <b> {rating} </b>
                </li>

                <li className={`columns__price ${price.hot ? 'columns__price--hot' : ''}`}>
                    <span> {randomPrice( price.new )} p. </span>
                    <span>{randomPrice( price.old )} p. </span>
                </li>

                <li>{color}</li>
                <li>{material}</li>
                <li>{size}</li>
                <li>{mechanism}</li>
                <li>
                    <a href="/">{seller}</a>
                </li>

                <button className="button button--like"> 
                <img src={ heartSvg } alt="like" />
                </button>

                <button className="button button--cart">
                <img src={ cartSvg } alt="like" />
                    <span> Купить </span>
                </button>
            </ul>
        </div>
    )
}
