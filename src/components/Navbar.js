import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <header>
    <nav>
      <div className="logo">Sridevi Velpula</div>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
