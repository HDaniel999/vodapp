import React from 'react'
import './Carousel.css'

export function Carousel (props) {

    return(
        <div className="carousel" id="movies">
            {props.children}
        </div>
    )
}

export default Carousel