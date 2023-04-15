import './App.css';
import Homepage from './pages/Homepage.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from './components/Footer.js';
import Navbar from './components/Navbar.js';
import Contact from './pages/Contact.js';
import Socials from './pages/Socials.js';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/socials' element={<Socials/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
