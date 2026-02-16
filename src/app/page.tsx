import React from 'react';

export default function Home() {
  return (
    <main>
      <header className="header">
        <div className="container header-content">
          <a href="#" className="header-logo">Arna Ltd</a>
          <nav className="nav-menu">
            <a href="#expertise">Expertise</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero-section">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6199f7d009?q=80&w=2070&auto=format&fit=crop" 
          alt="Luxury modern architecture"
          className="hero-background-image"
        />
        <div className="hero-overlay"></div>
        <div className="container">
          <p className="hero-subtitle">Prime Residential Construction</p>
          <h1 className="hero-title text-gradient">WE BUILD<br />DISTINCTION.</h1>
          <p className="hero-description">
            Master-grade building services and luxury interior renovations. Arna Ltd delivers uncompromising precision for the UK's most demanding estates.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">Start Your Legacy</a>
            <a href="#portfolio" className="btn btn-secondary">The Portfolio</a>
          </div>
        </div>
        <div className="scroll-indicator"></div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>480+</h3>
              <p>Completed Units</p>
            </div>
            <div className="stat-item">
              <h3>22</h3>
              <p>Years of Mastery</p>
            </div>
            <div className="stat-item">
              <h3>A+</h3>
              <p>Safety Rating</p>
            </div>
            <div className="stat-item">
              <h3>14</h3>
              <p>London Postcodes</p>
            </div>
          </div>
        </div>
      </section>

      <section id="expertise" className="expertise-section">
        <div className="container">
          <div className="expertise-header">
            <p className="expertise-subtitle">Our Expertise</p>
            <h2 className="expertise-title">Mastering the <span>Art of Building.</span></h2>
          </div>
          <div className="expertise-grid">
            <div className="expertise-card">
              <div className="expertise-card-icon">🏗️</div>
              <h3>Luxury Extensions</h3>
              <p>Seamless architectural integration that expands your living footprint without compromise.</p>
            </div>
            <div className="expertise-card">
              <div className="expertise-card-icon">✨</div>
              <h3>Prestige Renovations</h3>
              <p>Total transformation of heritage and modern estates using world-class materials and techniques.</p>
            </div>
            <div className="expertise-card">
              <div className="expertise-card-icon">📐</div>
              <h3>Bespoke New Builds</h3>
              <p>Ground-up execution of unique architectural visions, delivered with surgical precision.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="portfolio-section">
        <div className="container">
          <div className="portfolio-header">
            <p className="portfolio-subtitle">Portfolio</p>
            <h2 className="portfolio-title">Selected Works.</h2>
          </div>
          <div className="portfolio-grid">
            {[
              { name: "Chelsea Penthouse", type: "Interior Renovation", img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop" },
              { name: "Surrey Estate", type: "New Build", img: "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?q=80&w=2070&auto=format&fit=crop" },
              { name: "Mayfair Flat", type: "Refurbishment", img: "https://images.unsplash.com/photo-1600585154526-990dcea4db0d?q=80&w=2070&auto=format&fit=crop" }
            ].map((item, i) => (
              <div key={i} className="portfolio-item">
                <img src={item.img} alt={item.name} />
                <div className="portfolio-overlay">
                  <p className="portfolio-type">{item.type}</p>
                  <h3 className="portfolio-name">{item.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials-section">
        <div className="container">
          <div className="testimonials-header">
            <p className="testimonials-subtitle">Testimonials</p>
            <h2 className="testimonials-title">What Our Clients Say.</h2>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-stars">★★★★★</p>
              <p className="testimonial-text">"Arna Ltd delivered our extension with absolute precision. The attention to detail is unmatched in London."</p>
              <p className="testimonial-author">James Richardson</p>
              <p className="testimonial-location">Chelsea, London</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-stars">★★★★★</p>
              <p className="testimonial-text">"The most professional building team we've ever worked with. They managed the entire process flawlessly."</p>
              <p className="testimonial-author">Sarah Sterling</p>
              <p className="testimonial-location">Surrey</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-stars">★★★★★</p>
              <p className="testimonial-text">"Master-grade materials and a team that genuinely cares about the final finish. Truly exceptional."</p>
              <p className="testimonial-author">David Kensington</p>
              <p className="testimonial-location">Richmond</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to Elevate Your Postcode?</h2>
          <p className="cta-description">
            Contact Arna Ltd today for a confidential project consultation and let's build your legacy.
          </p>
          <a href="#contact" className="btn btn-primary">Inquire Now</a>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <p className="contact-subtitle">Contact</p>
              <h2 className="contact-title">Start Your Legacy.</h2>
              <p className="contact-description">Ready to elevate your postcode? Contact us for a confidential project consultation.</p>
              <p><strong>Email:</strong> <a href="mailto:office@arna-ltd.co.uk">office@arna-ltd.co.uk</a></p>
              <p><strong>Phone:</strong> +44 20 7946 0000</p>
            </div>
            <form className="contact-form">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <textarea placeholder="Tell us about your project"></textarea>
              <button type="submit" className="btn btn-primary">Send Inquiry</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-content">
          <a href="#" className="footer-logo">Arna Ltd</a>
          <div className="footer-links">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="#">Privacy Policy</a>
          </div>
          <p className="footer-copyright">© 2026 Arna Ltd. Master Builders UK.</p>
        </div>
      </footer>
    </main>
  );
}
