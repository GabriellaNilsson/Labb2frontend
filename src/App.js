import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Menu from './Components/Menu';
import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';
import Resume from './Pages/Resume';
import Webguidelines from './Pages/Webguidelines';

export default function App() {
  return(
    <Router>
     <div className="site-container">
        <header className="site-header">
          <Menu/>
        </header>
        <main className="site-content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/resume" element={<Resume/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/webguidelines" element={<Webguidelines/>}/>
          </Routes>
        </main>
     </div>
     </Router>
  );
}

