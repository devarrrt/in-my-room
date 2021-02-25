import React, { useState, useEffect, useCallback, useRef } from 'react'
import debounce from 'lodash/debounce';
import { Product } from './components/Product'
import './App.css'




let products = Array(30).fill(0).map(() => ({
    title: 'Тумба прикроватная Rubus с двумя ящиками',
    rating: Number((Math.random() * 5 + 1).toFixed(2)),
    price: {
        new: Math.round(Math.random() * 100000),
        old: Math.round(Math.random() * 100000),
        hot: !!Math.round(Math.random() * 1)
    },
    color: 'Черный',
    material: 'Ткань',
    size: 'ш. 349 х в. 234 х г. 323',
    mechanism: 'Французская раскладушк',
    seller: 'Laska Family',
}))





export const App = () => {

const [maxCount, setMaxCount] = useState(5)
const wrapperRef = useRef(null)



const onScroll = useCallback(
    debounce( e => {
        if( e.target ) {
            const isEnd = e.target.scrollWidth - e.target.scrollLeft - 250 <= e.target.clientWidth
            if ( isEnd ) {
                setMaxCount( count => count + 1 )
            }
        }
    }, 50),
    [],
)


useEffect( ()=> {
    const { current } = wrapperRef
    current?.addEventListener( 'scroll', onScroll )
    return ( )=> [
        current?.removeEventListener( 'scroll', onScroll )
    ]
}, [ onScroll ])

useEffect( () => {
    if( wrapperRef.current && maxCount >= products.length ) {
        wrapperRef.current.removeEventListener( 'scroll', onScroll )
    }
}, [ maxCount, onScroll ] )


    return (
        <div ref={ wrapperRef } className="wrapper">
            <ul className="columns columns--first">
                <li></li>
                <li>Рейтинг</li>
                <li>Цена</li>
                <li>Цвет</li>
                <li>Материал</li>
                <li>Размеры</li>
                <li>Механизм</li>
                <li>Продавец</li>
            </ul>
            { products.slice( 0, maxCount).map( (product, index) => (
                <Product { ...product } key={ index } />
            )) }
        </div>
    )
}
