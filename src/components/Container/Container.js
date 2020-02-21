import React from 'react'
import './Conatiner.css'
export default function Conatiner (props) {
    return(
        <div className='Container other'>
            {props.children}
        </div>
    )
}