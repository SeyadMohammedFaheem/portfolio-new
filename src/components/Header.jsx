import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link to="/" className="header-logo">FAHEEM</Link>
      <nav className="header-nav">
        <Link to="/projects" className="nav-item">
          <span>01 /</span> WORK
        </Link>
        <Link to="/about" className="nav-item">
          <span>02 /</span> ABOUT
        </Link>
        <Link to="/contact" className="nav-item">
          <span>03 /</span> CONTACT
        </Link>
      </nav>
    </header>
  );
}
