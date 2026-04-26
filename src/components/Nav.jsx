import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <nav className={`gu-nav${scrolled ? ' scrolled' : ''}`}>
      <div className="gu-nav-inner">
        <Link to="/" className="gu-logo" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img
            src="/logo/g-logo.png"
            alt="GrowwUp Logo"
            style={{ height: '40px', objectFit: 'contain' }}
            onError={e => { e.currentTarget.style.display = 'none'; }}
          />
          <span>GROW UP</span>
        </Link>

        <ul className="gu-nav-links">
          <li><Link to="/" className={pathname === '/' ? 'active' : ''}>HOME</Link></li>
          <li><Link to="/services" className={pathname === '/services' ? 'active' : ''}>SERVICES</Link></li>
          <li><Link to="/case-study" className={pathname === '/case-study' ? 'active' : ''}>CASE STUDY</Link></li>
          <li><Link to="/why-content" className={pathname === '/why-content' ? 'active' : ''}>WHY CONTENT</Link></li>
        </ul>

        <div className="gu-nav-right">
          <a href="#contact" className="gu-btn-nav">BOOK A CALL →</a>
          <button
            className={`gu-hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`gu-mobile-menu${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        <ul className="gu-mobile-links">
          <li><Link to="/" className={pathname === '/' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/services" className={pathname === '/services' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Services</Link></li>
          <li><Link to="/case-study" className={pathname === '/case-study' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Case Study</Link></li>
          <li><Link to="/why-content" className={pathname === '/why-content' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Why Content</Link></li>
          <li><Link to="/privacy" className={pathname === '/privacy' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Privacy Policy</Link></li>
          <li><Link to="/terms" className={pathname === '/terms' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Terms</Link></li>
        </ul>
        <a href="#contact" className="gu-mobile-cta" onClick={() => setMenuOpen(false)}>
          Book a Free Call →
        </a>
      </div>
    </nav>
  );
}
