import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`gu-nav${scrolled ? ' scrolled' : ''}`}>
      <div className="gu-nav-inner">
        <Link to="/" className="gu-logo" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img
            src="/logo/g-logo.png"
            alt="GrowwUp Logo"
            style={{ height: '48px', objectFit: 'contain' }}
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
        <a href="#contact" className="gu-btn-nav">BOOK A CALL →</a>
      </div>
    </nav>
  );
}
