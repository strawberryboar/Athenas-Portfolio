import React, { useRef, useState } from 'react';
import catPng from '../assets/cat.png';
import catPng2 from '../assets/cat2.png';
import catPng3 from '../assets/cat3.png';
import catPng4 from '../assets/cat4.png';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import Siteboxes from '../components/Siteboxes';
import './Homepage.css';


export default function Homepage() {

    const learnRef = useRef();

    function handleClick() {
        learnRef.current.scrollIntoView({ behavior: "smooth" });
      }

    const [isShown, setIsShown] = useState(false);

    return(
    <div className="Homepage">
        <div className='date'>
            <p>current date time</p>
        </div>
        <div className='headerWrap'>
            <header className='header'>
                <img src={catPng} />
                <h1>Good Evening, I'm Pee-Pee.</h1>
                <h2>I'm a full-stack web developer.</h2>
                <Link src='/'>
                    <button className='learnBtn'
                    onClick={handleClick}>
                        Learn More
                    </button>
                </Link>
            </header>
        </div>
        {/* <Navbar /> */}
        <div className='header'>
            {/* animate this */}
            <h1 ref={learnRef}>whoami|</h1>
        </div>
        {/* <Siteboxes /> */}
        <div className='divBox' id='divBox1'>
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
        </div>
        <div className='projects'>
            <h1>My Work|</h1>
            <div className='projBoxContain'>
            <div className='projBox'>
                <h2>HAUL'R</h2>
                <button
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}>
                <img src={catPng}></img>
                </button>
                {isShown && (
                    <div>
                        appears when you hover over the button
                    </div>
                )}
                <p>MERN stack site that's hosted on an AWS EC2 instance running Ubuntu and Apache, sharing the same servers as the HAUL'R iOS application</p>
            </div>
            <div className='projBox'>
                <h2>Meal Assistant</h2>
                <button
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}>
                <img src={catPng}></img>
                </button>
                {isShown && (
                    <div>
                        appears when you hover over the button
                    </div>
                )}
                <p>The Meal Assistant is an app that allows users to search for both food and drink recipes by name/title, search for recipes by ingredient, browse various recipes via a catalog, and save various meal recipes and cocktail drink recipes. This application can even generate random recipes if they are not sure what they want.</p>
            </div>
            <div className='projBox'>
                <h2>website</h2>
                <button
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}>
                <img src={catPng}></img>
                </button>
                {isShown && (
                    <div>
                        appears when you hover over the button
                    </div>
                )}
                <p>peepee</p>
            </div>
            </div>
        </div>
        <div className='divBox' id='divBox2'>
            <h1>Languages I Use</h1>
            <p>Content</p>
        </div>
    </div>
    )
}
    