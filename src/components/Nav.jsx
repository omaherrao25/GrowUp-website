import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { getCtaLink } from '../utils/ctaLink';

export default function Nav() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [ctaLink, setCtaLink] = useState('tel:+917821092963');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    <>
      <nav className={`gu-nav ${scrolled ? 'scrolled' : ''} ${!visible && !menuOpen ? 'nav-hidden' : ''}`} style={{ zIndex: 1000 }}>
        <div className="gu-nav-inner">
          <Link to="/#hero" className="gu-logo" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <img
              src="/favicon.png"
              alt="Grow Up Logo"
              style={{ height: '48px', objectFit: 'contain' }}
              onError={e => { e.currentTarget.style.display = 'none'; }}
            />
            <span>GROW UP</span>
          </Link>

          {!isMobile ? (
            <>
              <ul className="gu-nav-links">
                <li><Link to="/#hero" className={pathname === '/' ? 'active' : ''}>HOME</Link></li>
                <li><Link to="/services" className={pathname === '/services' ? 'active' : ''}>SERVICES</Link></li>
                <li><Link to="/portfolio" className={pathname === '/portfolio' ? 'active' : ''}>PORTFOLIO</Link></li>
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
            </>
          ) : (
            <button 
              onClick={() => setMenuOpen(!menuOpen)} 
              aria-label="Toggle Menu"
              style={{
                background: 'transparent',
                border: 'none',
                color: '#000',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '48px',
                minHeight: '48px',
                zIndex: 1001
              }}
            >
              {menuOpen ? (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" y1="12" x2="20" y2="12"></line>
                  <line x1="4" y1="6" x2="20" y2="6"></line>
                  <line x1="4" y1="18" x2="20" y2="18"></line>
                </svg>
              )}
            </button>
          )}
        </div>
      </nav>

      <AnimatePresence>
        {isMobile && menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: '0',
              left: '0',
              width: '100vw',
              height: '100vh',
              background: 'rgba(10, 10, 10, 0.98)',
              backdropFilter: 'blur(15px)',
              zIndex: 999,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '2rem'
            }}
          >
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: '0 0 3rem 0',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2rem'
            }}>
              <li><Link to="/#hero" style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', textDecoration: 'none' }} onClick={() => setMenuOpen(false)}>HOME</Link></li>
              <li><Link to="/services" style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', textDecoration: 'none' }} onClick={() => setMenuOpen(false)}>SERVICES</Link></li>
              <li><Link to="/portfolio" style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', textDecoration: 'none' }} onClick={() => setMenuOpen(false)}>PORTFOLIO</Link></li>
              <li><Link to="/case-study" style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', textDecoration: 'none' }} onClick={() => setMenuOpen(false)}>CASE STUDY</Link></li>
              <li><Link to="/why-content" style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', textDecoration: 'none' }} onClick={() => setMenuOpen(false)}>WHY CONTENT</Link></li>
            </ul>
            
            <a href={ctaLink} className="gu-btn-nav" style={{ width: '100%', maxWidth: '300px', display: 'flex', justifyContent: 'center' }} onClick={() => setMenuOpen(false)}>
              BOOK A CALL
              <span className="btn-arrow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
