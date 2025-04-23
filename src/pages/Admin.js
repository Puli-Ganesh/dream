import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './Admin.css';
import './OverviewSection.css';
import './OurServices.css';
import './StepProcess.css';
import './WhyChooseUs.css';
import './CTASection.css';
import Footer from './Footer';



const slideshowImages = [
  "/Images/slide1.jpg",
  "/Images/slide2.jpg",
  "/Images/slide3.jpg",
];

function Admin() {
  const [showLogin, setShowLogin] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % slideshowImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="admin-container">
      <Navbar />

      {/*<div className="slideshow-wrapper">
        <div
          className="slideshow-track"
          style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
        >
          {slideshowImages.map((src, index) => (
            <img key={index} src={src} alt={`slide-${index}`} />
          ))}
        </div>
      </div>

      <div className="hero-text-container">
        <h1 className="hero-heading">Crafted by You, Built by Us</h1>
        <p className="hero-subtext">
          From cozy corners to grand entrances — personalize every room to match your lifestyle.
        </p>
      </div> */}

      <section className="hero-section">
        <div className="image-container">
          <img src="/Images/house1.jpg" alt="Admin Image 1" className="image1" />
          <img src="/Images/house6.jpg" alt="Admin Image 2" className="image2" />
        </div>

        <div className="text-container">
          <h1 className="crafted-text">Crafted By You</h1>
          <h1 className="built-text">Built By Us</h1>
          <p className="description-text">From cozy corners to grand entrances — personalize every room to match your lifestyle.</p>
        </div>

      </section>

      {/* Section 2: Our Work Overview */}
      <div className="overview-section">
        <div className="overview-title-container">
          <div className="overview-title-wrapper">
            <div className="hover-line-top"></div>
            <h2 className="overview-title">What We Do</h2>
            <div className="hover-line-bottom"></div>
          </div>
        </div>


        <div className="overview-grid">
          <div className="overview-row row-1">
            <div className="overview-card">
              <img src="/Images/house2.jpg" alt="Full Home Construction" />
              <button>Full Home</button>
            </div>
            <div className="overview-card">
              <img src="/Images/foundation.jpg" alt="Foundation" />
              <button>Foundation</button>
            </div>
          </div>

          <div className="overview-row row-2">
            <div className="overview-card">
              <img src="/Images/on_site_work.jpg" alt="On Site Work" />
              <button>On-Site</button>
            </div>
            <div className="overview-card">
              <img src="/Images/cost_estimation.jpg" alt="Cost Estimation" />
              <button>Estimation</button>
            </div>
            <div className="overview-card">
              <img src="/Images/drag_and_drop.jpg" alt="Drag Drop" />
              <button>Design Tool</button>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Our Services Section  */}
      <div className="services-section">
        <div className="services-title-wrapper">
          <div className="services-title-wrapper">
            <h2 className="services-title">Our Services</h2>
          </div>
        </div>

        <div className="services-grid">
          <div className="services-column">
            <div className="service-card large">
              <img src="/Images/foundation-l.jpg" alt="Foundation & Structure" />
              <div className="card-label">Foundation & Structure</div>
            </div>
            <div className="service-card small">
              <img src="/Images/pillar.jpg" alt="Pillars & Slabs" />
              <div className="card-label">Pillars, Slabs, Beams</div>
            </div>
          </div>

          <div className="services-column">
            <div className="service-card small">
              <img src="/Images/sewage-s.jpg" alt="Wiring & Sewage" />
              <div className="card-label">Wiring, Outlets, Sewage</div>
            </div>
            <div className="service-card large">
              <img src="/Images/electrical_wiring-l.jpg" alt="Electrical & Plumbing" />
              <div className="card-label">Electrical & Plumbing</div>
            </div>
          </div>

          <div className="services-column">
            <div className="service-card large">
              <img src="/Images/interior-design-l.jpg" alt="Interior Design" />
              <div className="card-label">Interior Design</div>
            </div>
            <div className="service-card small">
              <img src="/Images/kitchen-s.jpg" alt="Modular Kitchen" />
              <div className="card-label">Modular Kitchen, Lighting</div>
            </div>
          </div>


          <div className="services-column">
            <div className="service-card small">
              <img src="/Images/path-way.jpg" alt="Garden & Driveway" />
              <div className="card-label">Garden, Driveway, Fences</div>
            </div>
            <div className="service-card large">
              <img src="/Images/garden-l.jpg" alt="Exterior & Landscaping" />
              <div className="card-label">Exterior & Landscaping</div>
            </div>
          </div>
        </div>
      </div>

      {/* 4th section flow chart */}
      <div className="step-process-wrapper">
        <div className="step-process-section">
          <div className="step-process-title-wrapper">
            <h2 className="step-process-title">Your Dream Home Journey</h2>
            <div className="step-process-underline"></div>
          </div>

          <div className="svg-step-container">
            <svg className="curve-path" viewBox="0 0 1000 800" preserveAspectRatio="none">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f26624" />
                  <stop offset="100%" stopColor="#e8578c" />
                </linearGradient>
              </defs>
              <path
                d="M200,100 Q750,200 200,290 Q100,350 400,400 Q700,450 500,550 Q100,750 850,700"
                fill="none"
                stroke="url(#lineGradient)"
                strokeWidth="6"
              />
            </svg>
            <div className="step-bubble" style={{ top: '90px', left: '80px' }}>
              <div className="step-icon">1️⃣</div>
              <h3>Customize Your Home</h3>
              <p>Design each room to fit your lifestyle using our intuitive tools.</p>
            </div>

            <div className="step-bubble" style={{ top: '160px', left: '600px' }}>
              <div className="step-icon">2️⃣</div>
              <h3>Get Cost Estimate</h3>
              <p>Receive real-time price estimates based on your selections.</p>
            </div>

            <div className="step-bubble" style={{ top: '350px', left: '180px' }}>
              <div className="step-icon">3️⃣</div>
              <h3>Schedule Consultation</h3>
              <p>Talk to our experts and finalize your vision.</p>
            </div>

            <div className="step-bubble" style={{ top: '440px', left: '680px' }}>
              <div className="step-icon">4️⃣</div>
              <h3>Track Progress</h3>
              <p>Stay updated with live milestones and timeline tracking.</p>
            </div>

            <div className="step-bubble" style={{ top: '670px', left: '850px' }}>
              <div className="step-icon">5️⃣</div>
              <h3>Move In</h3>
              <p>Step into your dream home, built to your expectations.</p>
            </div>
          </div>
        </div>
      </div>


      {/*5th section related to the why choose us */}
      <div className="why-choose-us-section">
        <div className="why-choose-title-wrapper">
          <div className="why-choose-heading-wrapper">
            <span className="why-heading-block">
              <h2 className="why-choose-title">Why People Choose Us</h2>
              <div className="why-choose-underline"></div>
            </span>
          </div>
        </div>
        <div className="why-row border-hover">
          <img className="why-img" src="/Images/transparent_costing.jpg" alt="Transparent Costing" />
          <div className="why-text">
            <h3>Clear and Honest Pricing</h3>
            <p>No surprises — know exactly what you’re paying for with itemized breakdowns and transparent costing.</p>
          </div>
        </div>

        <div className="why-row border-hover reverse">
          <img className="why-img" src="/Images/verified_designs.jpg" alt="Verified Designs" />
          <div className="why-text">
            <h3>Verified by Experts</h3>
            <p>All designs are reviewed and approved by certified civil engineers for structural safety.</p>
          </div>
        </div>

        <div className="why-row border-hover">
          <img className="why-img" src="/Images/site_visit.jpg" alt="Site Supervision" />
          <div className="why-text">
            <h3>Dedicated Site Supervision</h3>
            <p>We conduct regular site visits to ensure timely progress and quality adherence.</p>
          </div>
        </div>

        <div className="why-row border-hover reverse">
          <img className="why-img" src="/Images/automation.jpg" alt="Customization" />
          <div className="why-text">
            <h3>100% Personalized Designs</h3>
            <p>From floor plans to fittings, every corner of your home reflects your preferences.</p>
          </div>
        </div>

        <div className="why-row border-hover">
          <img className="why-img" src="/Images/branded_quality.jpg" alt="Branded Materials" />
          <div className="why-text">
            <h3>Top-Quality Materials</h3>
            <p>We use only the most trusted brands for tiles, cement, fittings, and fixtures.</p>
          </div>
        </div>
      </div>

      {/*7th section CTA section */}
      <div className="cta-section">
        <div className="cta-left">
          <img src="/Images/house4.jpg" alt="Dream House" className="cta-image" />
        </div>
        <div className="cta-right">
          <h4 className="cta-subheading">Let’s Build Together</h4>
          <h2 className="cta-heading">Ready to start building your dream?</h2>
          <p className="cta-description">
            Create, customize, and visualize your home in real-time with our interactive 3D house designer. Let's turn your ideas into architecture.
          </p>
          <a href="/customize" className="cta-button">Launch 3D House Designer</a>
        </div>
      </div>

      <Footer />


    </div>

  );
}

export default Admin;
