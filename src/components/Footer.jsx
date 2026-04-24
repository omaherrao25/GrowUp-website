import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-main">
          <div className="footer-brand">
            <Link to="/#hero" className="footer-brand-home" aria-label="Grow Up home">
              <img
                src="/logo/g-logo.png"
                alt="Grow Up logo"
                className="footer-brand-logo"
                onError={(event) => {
                  event.currentTarget.style.display = 'none';
                }}
              />
            </Link>
            <Link to="/#hero" className="footer-brand-name">
              Grow Up
            </Link>
            <a
              href="mailto:Management.growupmedia@gmail.com"
              className="footer-brand-email"
            >
              Management.growupmedia@gmail.com
            </a>
          </div>

          <div className="footer-navs">
            <nav className="footer-nav-col" aria-label="Home sections">
              <p className="footer-nav-head">Sections</p>
              <ul>
                <li><Link to="/#services">Services</Link></li>
                <li><Link to="/#selected-works">Selected Works</Link></li>
                <li><Link to="/#work">Our Work</Link></li>
                <li><Link to="/#testimonials">Testimonials</Link></li>
              </ul>
            </nav>

            <nav className="footer-nav-col" aria-label="More pages">
              <p className="footer-nav-head">Explore</p>
              <ul>
                <li><Link to="/why-content">Why Content</Link></li>
                <li><Link to="/case-study">Case Study</Link></li>
                <li><Link to="/#problem">The Problem</Link></li>
              </ul>
            </nav>

            <nav className="footer-nav-col" aria-label="Contact links">
              <p className="footer-nav-head">Contact</p>
              <ul>
                <li><Link to="/#contact">Book a Call</Link></li>
                <li>
                  <a href="mailto:Management.growupmedia@gmail.com">
                    Email Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">&copy; {year} Grow Up. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
