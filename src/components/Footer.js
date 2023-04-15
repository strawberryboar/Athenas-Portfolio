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
                <a href='mailto:a.petrovich.dev@gmail.com' target='_blank'><svg src={Email}></svg></a>
                </div>
                <div className='footerBox'>
                <a href='https://github.com/strawberryboar' target='_blank'><svg src={Github}></svg></a>
                </div>
                <div className='footerBox'>
                <a href='https://twitter.com/APetrovichDev' target="_blank"><svg src={Twitter}></svg></a>
                </div>
                <div className='footerBox'>
                <a href='https://www.linkedin.com/in/athena-petrovich-b238321a7/' target='_blank'><svg src={Linkedin}></svg></a>
                </div>
        </div>
        <p>&copy;peepee</p>
    </footer>
    )
}
