import React, { useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import catPng from '../assets/cat.png';
import { Link } from 'react-router-dom';
import './Homepage.css';
import Greeting from '../components/Greeting';
import DateWidget from '../hooks/DateAndTime';
import Footer from '../components/Footer';
import { ReactComponent as DownArrow } from '../assets/DownArrow.svg';
import { ReactComponent as UpArrowCirc } from '../assets/UpArrowCirc.svg';
import Trust from '../assets/Trust.png'
import Wrench from '../assets/Wrench.png'
import Status from '../assets/Status.png'
import CloudAnimation from '../components/Clouds';
import Stars from '../components/Stars.js';
import 'animate.css';
import Collapse from '../components/Collapse';
import Haulr from '../assets/Haulr.png'
import MealAssist from '../assets/MealAssist.png';
import External from '../assets/External.png';
import Portrait from '../assets/Portrait.png';


export default function Homepage() {
    // const {ref: learnRef, inView: aboutIsVisible} = useInView();
    const learnRef = useRef();
    const projRef = useRef();
    // const {ref: projRef, inView: projectIsVisible} = useInView();
    const topRef = useRef();
    // const {ref: topRef, inView: topIsVisible} = useInView();
    const resRef = useRef();

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

    return(
    <div className="Homepage">
        <CloudAnimation />
        <Stars/>
        <DateWidget />
        {/* <ScrollImgs /> */}
        {/* this scrollinto view is causing a bug */}
        <div className='headerWrap' ref={topRef}>
            <header className='header'>
            {/* <img src={Portrait} className='animate__animated animate__fadeInDown portrait' /> */}
                <img src={Portrait} className='portrait' />
                <Greeting />
                <h2 className='animate__animated animate__fadeInDown'>I'm a full-stack web developer.</h2>
                {/* <Link className='animate__animated animate__slideInDown' src='/'>
                    <a className='downArrow' 
                    onClick={() => handleClick(learnRef)}>
                        <DownArrow />
                    </a>
                </Link> */}
            </header>
        </div>
        <div className='divBox' id='divBox1' ref={learnRef}>
            {/* if this div is visible, call the animation. if not, nothing */}
        <h1>About Me</h1>
            <div className='linkWrap' id='aboutWrap'>
                <div className='linkBox' id='aboutBox'>
                    <h2>Values</h2>
                    <img id='aboutImg' src={Trust}/>
                    <p>I strive for a smooth user experience for both admins and clients alike, always learning ways to improve my apps. Every detail matters to me.</p>
                </div>
                <div className='linkBox' id='aboutBox'>
                    <h2>Skills</h2>
                    <img id='aboutImg' src={Wrench}/>
                    <p>My workday is balanced with React, JS, CSS, GraphQL, Apache, and more. I love to learn, and I can pick up new languages, frameworks, and APIs with ease!</p>
                </div>
                <div className='linkBox' id='aboutBox'>
                    <h2>Status</h2>
                    <img id='aboutImg' src={Status}/>
                    <p>I am actively looking for new opportunities and collaborations!</p>
                </div>
            </div>
            {/* <Link src='/'>
                <a className='downArrow' onClick={() => {
                    handleClick(projRef)
                }}>
                <DownArrow />
                </a>
            </Link> */}
        </div>
        <div className='divBox' ref={projRef}>
            <h1>My Work</h1>
            {/* <div className='titles'>
                <h2>HAUL'R</h2>
                <h2>Meal Assistant</h2>
                <h2>website</h2>
            </div> */}
            <div className='linkWrap'>
                <div className='linkBox' id='workBox'>
                    <h2>HAUL'R</h2>
                    <a href='https://haulrcorp.com/' target='__blank'>
                        <img src={Haulr}/>
                    </a>
                    <p>MERN stack site that's hosted on an AWS EC2 instance running Ubuntu and Apache, sharing the same servers as the HAUL'R iOS application. Features swappable languages and delivers a permission-based user experience.</p>
                    
                    <div className='collapseHidden'>
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
                </div>
                <div className='linkBox' id='workBox'>
                    <h2>Meal Assistant</h2>
                    <a href='https://strawberryboar.github.io/Meal-Assistant/' target='__blank'>
                        <img src={MealAssist}/>
                    </a>
                    <p>An app that allows users to search for both food and drink recipes by name/title, search for recipes by ingredient, browse various recipes via a catalog, and save various meal recipes and cocktail drink recipes.</p>
                    <div className='collapseHidden'>
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
                </div>
                {/* <div className='linkBox'>
                    <h2>website</h2>
                        <a href='#'>link</a>
                        <img src={catPng}/>
                  
                    <p>peepee</p>
                       
                    </div> */}
                </div>
                <div className='collapseBtns'>
                        <Collapse>
                        <h3 id='techTitle'>Haul'r</h3>
                            <ul className='tech'>
                                <li>MongoDB</li>
                                <li>Express</li>
                                <li>React</li>
                                <li>Node</li>
                                <li>GraphQL</li>
                            </ul>
                        </Collapse>  
                        <Collapse>
                        <h3 id='techTitle'>Meal Assistant</h3>
                            <ul className='tech'>
                                <li>HTML/CSS</li>
                                <li>JS</li>
                                <li>jQuery & Autocomplete</li>
                                <li>Bulma CSS Framework</li>
                                <li>AJAX API Requests</li>
                            </ul>
                        </Collapse>
                        {/* <Collapse>
                                <p>poopoo</p>
                        </Collapse> */}
                    </div>
                <div className='resumeBox'>
                    <a href='https://docs.google.com/document/d/1Sw3tcfoq1E4ItfYqsVsgJNZ6EwO4Pujsn6BnkyGApwM/edit?usp=sharing' target='__blank'>
                        My Resume&nbsp;
                        <img src={External} className='resumeImg'/>
                        </a>
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
    

// <a target="_blank" href="https://icons8.com/icon/112405/trust">Trust</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

// <a target="_blank" href="https://icons8.com/icon/114105/wrench">Wrench</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

// <a target="_blank" href="https://icons8.com/icon/47805/ok">Status</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

// <a target="_blank" href="https://icons8.com/icon/97yMswDv6EGq/external">External</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>