import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCtaLink } from '../utils/ctaLink';

export default function Hero() {
  const bgRef = useRef(null);
  const [ctaLink, setCtaLink] = useState('tel:+917821092963');

  useEffect(() => {
    setCtaLink(getCtaLink());
    const handleMouseMove = (e) => {
      if (!bgRef.current) return;
      const { innerWidth, innerHeight } = window;
      // Calculate mouse position relative to center (from -1 to 1)
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;

      // Move background slightly in opposite direction
      bgRef.current.style.transform = `translate(${x * -20}px, ${y * -20}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove, { passive: true });
  }, []);

  return (
    <section className="gu-hero" id="hero">
      {/* Smooth hardware-accelerated background */}
      <div className="gu-hero-bg" ref={bgRef} />

      <div className="gu-hero-inner">

        {/* Main headline */}
        <div className="gu-hero-headline-wrap">
          <h1 className="gu-hero-title">
            <span className="gu-hero-line">Grow Your Business</span>
            <span className="gu-hero-line-em">With Us !</span>
          </h1>
        </div>

        {/* Description */}
        <div className="gu-hero-sub-wrap">
          <p className="gu-hero-sub">
            We help ambitious brands scale through strategic content systems. Stop guessing, start growing with a team that actually delivers.
          </p>
        </div>

        {/* CTA Section */}
        <div className="gu-hero-cta-group">
          <a href={ctaLink} className="gu-btn-hero">
            <span className="btn-text">GET STARTED TODAY</span>
            <span className="btn-arrow">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
