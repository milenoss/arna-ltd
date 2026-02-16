export default function Home() {
  return (
    <main>
      <nav>
        <div className="logo italic uppercase tracking-tighter">Arna Ltd</div>
        <div className="nav-links">
          <a href="#expertise">Expertise</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6199f7d009?q=80&w=2070" 
          alt="Luxury Architecture" 
          className="hero-img"
        />
        <div className="container">
          <div className="hero-content">
            <span className="section-label">Prime Residential</span>
            <h1 className="hero-title">WE BUILD<br/>DISTINCTION.</h1>
            <div className="flex gap-4">
              <a href="#contact" className="cta-btn">Start Project</a>
            </div>
          </div>
        </div>
      </section>

      <section id="expertise" className="services-section">
        <div className="container">
          <span className="section-label">Our Expertise</span>
          <h2 className="section-title">Mastering the<br/>Art of Building.</h2>
          <p className="section-desc">Uncompromising precision for the UK's most demanding estates.</p>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-num">01</div>
              <h3 className="service-name">Luxury Extensions</h3>
              <p className="service-desc">Architectural integration that expands your living footprint without compromise.</p>
              <div className="service-arrow">→</div>
            </div>
            <div className="service-card">
              <div className="service-num">02</div>
              <h3 className="service-name">Prestige Renovations</h3>
              <p className="service-desc">Transformation of heritage estates using world-class materials and techniques.</p>
              <div className="service-arrow">→</div>
            </div>
            <div className="service-card">
              <div className="service-num">03</div>
              <h3 className="service-name">Bespoke New Builds</h3>
              <p className="service-desc">Ground-up execution of unique visions, delivered with surgical precision.</p>
              <div className="service-arrow">→</div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio">
        <div className="container">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Selected Works</h2>
          <div className="portfolio-grid">
            {[
              { name: "Chelsea Penthouse", type: "Interior Renovation", img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070" },
              { name: "Surrey Estate", type: "New Build", img: "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?q=80&w=2070" },
              { name: "Mayfair Flat", type: "Refurbishment", img: "https://images.unsplash.com/photo-1600585154526-990dcea4db0d?q=80&w=2070" }
            ].map((item, i) => (
              <div key={i} className="portfolio-item">
                <img src={item.img} alt={item.name} />
                <div className="portfolio-overlay">
                  <span className="portfolio-type">{item.type}</span>
                  <h3 className="portfolio-name">{item.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials-section">
        <div className="container">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">What Our<br/>Clients Say.</h2>
          <div className="testimonials-grid">
            <div className="testimonial">
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">"Arna Ltd delivered our extension with absolute precision. The attention to detail is unmatched in London."</p>
              <div className="testimonial-author">James Richardson</div>
              <div className="testimonial-location">Chelsea, London</div>
            </div>
            <div className="testimonial">
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">"The most professional building team we've ever worked with. They managed the entire process flawlessly."</p>
              <div className="testimonial-author">Sarah Sterling</div>
              <div className="testimonial-location">Surrey</div>
            </div>
            <div className="testimonial">
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">"Master-grade materials and a team that genuinely cares about the final finish. Truly exceptional."</p>
              <div className="testimonial-author">David Kensington</div>
              <div className="testimonial-location">Richmond</div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <span className="section-label">Contact</span>
              <h2 className="section-title">Start Your<br/>Legacy.</h2>
              <p>Ready to elevate your postcode? Contact us for a confidential project consultation.</p>
              <p><strong>Email:</strong> <a href="mailto:office@arna-ltd.co.uk">office@arna-ltd.co.uk</a></p>
              <p><strong>Phone:</strong> +44 20 7946 0000</p>
            </div>
            <form className="contact-form">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <textarea placeholder="Tell us about your project"></textarea>
              <button type="submit" className="submit-btn">Send Inquiry</button>
            </form>
          </div>
        </div>
      </section>

      <footer>
        <div className="logo italic">Arna Ltd</div>
        <div className="footer-links">
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div>© 2026 Arna Ltd. Master Builders UK.</div>
      </footer>
    </main>
  );
}
