import React, { useState } from 'react';
import './Navbar.css';
import { FaHome, FaInfoCircle, FaServicestack, FaTags, FaCube, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      <nav className="navbar">
        <img src="/Images/logo.jpg" alt="logo" className="logo" />
        
        <div className="nav-links">
          <a href="#home" className="nav-btn"><FaHome /> Home</a>
          <a href="#about" className="nav-btn"><FaInfoCircle /> About</a>
          <a href="#services" className="nav-btn"><FaServicestack /> Services</a>
          <a href="#pricing" className="nav-btn"><FaTags /> Pricing</a>
          <a href="#design" className="nav-btn"><FaCube /> 3D Design</a>
          <a href="#contact" className="nav-btn"><FaEnvelope /> Contact Us</a>
        </div>

        <div className="hamburger" onClick={() => setShowMobileMenu(!showMobileMenu)}>
          {showMobileMenu ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {showMobileMenu && (
        <div className="mobile-menu">
          <a href="#home" className="nav-btn" onClick={() => setShowMobileMenu(false)}><FaHome /> Home</a>
          <a href="#about" className="nav-btn" onClick={() => setShowMobileMenu(false)}><FaInfoCircle /> About</a>
          <a href="#services" className="nav-btn" onClick={() => setShowMobileMenu(false)}><FaServicestack /> Services</a>
          <a href="#pricing" className="nav-btn" onClick={() => setShowMobileMenu(false)}><FaTags /> Pricing</a>
          <a href="#design" className="nav-btn" onClick={() => setShowMobileMenu(false)}><FaCube /> 3D Design</a>
          <a href="#contact" className="nav-btn" onClick={() => setShowMobileMenu(false)}><FaEnvelope /> Contact Us</a>
        </div>
      )}
    </>
  );
}

export default Navbar;
