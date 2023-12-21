import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NavBar.css';
import logo from '../Tori Stecum.png';

const NavBar = () => (
  <nav>
    <div className="nav-container">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/translation">Translation Services</Link></li>
        <li><Link to="/revision">Revision and Proofreading</Link></li>
        <li><Link to="/copywriting">Copywriting Services</Link></li>
        <li><Link to="/contact">Contact Me</Link></li>
      </ul>
    </div>
  </nav>
);

export default NavBar;

