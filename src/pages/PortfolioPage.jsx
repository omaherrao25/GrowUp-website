import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { getCtaLink } from '../utils/ctaLink';

const CATEGORIES = ['All', 'Social Media', 'Video Production', 'Design', 'Branding'];

const WORKS = [
  { id: 1,  src: 'https://res.cloudinary.com/degjo7mzp/video/upload/f_auto,q_auto,vc_auto/v1777457277/video/Rv01_pv1jcm.mp4',                                              category: 'Social Media',     label: 'Brand Story',     wide: true  },
  { id: 2,  src: 'https://res.cloudinary.com/degjo7mzp/video/upload/f_auto,q_auto,vc_auto/v1777457258/video/dt01_pgecmt.mp4',                                              category: 'Video Production', label: 'Product Film',    wide: false },
  { id: 3,  src: 'https://res.cloudinary.com/degjo7mzp/video/upload/f_auto,q_auto,vc_auto/v1777457256/video/en02_jbzvjq.mp4',                                              category: 'Social Media',     label: 'Creator Content', wide: false },
  { id: 4,  src: 'https://res.cloudinary.com/degjo7mzp/video/upload/f_auto,q_auto,vc_auto/v1777457275/video/Gr3_eaqz0a.mp4',                                               category: 'Social Media',     label: 'Short-Form',      wide: false },
  { id: 6,  src: 'https://res.cloudinary.com/degjo7mzp/video/upload/f_auto,q_auto,vc_auto/v1777457265/video/Motion_Design_Reel_gsbkvj.mp4',                                category: 'Design',           label: 'Motion Reel',     wide: false },
  { id: 7,  src: 'https://res.cloudinary.com/degjo7mzp/video/upload/f_auto,q_auto,vc_auto/v1777457616/A_Boring_Morning_but_Cinematic_-_Sony_ZV-E10_vybxqr.mp4',     category: 'Video Production', label: 'Cinematic',       wide: false },
  { id: 8,  src: 'https://res.cloudinary.com/degjo7mzp/video/upload/f_auto,q_auto,vc_auto/v1777467147/Tc01_dlydtm.mp4',                                              category: 'Video Production', label: 'Commercial',      wide: true  },
  { id: 9,  src: 'https://res.cloudinary.com/degjo7mzp/video/upload/f_auto,q_auto,vc_auto/v1777457266/video/timus01_dal0gv.mp4',                                           category: 'Branding',         label: 'Brand Identity',  wide: false },
  { id: 10, src: 'https://res.cloudinary.com/degjo7mzp/video/upload/f_auto,q_auto,vc_auto/v1777457260/video/tl02_opltpf.mp4',                                              category: 'Social Media',     label: 'Campaign',        wide: false },
  { id: 11, src: 'https://res.cloudinary.com/degjo7mzp/video/upload/f_auto,q_auto,vc_auto/v1777457266/video/uu01_zwkvlp.mp4',                                              category: 'Branding',         label: 'Product Launch',  wide: false },
  { id: 12, src: 'https://res.cloudinary.com/degjo7mzp/video/upload/f_auto,q_auto,vc_auto/v1777467131/uu02_lr7vgl.mp4',                                              category: 'Design',           label: 'Visual Identity', wide: false },
  { id: 13, src: 'https://res.cloudinary.com/degjo7mzp/video/upload/f_auto,q_auto,vc_auto/v1777457277/video/uu03_qrt9sn.mp4',                                              category: 'Video Production', label: 'Story Series',    wide: false },
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

  /* Video performance: IntersectionObserver for lazy load & play/pause */
  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        const source = video.querySelector('source');

        if (entry.isIntersecting) {
          if (source && source.dataset.src && !video.src) {
            video.src = source.dataset.src;
            video.load();
          }
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    };

    const obs = new IntersectionObserver(handleIntersection, { threshold: 0.05, rootMargin: '100px' });
    const vids = document.querySelectorAll('.pf-card-video');
    vids.forEach(v => obs.observe(v));

    return () => obs.disconnect();
  }, [active, filtered]); // Re-observe when filter changes

  return (
    <>
      <Helmet>
        <title>Portfolio — Creative Work by Grow Up Media</title>
        <meta name="description" content="Browse Grow Up Media's portfolio — social media campaigns, cinematic video production, brand identity, and design across 13+ projects." />
        <link rel="canonical" href="https://growupmedia.in/portfolio" />
      </Helmet>
    <main className="pf-page">
      {/* ... previous code remains same ... */}
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
                  className="pf-card-video"
                  loop
                  muted
                  playsInline
                  preload="none"
                  controlsList="nodownload nofullscreen noremoteplayback"
                  disablePictureInPicture
                  onContextMenu={(e) => e.preventDefault()}
                  poster={item.src.replace(/\/upload\/.*?\/(v\d+)/, '/upload/so_auto/$1').replace('.mp4', '.jpg')}
                >
                  <source data-src={item.src} type="video/mp4" />
                </video>
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
      {/* ... previous code remains same ... */}

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
    </>
  );
}
