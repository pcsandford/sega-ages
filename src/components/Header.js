import React from 'react'

const Header = props => {
    
    return (
        <header>
            <h1><span className="sega-text">{props.titleLeft}</span> – <span className="ages-text">{props.titleRight}</span></h1>
            <h2>{props.subtitle}</h2>
        </header>
    )
}

export default Header
