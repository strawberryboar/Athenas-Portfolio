import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import Email from '../assets/email.svg';
import Linkedin from '../assets/linkedin.svg';
import Github from '../assets/github.svg';
import Twitter from '../assets/twitter.svg';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"

export default function Footer() {
    return(
        <footer>
        <div className='footerWrap'>
            <div className='footerBox'>
                <Link to='mailto:a.petrovich.dev@gmail.com'><img src={Email}></img></Link>
                </div>
                <div className='footerBox'>
                <Link to='https://github.com/strawberryboar'><img src={Github}></img></Link>
                </div>
                <div className='footerBox'>
                <Link to='https://twitter.com/APetrovichDev'><img src={Twitter}></img></Link>
                </div>
                <div className='footerBox'>
                <Link to='https://www.linkedin.com/in/athena-petrovich-b238321a7/'><img src={Linkedin}></img></Link>
                </div>
        </div>
        <p>&copy;peepee</p>
    </footer>
    )
}
