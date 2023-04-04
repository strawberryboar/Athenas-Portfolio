import './App.css';
import catPng from './assets/cat.png';

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
    <div className='intro'>
      <img src={catPng} />
      <h2>
        Mow
      </h2>
    </div>
    </div>
  );
}

export default App;
