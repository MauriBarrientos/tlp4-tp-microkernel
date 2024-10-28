import React from 'react';
import './styles/navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/img/logo.png" alt="logo" className="logo" />
        <span className="name">cINeee</span>
      </div>
      <ul className="navbar-links">
      <li><Link to="/teatros" className="navbar-link">Teatros</Link></li>
        <li><Link to="/cinemas" className="navbar-link">Cines</Link></li>
        <li><Link to="/showtimes" className="navbar-link">Funciones</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
