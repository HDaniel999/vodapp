import React from 'react'
import { Link } from 'react-router-dom'
import "./HomeNav.css"

export default function Navigation (props) {
    return (
        <nav {...props}>
            <div className="logo-section">
                <Link to="/" className="logo-nav"> 
                    <img className="icon-nav" src="/img/logo.svg" alt="vod app logo"/> 
                    <span className="logo-text logo-vod">VO</span><span className="logo-text logo-app">Dapp</span>
                </Link>
                {props.children}
            </div>
        </nav>
    )
}