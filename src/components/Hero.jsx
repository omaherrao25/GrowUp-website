import React, { useEffect, useRef } from 'react';

export default function Hero() {
  const heroRef = useRef(null);
  const spotRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const spot = spotRef.current;
    if (!hero || !spot) return;

    const onMove = (e) => {
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      spot.style.transform = `translate(${x - 300}px, ${y - 300}px)`;
    };

    hero.addEventListener('mousemove', onMove);
    return () => hero.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section className="gu-hero" id="hero" ref={heroRef}>
      {/* Cursor-following spotlight */}
      <div className="gu-hero-spot" ref={spotRef} />

      {/* Static ambient glow */}
      <div className="gu-hero-ambient" />

      <div className="gu-hero-inner">
        {/* Main headline */}
        <div className="gu-hero-headline-wrap">
          <h1 className="gu-hero-title">
            <span className="gu-hero-line">YOU FINALLY</span>
            <span className="gu-hero-line">
              HAVE A
              <span className="gu-hero-title-em"> MARKETING</span>
            </span>
            <span className="gu-hero-line">TEAM.</span>
          </h1>
        </div>

        {/* Bottom section */}
        <div className="gu-hero-bottom">
          <div className="gu-hero-divider" />
          <div className="gu-hero-bottom-grid">
            <p className="gu-hero-sub">
              It took you 5 minutes to book a call.{' '}
              We script it. We shoot it. We design it.
              We build it. We post it.{' '}
              <em>Every single month</em> — while you run your company.
            </p>

            <div className="gu-hero-cta-col">
              <a href="#contact" className="gu-btn-hero">
                <span className="btn-text">Book a Free Call</span>
                <span className="btn-arrow">→</span>
              </a>
              <p className="gu-hero-guarantee">No contracts. No retainers. Just results.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
