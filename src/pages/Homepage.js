import React, { useRef, useState } from 'react';
// import { useInView } from 'react-intersection-observer';
import catPng from '../assets/cat.png';
import { Link } from 'react-router-dom';
import './Homepage.css';
import Greeting from '../components/Greeting';
import LinkButton from '../components/LinkButton';
import DateWidget from '../hooks/DateAndTime';
import Footer from '../components/Footer';
import { ReactComponent as DownArrow } from '../assets/DownArrow.svg';
import { ReactComponent as UpArrowCirc } from '../assets/UpArrowCirc.svg';
import CloudAnimation from '../components/Clouds';
import Stars from '../components/Stars.js';
import 'animate.css';


export default function Homepage() {
    // const {ref: learnRef, inView: aboutIsVisible} = useInView();
    const learnRef = useRef();

    const projRef = useRef();
    // const {ref: projRef, inView: projectIsVisible} = useInView();
    
    const topRef = useRef();
    // const {ref: topRef, inView: topIsVisible} = useInView();

    // className={`${projectIsVisible ? 'projects animate__animated animate__fadeInDown' : ''}`} 
    function handleClick(scrollToRef) {
        scrollToRef.current.scrollIntoView({ behavior: "smooth" });
      }

    const [isShown, setIsShown] = useState(false);

    return(
    <div className="Homepage">
        <CloudAnimation />
        <Stars/>
        <DateWidget />
        {/* <ScrollImgs /> */}
        {/* this scrollinto view is causing a bug */}
        <div className='headerWrap' ref={topRef}>
            <header className='header'>
                <img src={catPng} className='animate__animated animate__fadeInDown' />
                <Greeting />
                <h2 className='animate__animated animate__fadeInDown'>I'm a full-stack web developer.</h2>
                <Link className='animate__animated animate__slideInDown' src='/'>
                    <a className='downArrow' 
                    onClick={() => handleClick(learnRef)}>
                        <DownArrow />
                    </a>
                </Link>
            </header>
        </div>
        <div className='divBox' id='divBox1' ref={learnRef}>
            {/* if this div is visible, call the animation. if not, nothing */}
        <h1>About Me</h1>
            <div className='linkWrap' id='aboutWrap'>
                <div className='linkBox' id='aboutBox'>
                <p>Currently I am the lead web developer for HaulrCorporation. My workday is balanced with React, CSS, JS, GraphQL, Apache, and more.</p>
                </div>
                <div className='linkBox' id='aboutBox'>
                    <p>
                        Besides being a full time web developer, I'm also an illustrator! I run a sticker shop and vend at local events.
                    </p>
                </div>
                <div className='linkBox' id='aboutBox'>
                    <p>I am always open to new opportunities and collaborations! 
                    </p>
                </div>
            </div>
            <Link src='/'>
                <a className='downArrow' onClick={() => {
                    handleClick(projRef)
                }}>
                <DownArrow />
                </a>
            </Link>
        </div>
        <div className='projects' ref={projRef}>
            <h1>My Work</h1>
            <div className='titles'>
            <h2>HAUL'R</h2>
            <h2>Meal Assistant</h2>
            <h2>website</h2>
            </div>
            <div className='projBoxContain'>
            <div className='projBox'>
                <LinkButton />
                <p>HAUL'R is a MERN stack site that's hosted on an AWS EC2 instance running Ubuntu and Apache, sharing the same servers as the HAUL'R iOS application</p>
                <a className='techBtn' 
                onClick={() => setIsShown(!isShown)}><DownArrow/></a>
                {isShown && 
                <ul className='tech'>
                <li>React</li>
                <li>CSS</li>
                <li>GraphQL</li>
                <li>Apache</li>
                <li>Apollo</li>
            </ul>
                }
                
            </div>
            <div className='projBox'>
                <LinkButton />
                <p>The Meal Assistant is an app that allows users to search for both food and drink recipes by name/title, search for recipes by ingredient, browse various recipes via a catalog, and save various meal recipes and cocktail drink recipes.</p>
                {/* Insert dropdown here */}
                {/* display none until button is clicked? */}
                <a className='techBtn' 
                onClick={() => setIsShown(!isShown)}><DownArrow/></a>
                {isShown && 
                    <ul className='tech'>
                    <li>HTML/CSS</li>
                    <li>JS</li>
                    <li>jQuery & Autocomplete</li>
                    <li>Bulma CSS Framework</li>
                    <li>AJAX API Requests</li>
                </ul>
                }
            </div>
            <div className='projBox'>
                <LinkButton />
                <p>peepee</p>
                <div className='techBox'>
                <a className='techBtn' 
                onClick={() => setIsShown(!isShown)}><DownArrow/></a>
                {isShown && 
                <p>poopoo</p>
                }
                </div>
            </div>
            </div>
        </div>
        <div className='backToTop'>
                <Link href='/'  onClick={() => {
                    handleClick(topRef)
                }}> 
                <UpArrowCirc />
                </Link>
            </div>
        <Footer />
    </div>
    )
}
    