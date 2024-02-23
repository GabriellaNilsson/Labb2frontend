import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import About from './Pages/About';
import Pictures from './Pages/Pictures';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';
import Resume from './Pages/Resume';
import Webguidelines from './Pages/Webguidelines';

export default function App() {
  return(
    <Router>
     <div classname="site-container">
        <header classname="site-header">
          <Menu/>
        </header>
        <main classname="site-content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/resume" element={<Resume/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/webguidelines" element={<Webguidelines/>}/>
            <Route path="/pictures" element={<Pictures/>}/>
          </Routes>
        </main>
        <Footer classname="site-footer">
          <Footer/>
        </Footer>
     </div>
     </Router>
  );
}

