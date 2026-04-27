import React, { useState, useEffect, useRef } from 'react';
import { getCtaLink } from '../utils/ctaLink';

const CATEGORIES = ['All', 'Social Media', 'Video Production', 'Design', 'Branding'];

const WORKS = [
  { id: 1,  src: '/video/Rv01.mp4',                                              category: 'Social Media',     label: 'Brand Story',     wide: true  },
  { id: 2,  src: '/video/dt01.mp4',                                              category: 'Video Production', label: 'Product Film',    wide: false },
  { id: 3,  src: '/video/en02.mp4',                                              category: 'Social Media',     label: 'Creator Content', wide: false },
  { id: 4,  src: '/video/gr3.mp4',                                               category: 'Social Media',     label: 'Short-Form',      wide: false },
  { id: 6,  src: '/video/Motion Design Reel.mp4',                                category: 'Design',           label: 'Motion Reel',     wide: false },
  { id: 7,  src: '/video/A Boring Morning but Cinematic -  Sony ZV-E10.mp4',     category: 'Video Production', label: 'Cinematic',       wide: false },
  { id: 8,  src: '/video/tc01.mp4',                                              category: 'Video Production', label: 'Commercial',      wide: true  },
  { id: 9,  src: '/video/timus01.mp4',                                           category: 'Branding',         label: 'Brand Identity',  wide: false },
  { id: 10, src: '/video/tl02.mp4',                                              category: 'Social Media',     label: 'Campaign',        wide: false },
  { id: 11, src: '/video/uu01.mp4',                                              category: 'Branding',         label: 'Product Launch',  wide: false },
  { id: 12, src: '/video/uu02.mp4',                                              category: 'Design',           label: 'Visual Identity', wide: false },
  { id: 13, src: '/video/uu03.mp4',                                              category: 'Video Production', label: 'Story Series',    wide: false },
];

export default function PortfolioPage() {
  const [active, setActive]         = useState('All');
  const [ctaLink, setCtaLink]       = useState('tel:+917821092963');

  useEffect(() => { setCtaLink(getCtaLink()); }, []);

  /* Scroll reveal for static elements */
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('pf-visible')),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.pf-static.pf-reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  /* Staggered card reveal on filter change */
  useEffect(() => {
    const t = setTimeout(() => {
      document.querySelectorAll('.pf-card.pf-reveal').forEach((el, i) => {
        setTimeout(() => el.classList.add('pf-visible'), i * 55);
      });
    }, 40);
    return () => clearTimeout(t);
  }, [active]);

  const filtered = active === 'All' ? WORKS : WORKS.filter(w => w.category === active);

  return (
    <main className="pf-page">

      {/* ── Hero ── */}
      <section className="pf-hero">
        <div className="pf-container">
          <div className="pf-hero-inner pf-reveal pf-static">
            <span className="pf-hero-pill">
              {WORKS.length}&nbsp;Projects&nbsp;·&nbsp;4&nbsp;Categories
            </span>
            <h1 className="pf-hero-title">
              THE PORTFOLIO<span className="pf-accent">.</span>
            </h1>
            <div className="pf-hero-rule" />
            <p className="pf-hero-sub">Every frame crafted with intention.</p>
          </div>
        </div>
      </section>

      {/* ── Filter bar ── */}
      <div className="pf-filter-bar">
        <div className="pf-container">
          <div className="pf-filters">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`pf-filter-btn${active === cat ? ' pf-filter-btn--active' : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
                {cat !== 'All' && (
                  <span className="pf-filter-count">
                    {WORKS.filter(w => w.category === cat).length}
                  </span>
                )}
              </button>
            ))}
            <span className="pf-filter-showing">
              {filtered.length} {filtered.length === 1 ? 'work' : 'works'}
            </span>
          </div>
        </div>
      </div>

      {/* ── Grid ── */}
      <section className="pf-grid-section">
        <div className="pf-container">
          <div className="pf-grid">
            {filtered.map((item) => (
              <div
                key={item.id}
                className={`pf-card${item.wide ? ' pf-card--wide' : ''} pf-reveal`}
              >
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="pf-card-video"
                />
                <div className="pf-card-overlay">
                  <span className="pf-card-cat">{item.category}</span>
                  <div className="pf-card-foot">
                    <span className="pf-card-label">{item.label}</span>
                    <span className="pf-card-arrow">↗</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="pf-cta-section">
        <div className="pf-container">
          <div className="pf-cta pf-reveal pf-static">
            <p className="pf-cta-eyebrow">Work with us</p>
            <h2 className="pf-cta-title">
              Your work could<br />live here.
            </h2>
            <a href={ctaLink} className="pf-cta-btn">
              Start the Conversation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
