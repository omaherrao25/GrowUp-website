import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
  const { pathname } = useLocation();

  return (
    <nav className="gu-nav">
      <div className="gu-nav-inner">
        <Link to="/" className="gu-logo" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <img src="/logo/g-logo.png" alt="Grow Up Logo" style={{ height: '60px', objectFit: 'contain' }} />
          <span>GROW UP</span>
        </Link>
        <ul className="gu-nav-links">
          <li><Link to="/" className={pathname === '/' ? 'active' : ''}>HOME</Link></li>
          <li><Link to="/services" className={pathname === '/services' ? 'active' : ''}>SERVICES</Link></li>
          <li><Link to="/case-study" className={pathname === '/case-study' ? 'active' : ''}>CASE STUDY</Link></li>
          <li><Link to="/why-content" className={pathname === '/why-content' ? 'active' : ''}>WHY CONTENT</Link></li>
        </ul>
        <a href="#" className="gu-btn-nav">BOOK A CALL →</a>
      </div>
    </nav>
  );
}
