import React from 'react'
import {Link} from 'react-router-dom'


export default function Nav() {
    return (
        <>
        <div className="nav-container">
            <img src="weather.png" alt="logo"/>
            <h1 className="title">Weather Now</h1>
            <nav>
                <Link className="nav-links" to="/">
                <h1>Home</h1>
                </Link>
                <Link className="nav-links" to="/contact">
                <h1>Contact</h1>
                </Link>
            </nav>
        </div>
        </>
    )
}
