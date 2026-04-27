import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getCtaLink } from '../utils/ctaLink';

export default function Nav() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [ctaLink, setCtaLink] = useState('tel:+917821092963');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setCtaLink(getCtaLink());
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Background styling
      setScrolled(currentScrollY > 30);
      
      // Hide/Show logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide
        setVisible(false);
      } else {
        // Scrolling up - show
        setVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <nav className={`gu-nav ${scrolled ? 'scrolled' : ''} ${!visible ? 'nav-hidden' : ''}`}>
      <div className="gu-nav-inner">
        <Link to="/#hero" className="gu-logo" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img
            src="/logo/g-logo.png"
            alt="Grow Up Logo"
            style={{ height: '48px', objectFit: 'contain' }}
            onError={e => { e.currentTarget.style.display = 'none'; }}
          />
          <span>GROW UP</span>
        </Link>

        <ul className="gu-nav-links">
          <li><Link to="/#hero" className={pathname === '/' ? 'active' : ''}>HOME</Link></li>
          <li><Link to="/services" className={pathname === '/services' ? 'active' : ''}>SERVICES</Link></li>
          <li><Link to="/case-study" className={pathname === '/case-study' ? 'active' : ''}>CASE STUDY</Link></li>
          <li><Link to="/why-content" className={pathname === '/why-content' ? 'active' : ''}>WHY CONTENT</Link></li>
        </ul>
        <a href={ctaLink} className="gu-btn-nav">
          BOOK A CALL
          <span className="btn-arrow">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
        </a>
      </div>
    </nav>
  );
}
