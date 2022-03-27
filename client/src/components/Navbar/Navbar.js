import React from 'react'
import './Navbar.scss'

export default function Navbar() {
    return (
        <nav className='navbar'>
            <div className="nav-wrapper">
                <a href="/" className="brand-logo">MERN TODO APP</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="sass.html">Enter</a></li>
                </ul>
            </div>
        </nav>
    )
}
