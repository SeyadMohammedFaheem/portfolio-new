import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="main-header">
      <Link to="/" className="header-logo" onClick={closeMenu}>FAHEEM</Link>
      
      <button className={`hamburger-btn ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`header-nav ${isMenuOpen ? 'nav-open' : ''}`}>
        <Link to="/projects" className="nav-item" onClick={closeMenu}>
          <span>01 /</span> WORK
        </Link>
        <Link to="/about" className="nav-item" onClick={closeMenu}>
          <span>02 /</span> ABOUT
        </Link>
        <Link to="/contact" className="nav-item" onClick={closeMenu}>
          <span>03 /</span> CONTACT
        </Link>
      </nav>
    </header>
  );
}
