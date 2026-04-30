import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-main">
          {/* Left Side: Brand & Description */}
          <div className="footer-left">
            <div className="footer-brand-top">
              <img src="/favicon.png" alt="Growup Logo" className="footer-brand-img" />
              <Link to="/" className="footer-logo">
                Grow<span>up.</span>
              </Link>
              <span className="footer-email">
                Management.growupmedia@gmail.com
              </span>
            </div>
            <p className="footer-description">
              Content-first growth studio. Turning attention into revenue.
            </p>
            <div className="footer-socials">
              <a href="https://www.instagram.com/growupmarketplace.ig/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          {/* Right Side: Link Columns */}
          <div className="footer-navs">
            <div className="footer-nav-col">
              <h4 className="footer-nav-head">Get Started</h4>
              <ul>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/#contact">Contact</Link></li>
                <li><Link to="/why-content">Why Content</Link></li>
              </ul>
            </div>
            <div className="footer-nav-col">
              <h4 className="footer-nav-head">Our Work</h4>
              <ul>
                <li><Link to="/case-study">Case Studies</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
              </ul>
            </div>
            <div className="footer-nav-col">
              <h4 className="footer-nav-head">Privacy & Policy</h4>
              <ul>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© 2026 Grow Up. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
