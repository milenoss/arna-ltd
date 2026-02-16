export default function Home() {
  return (
    <main>
      <nav id="nav">
        <a href="#" className="logo">Arna<span>.</span></a>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#testimonials">Reviews</a>
          <a href="#contact" className="nav-cta">Get a Quote</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-bg"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-label">London's Premium Builder</div>
            <h1>We Build<br/><strong>Legacies.</strong></h1>
            <p>High-performance construction and luxury renovations. Precision engineering for London's most ambitious residential projects.</p>
            <div className="hero-buttons">
              <a href="#contact" className="btn-primary">Start Your Build</a>
              <a href="#portfolio" className="btn-outline">View Projects</a>
            </div>
          </div>
        </div>
      </section>

      <div className="stats">
        <div className="stat">
          <div className="stat-num">15+</div>
          <div className="stat-label">Years of Mastery</div>
        </div>
        <div className="stat">
          <div className="stat-num">200+</div>
          <div className="stat-label">Projects Delivered</div>
        </div>
        <div className="stat">
          <div className="stat-num">100%</div>
          <div className="stat-label">Safety Record</div>
        </div>
        <div className="stat">
          <div className="stat-num">UK</div>
          <div className="stat-label">Wide Coverage</div>
        </div>
      </div>

      <section className="services-section" id="services">
        <div className="container">
          <div className="section-label">What We Do</div>
          <div className="section-title">Craftsmanship at<br/><strong>every scale.</strong></div>
          <div className="section-desc">From single-room extensions to full structural rebuilds, we bring architectural precision to every project.</div>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-num">01</div>
              <div className="service-name">Luxury Extensions</div>
              <div className="service-desc">Expanding your living space with architectural precision and high-end finishes. Seamless integration with your existing structure.</div>
              <div className="service-arrow">→</div>
            </div>
            <div className="service-card">
              <div className="service-num">02</div>
              <div className="service-name">Full Renovations</div>
              <div className="service-desc">Stripping back to the foundation and rebuilding your vision from the ground up. Complete transformation, zero compromise.</div>
              <div className="service-arrow">→</div>
            </div>
            <div className="service-card">
              <div className="service-num">03</div>
              <div className="service-name">New Builds</div>
              <div className="service-desc">Bespoke residential construction designed for modern living and longevity. From planning to handover, we manage everything.</div>
              <div className="service-arrow">→</div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="portfolio-section">
        <div className="container">
          <div className="section-label">Our Work</div>
          <div className="section-title">Built to<br/><strong>inspire.</strong></div>
          <div className="section-desc">A selection of recent projects across London and the UK.</div>
        </div>
        <div className="portfolio-grid">
          {[
            { name: "Richmond Residence", type: "New Build", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" },
            { name: "Chelsea Townhouse", type: "Renovation", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80" },
            { name: "Kensington Kitchen", type: "Extension", img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80" },
            { name: "Hampstead Bath Suite", type: "Renovation", img: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&q=80" },
            { name: "Wimbledon Villa", type: "New Build", img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80" },
            { name: "Fulham Living Space", type: "Extension", img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80" }
          ].map((item, i) => (
            <div key={i} className="portfolio-item">
              <img src={item.img} alt={item.name} loading="lazy" />
              <div className="portfolio-overlay">
                <span className="portfolio-type">{item.type}</span>
                <span className="portfolio-name">{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials-section" id="testimonials">
        <div className="container">
          <div className="section-label">Client Reviews</div>
          <div className="section-title" style={{color: '#fff'}}>Trusted by London's<br/><strong>homeowners.</strong></div>
          <div className="section-desc">Every project is a relationship. Here's what our clients say.</div>
          
          <div className="testimonials-grid">
            <div className="testimonial">
              <div className="stars">★★★★★</div>
              <div className="testimonial-text">Arna transformed our 1960s semi into something extraordinary. The attention to detail was remarkable — they treated our home like it was their own.</div>
              <div className="testimonial-author">James & Sarah M.</div>
              <div className="testimonial-location">Kensington, London</div>
            </div>
            <div className="testimonial">
              <div className="stars">★★★★★</div>
              <div className="testimonial-text">Three quotes, three builders. Arna was the only one who actually listened to what we wanted. Finished on time, on budget. Can't ask for more.</div>
              <div className="testimonial-author">David R.</div>
              <div className="testimonial-location">Richmond, Surrey</div>
            </div>
            <div className="testimonial">
              <div className="stars">★★★★★</div>
              <div className="testimonial-text">Our neighbours keep asking who did our extension. The craftsmanship speaks for itself. We've already recommended Arna to three families on our street.</div>
              <div className="testimonial-author">Priya & Anil K.</div>
              <div className="testimonial-location">Hampstead, London</div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="section-label">Contact</div>
              <div className="section-title">Start Your<br/><strong>Legacy.</strong></div>
              <p className="section-desc">Ready to elevate your postcode? Contact us for a confidential project consultation.</p>
              <div style={{marginTop: '40px'}}>
                <p style={{marginBottom: '10px'}}><strong>Email:</strong> <a href="mailto:office@arna-ltd.co.uk" style={{color: '#fff', textDecoration: 'none'}}>office@arna-ltd.co.uk</a></p>
                <p><strong>Phone:</strong> +44 20 7946 0000</p>
              </div>
            </div>
            <form className="contact-form">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email Address" />
              <textarea placeholder="How can we help with your project?"></textarea>
              <button type="submit" className="btn-primary" style={{border: 'none', cursor: 'pointer'}}>Send Inquiry</button>
            </form>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-wrap">
            <a href="#" className="logo">Arna<span>.</span></a>
            <div className="footer-links">
              <a href="#">Instagram</a>
              <a href="#">LinkedIn</a>
              <a href="#">Privacy Policy</a>
            </div>
            <div style={{fontSize: '0.7rem', color: 'var(--color-muted)'}}>© 2026 Arna Ltd. Master Builders UK.</div>
          </div>
        </div>
      </footer>
    </main>
  );
}
