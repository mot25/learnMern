import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

export default function Navbar() {
    return (
        <nav className='navbar'>
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">MERN TODO APP</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="sass.html">Enter</Link></li>
                </ul>
            </div>
        </nav>
    )
}
