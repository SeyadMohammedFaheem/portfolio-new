import React from 'react';

export default function Header() {
  return (
    <header>
      <a href="/" className="header-logo">FAHEEM</a>
      <nav className="header-nav">
        <a href="#work" className="nav-item">
          <span>01 /</span> WORK
        </a>
        <a href="#about" className="nav-item">
          <span>02 /</span> ABOUT
        </a>
        <a href="#contact" className="nav-item">
          <span>03 /</span> CONTACT
        </a>
      </nav>
    </header>
  );
}
