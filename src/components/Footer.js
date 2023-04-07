import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"

export default function Footer() {
    return(
        <footer>
        <div className='footerWrap'>
            <div className='footerBox'>
                <p><Link to='/'>content</Link></p>
            </div>
            <div className='footerBox'>
                <p><Link to='/'>content</Link></p>
            </div>
            <div className='footerBox'>
                <p><Link to='/'>content</Link></p>
            </div>
        </div>
        <p>&copy;peepee</p>
    </footer>
    )
}
