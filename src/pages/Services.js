import React from 'react';
import './Services.css';
import Footer from './Footer';
import Navbar from './Navbar';

function Services() {
    return (
        <div>
            <Navbar />
            <div className="services-wrapper" id="services">

                {/* Section 1: Hero section with Background Image */}
                <section className="services-hero" style={{ backgroundImage: `url('/Images/services_main.jpg')` }}>
                    <div className="hero-overlay">
                        <h1 className="services-title">Our Services</h1>
                        <p className="services-subtext">Everything you need from ground-breaking to house-warming — completely customizable.</p>
                    </div>
                </section>

                {/* Section 2: Foundation & Structure */}
                <section className="foundation-structure-section">
                    <div className="foundation-left">
                        <h2 className="foundation-heading">Foundation & Structure</h2>
                        <p className="foundation-text">
                            We start with site layout, excavation, and structural beam/pillar design — compliant with International Standard Civil codes.
                        </p>
                        <button className="foundation-btn">Know More</button>
                    </div>

                    <div className="foundation-right">
                        <div className="flip-column">
                            <div className="flip-card small-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src="/Images/services/house-s1.jpg" alt="front" />
                                    </div>
                                    <div className="flip-card-back">
                                        <img src="/Images/services/house-s2.jpg" alt="back" />
                                    </div>
                                </div>
                            </div>
                            <div className="flip-card big-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src="/Images/services/house-l2.jpg" alt="front" />
                                    </div>
                                    <div className="flip-card-back">
                                        <img src="/Images/services/house-l1.jpg" alt="back" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flip-column">
                            <div className="flip-card big-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src="/Images/services/house-s4.jpg" alt="front" />
                                    </div>
                                    <div className="flip-card-back">
                                        <img src="/Images/services/house-s3.jpg" alt="back" />
                                    </div>
                                </div>
                            </div>
                            <div className="flip-card small-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src="/Images/services/house-l3.jpg" alt="front" />
                                    </div>
                                    <div className="flip-card-back">
                                        <img src="/Images/services/house-l4.jpg" alt="back" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Section 3: Split Layout - Electrical & Plumbing */}
                <section className="service-split">
                    <div className="service-split-slideshow">
                        <div className="slideshow-container">
                            <img src="/Images/services/electrician1.jpg" alt="Slide 1" className="slide" />
                            <img src="/Images/services/plumbing1.jpg" alt="Slide 2" className="slide" />
                            <img src="/Images/services/electrician2.jpg" alt="Slide 3" className="slide" />
                            <img src="/Images/services/plumbing2.jpg" alt="Slide 4" className="slide" />
                        </div>
                    </div>

                    <div className="service-split-card">
                        <div className="service-card-content">
                            <h2 className="card-heading">Electrical & Plumbing</h2>
                            <p className="card-description">
                                Our experts install all concealed wiring, lighting fixtures, geysers, toilets, tanks, and drainage systems.
                            </p>
                            <button className="card-btn">Book Installation</button>
                        </div>
                    </div>
                </section>


                {/* Section 4: Interior Design - Modular Kitchen Grid */}
                <section className="interior-kitchen-section">
                    <h2 className="interior-heading">Modern Kitchen</h2>
                    <div className="interior-underline"></div>

                    <div className="interior-grid">
                        <div className="grid-col">
                            <div className="image-card"><img src="/Images/services/kitchen2.jpg" alt="Kitchen 2" /></div>
                            <div className="image-card"><img src="/Images/services/kitchen3.jpg" alt="Kitchen 3" /></div>
                        </div>
                        <div className="grid-col">
                            <div className="image-card"><img src="/Images/services/kitchen4.jpg" alt="Kitchen 4" /></div>
                            <div className="image-card"><img src="/Images/services/kitchen5.jpg" alt="Kitchen 5" /></div>
                        </div>
                        <div className="grid-col tall">
                            <div className="image-card tall-card"><img src="/Images/services/kitchen1.jpg" alt="Main Kitchen" /></div>
                        </div>
                    </div>
                </section>


                {/* Section 5: Interior Design - Circular Animation & Text */}
                <section className="interior-split-section">
                    <div className="interior-left-rotation">
                        <div className="wrapper">
                            <div className="inner" style={{ '--quantity': 8 }}>
                                {[
                                    "interior1.jpg",
                                    "interior2.jpg",
                                    "interior3.jpg",
                                    "interior4.jpg",
                                    "interior5.jpg",
                                    "interior6.jpg",
                                    "interior7.jpg",
                                    "interior8.jpg",
                                ].map((img, index) => (
                                    <div className="card" key={index} style={{'--index': index,  '--color-card': '242, 102, 36', }} >
                                        <img className="img" src={`/Images/services/${img}`} alt={`interior-${index}`} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="interior-right-content">
                        <h2 className="interior-title">Interior Design</h2>
                        <div className="interior-desc">
                            From cozy corners to elegant wardrobes, our interior designers blend beauty with utility. Whether it’s false ceilings, lighting, furniture, or modular kitchens — we build every element to reflect your lifestyle.
                        </div>
                    </div>
                </section>


                {/* Section 6: Garden Showcase - 3D Parallax Fly-In */}
<section className="garden-parallax-section">
  <h2 className="garden-title">Green Your Space</h2>
  <p className="garden-subtitle">Interactive landscaping and garden design that breathes life into your home.</p>
  
  <div className="garden-parallax-container">
    {Array.from({ length: 10 }).map((_, index) => (
      <div className="garden-card" key={index}>
        <div className="garden-card-inner">
          <img
            src={`/Images/services/garden${index + 1}.jpg`}
            alt={`Garden ${index + 1}`}
            className="garden-img"
          />
          <div className="garden-overlay">
            <p className="overlay-text">Garden #{index + 1}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>


                {/* Section 7: CTA */}
                <section className="services-cta">
                    <h2>Ready to Build?</h2>
                    <a className="service-btn" href="#design">Start Customizing</a>
                </section>

                <Footer />
            </div>
        </div>
    );
}

export default Services;
