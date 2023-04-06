import catPng from '../assets/cat.png';
import catPng2 from '../assets/cat2.png';
import catPng3 from '../assets/cat3.png';
import catPng4 from '../assets/cat4.png';
import header1 from '../assets/header1.png';
import './Homepage.css';


export default function Homepage() {
    return(
    <div className="Homepage">
        <div className='headerWrap'>
            <header className='headerBox'>
                <h1>Peepee</h1>
                <p>Content</p>
            </header>
        </div>
        <div className='introWrap'>
        <div className='introBox' id='first'>
        <img src={catPng} />
        <h2>
            Mow
        </h2>
        <p>
            Minim et adipisicing qui laboris cillum magna mollit reprehenderit. Duis deserunt non excepteur aute Lorem reprehenderit eu. Dolor commodo occaecat eu consequat elit ex non sint culpa exercitation minim ea. Consectetur enim dolore nulla voluptate adipisicing cillum irure aute minim. Aliqua voluptate officia aute fugiat sunt non ipsum deserunt amet dolor nulla labore sunt. Eu adipisicing nisi minim id aliqua eiusmod qui ut labore Lorem velit ullamco.
        </p>
        </div>
        <div className='siteWrap'>
            <div className='siteBox'>
            <h2>
            sites go here
            </h2>
            <img src={catPng2}></img>
            </div>
            <div className='siteBox'>
            <h2>
            sites go here
            </h2>
            <img src={catPng3}></img>
            </div>
            <div className='siteBox'>
            <h2>
            sites go here
            </h2>
            <img src={catPng4}></img>
            </div>
        </div>
        </div>
        <div className='divBox' id='divBox1'>
            <h1>Box</h1>
            <p>Content</p>
        </div>
        <div className='divBox' id='divBox2'>
            <h1>Box</h1>
            <p>Content</p>
        </div>
        <div className='divBox' id='divBox3'>
            <h1>Box</h1>
            <p>Content</p>
        </div>
    </div>
    )
}
    