import React from "react";
import {Link} from 'react-router-dom';
import menu from "../css/menu.css";
import  index from "../css/index.css";

const Menu=()=>{
    return(
        <div className='navbar'>
            <div className='manu-container'>
                <ul className='navbar-links'>
                    <li>
                        <Link to="/" className='navbar-links'>Home</Link>
                    </li>
                    <li>
                        <Link to="/Resume" className='navbar-links'>Resume</Link>
                    </li>
                    <li>
                        <Link to="/portfolio" className='navbar-links'>Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/about" className='navbar-links'>About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className='navbar-links'>Contact</Link>
                    </li>
                    <li>
                        <Link to="/webguidelines" className='navbar-links'>Webguidelines</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default Menu;