import React, { useRef, useState } from 'react';
import catPng from '../assets/cat.png';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import Siteboxes from '../components/Siteboxes';
import './Homepage.css';
import Greeting from '../components/Greeting';
import LinkButton from '../components/LinkButton';
import DateWidget from '../hooks/DateAndTime';
import BackToTop from '../components/BackToTop';
import ScrollImgs from '../components/ScrollImgs';

export default function Homepage() {

    const learnRef = useRef();
    const projRef = useRef();
    const topRef = useRef();

    function handleClick(scrollToRef) {
        scrollToRef.current.scrollIntoView({ behavior: "smooth" });
      }

    const [isShown, setIsShown] = useState(false);

    return(
    <div className="Homepage" ref={topRef}>
        <DateWidget />
        {/* <ScrollImgs /> */}
        <div className='headerWrap'>
            <header className='header'>
                <img src={catPng} />
                <Greeting />
                <h2>I'm a full-stack web developer.</h2>
                <Link src='/'>
                    <button className='learnBtn'
                    onClick={() => handleClick(learnRef)}>
                        Learn More
                    </button>
                </Link>
            </header>
        </div>
        {/* <Navbar /> */}
        {/* <Siteboxes /> */}
        <div className='divBox' id='divBox1' ref={learnRef}>
        <h1>About Me</h1>
        <hr></hr>
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
                    <p>I am open to new opportunities and collaborations! 
                        <Link to='/'>Please message me here.</Link>
                    </p>
                </div>
            </div>
            <Link src='/'>
                <button className='projBtn' onClick={() => {
                    handleClick(projRef)
                }}>
                    V
                </button>
            </Link>
        </div>
        <div className='projects' ref={projRef}>
            <h1>My Work|</h1>
            <div className='titles'>
            <h2>HAUL'R</h2>
            <h2>Meal Assistant</h2>
            <h2>website</h2>
            </div>
            <div className='projBoxContain'>
            <div className='projBox'>
                <LinkButton />
                <p>MERN stack site that's hosted on an AWS EC2 instance running Ubuntu and Apache, sharing the same servers as the HAUL'R iOS application</p>
                <button  className='techBtn' 
                onClick={() => setIsShown(!isShown)}>press me</button>
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
                <button  className='techBtn'
                onClick={() => setIsShown(!isShown)}>press me</button>
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
                <button  className='techBtn' 
                onClick={() => setIsShown(!isShown)}>press me</button>
                {isShown && 
                <p>poopoo</p>
                }
            </div>
            </div>
            <BackToTop />
        </div>
    </div>
    )
}
    