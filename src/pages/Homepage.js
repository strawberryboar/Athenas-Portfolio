import React, { useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
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
import Collapse from '../components/Collapse';
import HaulrScreen from '../assets/HaulrScreen.png'
import MealAssistant from '../assets/MealAssistant.png';


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
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    }

    const handleMouseOut = () => {
        setIsHover(false);
    }

// case isHover(true) ? ____ : isHover(false)

    // const handleMouseOut = () => {
    //     setIsHover(false);
    // }


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
                <div className='imgDiv'>
                <a href='https://haulrcorp.com/'>HaulrCorp.com</a>
                <img src={HaulrScreen}/>
                </div>
                <p>MERN stack site that's hosted on an AWS EC2 instance running Ubuntu and Apache, sharing the same servers as the HAUL'R iOS application</p>
               <Collapse>
                <ul className='tech'>
                    <li>MongoDB</li>
                    <li>Express</li>
                    <li>React</li>
                    <li>Node</li>
                    <li>GraphQL</li>
                </ul>
            </Collapse>    
            </div>
            <div className='projBox'>
                <div className='imgDiv'>
                    <a href='https://strawberryboar.github.io/Meal-Assistant/'>Meal Assistant</a>
                    <img src={MealAssistant}/>
                 </div>
                <p>The Meal Assistant is an app that allows users to search for both food and drink recipes by name/title, search for recipes by ingredient, browse various recipes via a catalog, and save various meal recipes and cocktail drink recipes.</p>
                <Collapse>
                    <ul className='tech'>
                        <li>HTML/CSS</li>
                        <li>JS</li>
                        <li>jQuery & Autocomplete</li>
                        <li>Bulma CSS Framework</li>
                        <li>AJAX API Requests</li>
                    </ul>
                </Collapse>
            </div>
            <div className='projBox'>
                <p>peepee</p>
                <div className='techBox'>
                <Collapse>
                <p>poopoo</p>
                </Collapse>
                </div>
            </div>
            </div>
        </div>
        {/* <div className='projBox'>
            <img src={catPng}/>
            <h1>PeePee</h1>
            <Collapse>
                <ul>
                    <li>pee</li>
                    <li>pee</li>
                </ul>
            </Collapse>
            
        </div> */}
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
    