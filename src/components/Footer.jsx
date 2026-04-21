import React from 'react';

export default function Footer() {
  return (
    <footer className="gu-footer">
      <div className="gu-footer-inner">
        <div className="gu-footer-left">
          <a href="#" className="gu-logo" style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem', color: '#fff' }}>
            <img src="/logo/g-logo.png" alt="Grow Up Logo" style={{ height: '90px', objectFit: 'contain' }} />
            <span>GROW UP</span>
          </a>
          <p className="gu-footer-copy">hello@growup.studio</p>
          <p className="gu-footer-copy" style={{marginTop: '2rem'}}>© 2026 Grow Up. All content we make? Yours.</p>
        </div>
        <div className="gu-footer-right" style={{display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'flex-end'}}>
          <div className="gu-footer-links" style={{display: 'flex', gap: '2rem'}}>
            <a href="#">Services</a>
            <a href="#">Work</a>
            <a href="#">Why Content</a>
            <a href="#">FAQ</a>
            <a href="#">Book a Call</a>
          </div>
          <div className="gu-footer-socials" style={{display: 'flex', gap: '2rem'}}>
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
            <a href="#">YouTube</a>
            <a href="#">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
