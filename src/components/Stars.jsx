import React from 'react'
import starImg from '../assets/star.png';




export const Stars = ({ count }) => {
    return (
        <div className="stars">
            { Array( count ).fill(  count).map(( _, key )=> (
                <img key={ key } src={ starImg } alt="stars" />
            ))}
        </div>
    )
}
