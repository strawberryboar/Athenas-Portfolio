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
                <a href='mailto:a.petrovich.dev@gmail.com' target='_blank'><img src={Email}></img></a>
                </div>
                <div className='footerBox'>
                <a href='https://github.com/strawberryboar' target='_blank'><img src={Github}></img></a>
                </div>
                <div className='footerBox'>
                <a href='https://twitter.com/APetrovichDev' target="_blank"><img src={Twitter}></img></a>
                </div>
                <div className='footerBox'>
                <a href='https://www.linkedin.com/in/athena-petrovich-b238321a7/' target='_blank'><img src={Linkedin}></img></a>
                </div>
        </div>
        <p>&copy;peepee</p>
    </footer>
    )
}
