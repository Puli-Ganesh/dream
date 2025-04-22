import './Footer.css';
import { FaFacebookF, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-top">

        <div className="footer-about">
          <h3>About Us</h3>
          <p>
            We are passionate about crafting personalized living spaces. From sketches to keys, we bring your dream home to life.
          </p>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p><FaPhoneAlt /> +91-9876543210</p>
          <p><FaEnvelope /> support@dreamhome.com</p>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

        <div className="footer-customize">
          <h3>Let’s Begin</h3>
          <a href="/customize" className="footer-button">Start Customizing</a>
        </div>
      </div>

      <div className="footer-counters">
        <div className="counter-box">
          <h2 className="counter">250+</h2>
          <p>Homes Customized</p>
        </div>
        <div className="counter-box">
          <h2 className="counter">5+</h2>
          <p>Cities Served</p>
        </div>
        <div className="counter-box">
          <h2 className="counter">100%</h2>
          <p>Customer Satisfaction</p>
        </div>
      </div>

      <div className="footer-video">
        <h3>Our Journey in Action</h3>
        <iframe
          src="https://www.youtube.com/embed/WE7yyJG_3K4"
          title="Time-lapse"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="footer-faq">
        <details>
          <summary>What is the cost estimate process?</summary>
          <p>Once you design your home, our engine calculates the estimate in real-time with material pricing.</p>
        </details>
        <details>
          <summary>Can I modify the layout later?</summary>
          <p>Yes, our system supports modular and flexible updates during the planning phase.</p>
        </details>
        <details>
          <summary>Do you work in my city?</summary>
          <p>We currently operate in 5+ major cities and are expanding rapidly.</p>
        </details>
      </div>

      <div className="footer-bottom">
        <p>© 2025 DreamHome Inc. | <a href="#">Terms</a> | <a href="#">Privacy</a></p>
      </div>
    </footer>
  );
};

export default Footer;
