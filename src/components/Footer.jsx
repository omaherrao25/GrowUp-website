import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">

        {/* ── Main row ── */}
        <div className="footer-main">

          {/* Brand block */}
          <div className="footer-brand">
            <Link to="/" className="footer-brand-name">
              Grow<span>Up.</span>
            </Link>
            <p className="footer-brand-desc">
              Content-first growth studio.<br />
              Turning attention into revenue.
            </p>
            <div className="footer-socials">
              <a href="#" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="LinkedIn">in</a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Instagram">ig</a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="YouTube">yt</a>
            </div>
          </div>

          {/* Nav columns */}
          <div className="footer-navs">

            <nav className="footer-nav-col">
              <p className="footer-nav-head">Get Started</p>
              <ul>
                <li><Link to="/services">Services</Link></li>
                <li><a href="#contact">Contact</a></li>
                <li><Link to="/why-content">Why Content</Link></li>
              </ul>
            </nav>

            <nav className="footer-nav-col">
              <p className="footer-nav-head">Our Work</p>
              <ul>
                <li>
                  <Link to="/case-study">
                    Case Studies
                  </Link>
                </li>
                <li><Link to="/case-study">Portfolio</Link></li>
              </ul>
            </nav>

            <nav className="footer-nav-col">
              <p className="footer-nav-head">Privacy &amp; Policy</p>
              <ul>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms of Service</Link></li>
              </ul>
            </nav>

          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">&copy; {year}. All rights reserved.</span>
        </div>

      </div>
    </footer>
  );
}
