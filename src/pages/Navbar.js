import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Navbar.css';
import { FaHome, FaInfoCircle, FaServicestack, FaTags, FaCube, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <nav className="navbar">
        <img src="/Images/logo.jpg" alt="logo" className="logo" />

        <div className="nav-links">
          <a href="/" className={`nav-btn ${isActive('/') ? 'active' : ''}`}><FaHome /> Home</a>
          <a href="/services" className={`nav-btn ${isActive('/services') ? 'active' : ''}`}><FaServicestack /> Services</a>
          <a href="/design" className={`nav-btn ${isActive('/design') ? 'active' : ''}`}><FaCube /> 3D Design</a>
          <a href="/about" className={`nav-btn ${isActive('/about') ? 'active' : ''}`}><FaInfoCircle /> About</a>
          <a href="/contact" className={`nav-btn ${isActive('/contact') ? 'active' : ''}`}><FaEnvelope /> Contact Us</a>
        </div>

        <div className="hamburger" onClick={() => setShowMobileMenu(!showMobileMenu)}>
          {showMobileMenu ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {showMobileMenu && (
        <div className="mobile-menu">
          <a href="/" className={`nav-btn ${isActive('/') ? 'active' : ''}`} onClick={() => setShowMobileMenu(false)}><FaHome /> Home</a>
          <a href="/about" className={`nav-btn ${isActive('/about') ? 'active' : ''}`} onClick={() => setShowMobileMenu(false)}><FaInfoCircle /> About</a>
          <a href="/services" className={`nav-btn ${isActive('/services') ? 'active' : ''}`} onClick={() => setShowMobileMenu(false)}><FaServicestack /> Services</a>
          <a href="/design" className={`nav-btn ${location.hash === '/design' ? 'active' : ''}`} onClick={() => setShowMobileMenu(false)}><FaCube /> 3D Design</a>
          <a href="/contact" className={`nav-btn ${isActive('/contact') ? 'active' : ''}`} onClick={() => setShowMobileMenu(false)}><FaEnvelope /> Contact Us</a>
        </div>
      )}
    </>
  );
}

export default Navbar;
