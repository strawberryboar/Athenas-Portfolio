import React from 'react';
import './Footer.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"

export default function Footer() {
    return(
        <footer>
        <div className='footerWrap'>
            <div className='footerBox'>
                <p>content</p>
            </div>
            <div className='footerBox'>
                <p>content</p>
            </div>
            <div className='footerBox'>
                <p>content</p>
            </div>
        </div>
        <p>&copy;peepee</p>
    </footer>
    )
}
