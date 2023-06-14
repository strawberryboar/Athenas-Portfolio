import React from 'react';
import './Footer.css';
import { ReactComponent as Linkedin} from '../assets/Linkedin1.svg';
import { ReactComponent as Github} from '../assets/Github1.svg';
import { ReactComponent as Twitter} from '../assets/Twitter1.svg';
import { ReactComponent as Email} from '../assets/Email1.svg';

export default function Footer() {
    return(
        <footer>
        <div className='footerWrap'>
            <div className='footerBox'>
                <a href='mailto:a.petrovich.dev@gmail.com' target='_blank'><Email width='100px' height='100px' /></a>
                </div>
                <div className='footerBox'>
                <a href='https://github.com/strawberryboar' target='_blank'><Github width='100px' height='100px' /></a>
                </div>
                <div className='footerBox'>
                <a href='https://twitter.com/APetrovichDev' target="_blank"><Twitter width='100px' height='100px' /></a>
                </div>
                <div className='footerBox'>
                <a href='https://www.linkedin.com/in/athena-petrovich-b238321a7/' target='_blank'><Linkedin width='100px' height='100px' /></a>
                </div>
        </div>
        <p>&copy;peepee</p>
    </footer>
    )
}
