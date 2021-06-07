import React from 'react'

const Footer = ({disclaimer, builtBy, link}) => {
    return (
        <footer>
            <p>{disclaimer}</p>
            <p>{builtBy} <a href={link}>Peter Cameron</a> &copy; {new Date().getFullYear()}</p>
        </footer>
    )
}

export default Footer
