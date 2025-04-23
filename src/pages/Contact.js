import React from 'react';
import './Contact.css';
import Footer from './Footer';
import Navbar from './Navbar';

function Contact() {
  return (
    <div>
      <Navbar />
      <div className="contact-wrapper" id="contact">
        
        <section className="contact-hero">
          <h1>Let’s Build Something Beautiful Together</h1>
          <p>Connect with us and start customizing your dream home from foundation to finish.</p>
        </section>

        <section className="contact-info-cards">
          <div className="info-card">
            <h3>Email</h3>
            <p>ganeshyadav.puli9010@gmail.com</p>
          </div>
          <div className="info-card">
            <h3>Phone</h3>
            <p>+91 81791 97108</p>
          </div>
          <div className="info-card">
            <h3>Location</h3>
            <p>Tirupathi, India</p>
          </div>
        </section>

        <section className="contact-wavy-banner">
          <h2>100% Customization. Transparent Pricing.</h2>
          <p>All services under one roof — interiors, drainage, electrical, landscapes, and more.</p>
        </section>

        <section className="contact-form-section">
  <div className="form-card">
    <h2 className="form-title">Reach Out to Us</h2>
    <form className="form-body">
      <div className="input-wrapper">
        <input type="text" required />
        <label>Full Name</label>
      </div>
      <div className="input-wrapper">
        <input type="email" required />
        <label>Email Address</label>
      </div>
      <div className="input-wrapper">
        <input type="tel" required />
        <label>Phone Number</label>
      </div>
      <div className="input-wrapper">
        <textarea rows="4" required></textarea>
        <label>Your Message</label>
      </div>
      <button className="form-submit-btn" type="submit">Send</button>
    </form>
  </div>
</section>


        <section className="contact-split">
          <div className="contact-split-image">
            <img src="/Images/house8.jpg" alt="Consultation" />
          </div>
          <div className="contact-split-content">
            <h2>Schedule a Free Consultation</h2>
            <p>One-on-one virtual walkthrough with our construction expert and civil engineer.</p>
            <button className="split-btn">Book Now</button>
          </div>
        </section>

        <section className="contact-timeline">
          <h2>Project Flow</h2>
          <ul>
            <li>📌 Requirement Gathering</li>
            <li>📐 Layout Planning</li>
            <li>💰 Cost Estimation</li>
            <li>🚧 Construction Execution</li>
            <li>🎉 Handover Ceremony (Paalu Ponginchadam)</li>
          </ul>
        </section>

        <section className="contact-facts">
          <div className="fact-box">
            <h3>50+</h3>
            <p>Homes Designed</p>
          </div>
          <div className="fact-box">
            <h3>98%</h3>
            <p>Customer Satisfaction</p>
          </div>
          <div className="fact-box">
            <h3>5+</h3>
            <p>Cities Served</p>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default Contact;
