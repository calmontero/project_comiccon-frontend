import React from 'react'
import { Link } from 'react-router-dom'
//import '../styles/NavBar.css'

function NavBar() {
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/programs">Programs</Link>
        </div>
    )
}

export default NavBar;