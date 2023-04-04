import './App.css';
import catPng from './assets/cat.png';
import Footer from './components/Footer.js';


function App() {
  return (
    <div className="App">
      <div className='appWrapper'>
      <header className="App-header">
        <h1>
          Portfolio
        </h1>
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
        <h1>
          sites go here
        </h1>
        </div>
        <div className='siteBox'>
        <h1>
          sites go here
        </h1>
        </div>
        <div className='siteBox'>
        <h1>
          sites go here
        </h1>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default App;
