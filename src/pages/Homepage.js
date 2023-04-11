import React, { useRef, useState } from 'react';
import catPng from '../assets/cat.png';
import catPng2 from '../assets/cat2.png';
import catPng3 from '../assets/cat3.png';
import catPng4 from '../assets/cat4.png';
import dogPng5 from '../assets/dog5.png';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import Siteboxes from '../components/Siteboxes';
import './Homepage.css';
import Greeting from '../components/Greeting';
import LinkButton from '../components/LinkButton';


export default function Homepage() {

    const learnRef = useRef();
    const projRef = useRef()

    function handleClick() {
        learnRef.current.scrollIntoView({ behavior: "smooth" });
      }

    const [isShown, setIsShown] = useState(false);

    return(
    <div className="Homepage">
        <div className='date'>
            <p>current date time</p>
        </div>
        <div className='langContain'>
            <div className='lang' id='lang1'>
                <img src={catPng} />
            </div>
            <div className='lang' id='lang2'>
                <img src={catPng2} />
            </div>
            <div className='lang' id='lang3'>
                <img src={catPng3} />
            </div>
            <div className='lang' id='lang4'>
                <img src={catPng4} />
            </div>
            <div className='lang' id='lang5'>
                <img src={dogPng5} />
            </div>
        </div>
        <div className='headerWrap'>
            <header className='header'>
                <img src={catPng} />
                <Greeting />
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
                {/* Doesn't link at the moment */}
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
            </div>
            <div className='projBox'>

                <LinkButton />
                <p>The Meal Assistant is an app that allows users to search for both food and drink recipes by name/title, search for recipes by ingredient, browse various recipes via a catalog, and save various meal recipes and cocktail drink recipes.</p>
            </div>
            <div className='projBox'>

                <LinkButton />
                <p>peepee</p>
            </div>
            </div>
        </div>
    </div>
    )
}
    