import React from 'react';
import './styles/navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/img/logo.png" alt="logo" className="logo" />
        <span className="name">Micro Ticket</span>
      </div>
      <ul className="navbar-links">
        <li><Link to="/tickets" className="navbar-link">Tickets</Link></li>
        <li><Link to="/" className="navbar-link">Funciones</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
