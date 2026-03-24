import Frontlinelogo from '../assets/images/FrontlineLogo.png'
import { Link } from 'react-router-dom';

import './Header.css'

export function Header() {

    return (
        <div className = "header ">
      <div className= "header-left">
        <img src={Frontlinelogo} alt="Frontline Logo" className='logo'/>        
      </div>

      <div className="header-right"> 
                <nav className="nav-links">
                    {/* <a href="index.html">Home</a>
                    <a href="getStarted.html">About</a>
                    <a href="services.html"> Services</a>
                    <a href="careers.html"> Careers </a>
                    <a href="contact.html"> Contact </a> */}
                 
              <Link to="/">Home</Link>
              <Link to="/About">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/careers">Careers</Link>
              <Link to="/contact">Contact</Link>
              
    
                </nav>
                  
                    <button className="job-button"> <span className="blink-text"> Job-Opening </span> </button>
      </div> 
    </div>
    )
} 
