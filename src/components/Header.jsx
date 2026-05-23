import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

// Prefetch key images for a route on hover so they're cached before navigation
const prefetchedRoutes = new Set();
function prefetchImagesForRoute(route) {
  if (prefetchedRoutes.has(route)) return;
  prefetchedRoutes.add(route);

  const imageMap = {
    '/projects': [
      '/images/work/work1.webp',
      '/images/work/work2.webp',
      '/images/work/work3.webp',
      '/images/work/work4.webp',
    ],
    '/about': ['/hero-runner.webp'],
  };

  const images = imageMap[route];
  if (!images) return;

  images.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handlePrefetch = useCallback((route) => {
    prefetchImagesForRoute(route);
  }, []);

  return (
    <header className="main-header">
      <Link to="/" className="header-logo" onClick={closeMenu}>FAHEEM</Link>
      
      <button className={`hamburger-btn ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`header-nav ${isMenuOpen ? 'nav-open' : ''}`}>
        <Link to="/projects" className="nav-item" onClick={closeMenu} onMouseEnter={() => handlePrefetch('/projects')}>
          <span>01 /</span> WORK
        </Link>
        <Link to="/about" className="nav-item" onClick={closeMenu} onMouseEnter={() => handlePrefetch('/about')}>
          <span>02 /</span> ABOUT
        </Link>
        <a 
          href="/assets/Resume - Faheem Product Designer.pdf" 
          download="Resume - Faheem Product Designer.pdf"
          className="nav-item" 
          onClick={closeMenu}
        >
          <span>03 /</span> RESUME
        </a>
      </nav>
    </header>
  );
}
