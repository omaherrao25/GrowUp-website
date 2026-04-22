import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="gu-footer">
      <div className="footer-wrap">

        {/* ── CTA Band ── */}
        <div className="footer-cta">
          <h2 className="footer-cta-headline">
            Let's build something<br />
            <em className="footer-cta-em">remarkable.</em>
          </h2>
          <a href="#contact" className="footer-cta-btn">
            <span>Book a Strategy Call</span>
            <span className="footer-cta-arrow">↗</span>
          </a>
        </div>

        {/* ── Separator ── */}
        <div className="footer-sep" />

        {/* ── Main grid ── */}
        <div className="footer-grid">

          {/* Brand col */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src="/logo/g-logo.png" alt="Grow Up" className="footer-logo-img" />
              <span className="footer-logo-wordmark">GROW UP</span>
            </Link>
            <p className="footer-tagline">
              Content-first growth studio.<br />
              Turning attention into revenue.
            </p>
          </div>

          {/* Explore col */}
          <div className="footer-col">
            <p className="footer-col-label">Explore</p>
            <ul className="footer-nav-list">
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/case-study">Work</Link></li>
              <li><Link to="/why-content">Why Content</Link></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Connect col */}
          <div className="footer-col">
            <p className="footer-col-label">Connect</p>
            <ul className="footer-nav-list footer-nav-list--external">
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <span>LinkedIn</span>
                  <span className="ext-arrow">↗</span>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <span>Instagram</span>
                  <span className="ext-arrow">↗</span>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <span>YouTube</span>
                  <span className="ext-arrow">↗</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="footer-bottom">
          <span className="footer-copy">© {currentYear} Grow Up Studio. All rights reserved.</span>
          <div className="footer-legal">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <span className="footer-legal-dot">·</span>
            <span className="footer-location">Based in India, IST</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
