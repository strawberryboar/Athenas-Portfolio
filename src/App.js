import './App.css';
import Homepage from './pages/Homepage.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Contact from './pages/Contact.js';
import Socials from './pages/Socials.js';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
