import catPng from '../assets/cat.png';
import catPng2 from '../assets/cat2.png';
import catPng3 from '../assets/cat3.png';
import catPng4 from '../assets/cat4.png';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import Siteboxes from '../components/Siteboxes';
import './Homepage.css';


export default function Homepage() {
    return(
    <div className="Homepage">
        <div className='date'>
            <p>current date</p>
        </div>
        <div className='headerWrap'>
            <header className='header'>
                <img src={catPng} />
                <h1>Good Evening, I'm Pee-Pee.</h1>
                <h2>I'm a full-stack web developer.</h2>
                <Link src='/'>
                    <button className='learnBtn'>
                        Learn More
                    </button>
                </Link>
            </header>
        </div>
        {/* <Navbar /> */}
        <div className='header'>
            {/* animate this */}
            <h1>whoami|</h1>
        </div>
        {/* <Siteboxes /> */}
        <div className='divBox' id='divBox1'>
            <h1>About Me</h1>
            <p>Binger</p>
        </div>
        <div className='divBox' id='divBox2'>
            <h1>What I Offer</h1>
            <p>pricing and stuff</p>
        </div>
        <div className='divBox' id='divBox3'>
            <h1>Socials</h1>
            <span><Link to='/'>Email</Link></span>
            <span><Link to='/'>Github</Link></span>
            <span><Link to='/'>Twitter</Link></span>
            <span><Link to='/'>LinkedIn</Link></span>
        </div>
        <div className='projects'>
            <h1>My Work|</h1>
            <div className='projBoxContain'>
            <div className='projBox'>
                <p>website</p>
                <img src={catPng}></img>
                <p>peepee</p>
            </div>
            <div className='projBox'>
                <p>website</p>
                <img src={catPng}></img>
                <p>peepee</p>
            </div>
            <div className='projBox'>
                <p>website</p>
                <img src={catPng}></img>
                <p>peepee</p>
            </div>
            </div>
        </div>
    </div>
    )
}
    