import React from 'react';
import './About.css';
import Footer from './Footer';
import Navbar from './Navbar';

function About() {
  return (
    <div>
      <Navbar />
      <div className="about-wrapper" id="about">

        <section className="about-hero">
          <h1 className="about-title">Build Your Legacy</h1>
          <p className="about-subtext">Your dream home starts with vision, evolves through customization, and ends with complete satisfaction.</p>
        </section>

        <section className="about-feature-block">
          <div className="feature-content">
            <h2>Foundation to Finish</h2>
            <p>We take care of everything from the first brick to the final polish—plumbing, lighting, interior, landscaping, and more.</p>
            <a className="feature-btn" href="#design">Start Designing</a>
          </div>
          <div className="feature-image">
            <img src="/Images/house7.jpg" alt="Construction" />
          </div>
        </section>

        <section className="about-vision-section">
          <h2 className="vision-title">The Power of Customization</h2>
          <div className="vision-grid">
            <div className="vision-box">
              <h3>Drag & Drop Builder</h3>
              <p>Build your home layout with ease using our interactive tools.</p>
            </div>
            <div className="vision-box">
              <h3>Brand-Based Pricing</h3>
              <p>Choose from popular brands for cement, paint, iron & more.</p>
            </div>
            <div className="vision-box">
              <h3>Rule-Based Design</h3>
              <p>Built-in checks for pillar spacing, slab widths & civil safety.</p>
            </div>
          </div>
        </section>

        <section className="about-highlight-banner">
          <h2>Your Design. Our Expertise.</h2>
          <p>Get professional guidance at every step while staying true to your choices.</p>
        </section>

        <section className="about-split-layout">
          <div className="split-image">
            <img src="/Images/house5.jpg" alt="Planning" />
          </div>
          <div className="split-content">
            <h2>Everything You Need</h2>
            <p>Zoomable floorplans, cost breakdowns, and live walkthroughs let you control every inch of your project.</p>
            <div className="button-group">
              <a href="#design" className="about-btn split">Launch 3D Tool</a>
              <a href="#contact" className="about-btn split alt">Book Consultation</a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default About;
