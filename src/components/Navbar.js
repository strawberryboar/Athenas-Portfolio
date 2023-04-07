import React from "react";
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return(
    <nav className="navbar">
        <Link to="/">
            <div className="title">
                <h1>PeePee</h1>
            </div>
        </Link>
        <div className="navbarLinks">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/socials">Socials</Link></li>
            </ul>
        </div>
    </nav>
    )
}