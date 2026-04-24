import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const bgRef = useRef(null);

  useEffect(() => {
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
        {/* Kicker Badge */}
        <div className="gu-hero-kicker-wrap">
          <span className="gu-hero-kicker-badge">Content-First Studio</span>
        </div>

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
            We help ambitious brands scale through strategic content systems.<br />
            Stop guessing, start growing with a team that actually delivers.
          </p>
        </div>

        {/* CTA Section */}
        <div className="gu-hero-cta-group">
          <Link to="/#contact" className="gu-btn-hero">
            <span className="btn-text">Get Started Today</span>
            <span className="btn-arrow">â†’</span>
          </Link>
          <p className="gu-hero-guarantee">Limited availability for Q2 2026</p>
        </div>
      </div>
    </section>
  );
}
