"use client";

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Nav scroll
    const handleScroll = () => {
      const nav = document.getElementById('nav');
      if (nav) {
        nav.classList.toggle('scrolled', window.scrollY > 50);
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Reveal on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <main style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>
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
            <div className="hero-label reveal">London's Premium Builder</div>
            <h1 className="reveal">We Build<br/><strong>Legacies.</strong></h1>
            <p className="reveal">High-performance construction and luxury renovations. Precision engineering for London's most ambitious residential projects.</p>
            <div className="hero-buttons reveal">
              <a href="#contact" className="btn-primary">Start Your Build</a>
              <a href="#portfolio" className="btn-outline">View Projects</a>
            </div>
          </div>
        </div>
      </section>

      <div className="stats">
        <div className="stat reveal">
          <div className="stat-num">15+</div>
          <div className="stat-label">Years of Mastery</div>
        </div>
        <div className="stat reveal">
          <div className="stat-num">200+</div>
          <div className="stat-label">Projects Delivered</div>
        </div>
        <div className="stat reveal">
          <div className="stat-num">100%</div>
          <div className="stat-label">Safety Record</div>
        </div>
        <div className="stat reveal">
          <div className="stat-num">UK</div>
          <div className="stat-label">Wide Coverage</div>
        </div>
      </div>

      <section className="services-section" id="services">
        <div className="container">
          <div className="section-label reveal">What We Do</div>
          <div className="section-title reveal">Craftsmanship at<br/><strong>every scale.</strong></div>
          <div className="section-desc reveal">From single-room extensions to full structural rebuilds, we bring architectural precision to every project.</div>
          
          <div className="services-grid">
            <div className="service-card reveal">
              <div className="service-num">01</div>
              <div className="service-name">Luxury Extensions</div>
              <div className="service-desc">Expanding your living space with architectural precision and high-end finishes. Seamless integration with your existing structure.</div>
              <div className="service-arrow">→</div>
            </div>
            <div className="service-card reveal">
              <div className="service-num">02</div>
              <div className="service-name">Full Renovations</div>
              <div className="service-desc">Stripping back to the foundation and rebuilding your vision from the ground up. Complete transformation, zero compromise.</div>
              <div className="service-arrow">→</div>
            </div>
            <div className="service-card reveal">
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
          <div className="section-label reveal">Our Work</div>
          <div className="section-title reveal">Built to<br/><strong>inspire.</strong></div>
          <div className="section-desc reveal">A selection of recent projects across London and the UK.</div>
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
            <div key={i} className="portfolio-item reveal">
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
          <div className="section-label reveal">Client Reviews</div>
          <div className="section-title reveal" style={{color: '#fff'}}>Trusted by London's<br/><strong>homeowners.</strong></div>
          <div className="section-desc reveal">Every project is a relationship. Here's what our clients say.</div>
          
          <div className="testimonials-grid">
            <div className="testimonial reveal">
              <div className="stars">★★★★★</div>
              <div className="testimonial-text">Arna transformed our 1960s semi into something extraordinary. The attention to detail was remarkable — they treated our home like it was their own.</div>
              <div className="testimonial-author">James & Sarah M.</div>
              <div className="testimonial-location">Kensington, London</div>
            </div>
            <div className="testimonial reveal">
              <div className="stars">★★★★★</div>
              <div className="testimonial-text">Three quotes, three builders. Arna was the only one who actually listened to what we wanted. Finished on time, on budget. Can't ask for more.</div>
              <div className="testimonial-author">David R.</div>
              <div className="testimonial-location">Richmond, Surrey</div>
            </div>
            <div className="testimonial reveal">
              <div className="stars">★★★★★</div>
              <div className="testimonial-text">Our neighbours keep asking who did our extension. The craftsmanship speaks for itself. We've already recommended Arna to three families on our street.</div>
              <div className="testimonial-author">Priya & Anil K.</div>
              <div className="testimonial-location">Hampstead, London</div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="section-label reveal">Ready?</div>
          <div className="section-title reveal">Let's build something<br/><strong>remarkable.</strong></div>
          <div className="section-desc reveal">Free consultation and quote within 24 hours. No obligation, no pressure.</div>
          <a href="#contact" className="btn-primary reveal">Get Your Free Quote</a>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info reveal">
              <div className="section-label">Get In Touch</div>
              <div className="section-title">Start your<br/><strong>project.</strong></div>
              <p><strong>Arna Ltd</strong><br/><br/> London & UK Wide<br/><br/> <a href="tel:+442071234567">020 7123 4567</a><br/> <a href="mailto:info@arna-ltd.co.uk">info@arna-ltd.co.uk</a><br/><br/> Monday — Friday: 8am – 6pm<br/> Saturday: By appointment<br/> Sunday: Closed</p>
            </div>
            <form className="contact-form reveal">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="tel" placeholder="Phone Number" />
              <textarea placeholder="Tell us about your project..."></textarea>
              <button type="submit" className="btn-primary">Send Enquiry</button>
            </form>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-wrap">
            <a href="#" className="logo">Arna<span>.</span></a>
            <div className="footer-links">
              <a href="#services">Services</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#testimonials">Reviews</a>
              <a href="#contact">Contact</a>
            </div>
            <div style={{fontSize: '0.7rem', color: 'var(--color-muted)'}}>© 2026 Arna Ltd. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </main>
  );
}
