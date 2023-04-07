import catPng from '../assets/cat.png';
import catPng2 from '../assets/cat2.png';
import catPng3 from '../assets/cat3.png';
import catPng4 from '../assets/cat4.png';
import Email from '../assets/email.svg';
import Linkedin from '../assets/linkedin.svg';
import Github from '../assets/github.svg';
import Twitter from '../assets/twitter.svg';
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
            <div className='linkWrap'>
                <div className='linkBox'>
                <Link to='mailto:a.petrovich.dev@gmail.com'><img src={Email}></img></Link>
                <span><Link to='/'>Email</Link></span>
                </div>
                <div className='linkBox'>
                <img src={Github}></img>
                <span><Link to='/'>Github</Link></span>
                </div>
                <div className='linkBox'>
                <img src={Twitter}></img>
                <span><Link to='/'>Twitter</Link></span>
                </div>
                <div className='linkBox'>
                <img src={Linkedin}></img>
                <span><Link to='/'>LinkedIn</Link></span>
                </div>
            </div>
        </div>
        <div className='projects'>
            <h1>My Work|</h1>
            <div className='projBoxContain'>
            <div className='projBox'>
                <h2>HAUL'R</h2>
                <img src={catPng}></img>
                <p>MERN stack site that's hosted on an AWS EC2 instance running Ubuntu and Apache, sharing the same servers as the HAUL'R iOS application</p>
            </div>
            <div className='projBox'>
                <h2>Meal Assistant</h2>
                <img src={catPng}></img>
                <p>peepee</p>
            </div>
            <div className='projBox'>
                <h2>website</h2>
                <img src={catPng}></img>
                <p>peepee</p>
            </div>
            </div>
        </div>
    </div>
    )
}
    