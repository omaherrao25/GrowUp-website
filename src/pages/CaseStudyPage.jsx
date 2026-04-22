import React from 'react';
import { Link } from 'react-router-dom';

const metrics = [
  { value: '5,000+', label: 'YouTube subscribers in 6 months' },
  { value: '40%', label: 'Increase in website traffic' },
  { value: '3.2x', label: 'More qualified inbound leads' },
];

const phases = [
  {
    title: 'Position the brand',
    text: 'We tightened the messaging, defined the content pillars, and built a sharper visual direction so every asset felt recognisable.',
  },
  {
    title: 'Publish with rhythm',
    text: 'Short-form clips, founder-led thought pieces, and conversion-aware long-form videos gave the audience a clear reason to keep returning.',
  },
  {
    title: 'Turn reach into demand',
    text: 'Every content stream pointed back to landing pages, demo CTAs, and proof-driven nurture assets that helped sales close faster.',
  },
];

const deliverables = [
  'Content strategy and topic architecture',
  'Video editing system for short and long-form content',
  'Landing page messaging refresh',
  'Creative direction for performance content',
  'Weekly analytics reviews and iteration loops',
];

export default function CaseStudyPage() {
  React.useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="cs-page">
      {/* Hero Section */}
      <section className="cs-hero">
        <div className="cs-hero-bg">
          <video
            src="/video-4.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="cs-hero-video"
          />
          <div className="cs-hero-overlay"></div>
        </div>
        
        <div className="cs-container">
          <div className="cs-hero-content reveal-on-scroll">
            <div className="cs-kicker-wrap">
              <span className="cs-kicker-line"></span>
              <p className="cs-kicker">Case Study / TechFlow SaaS</p>
            </div>
            <h1 className="cs-title">
              From zero online presence to a content engine that brought in real pipeline.
            </h1>
            <p className="cs-summary">
              TechFlow needed more than pretty posts. They needed a system that made the brand
              easier to trust, easier to remember, and easier to buy from. We rebuilt the content
              direction around authority, consistency, and conversion.
            </p>
            <div className="cs-hero-actions">
              <Link to="/services" className="cs-btn-primary">
                <span>Explore Services</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4.16663 10H15.8333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.8333 5L15.8333 10L10.8333 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link to="/" className="cs-link-back">Back to Home</Link>
            </div>
          </div>

          <div className="cs-hero-stats reveal-on-scroll">
            <div className="cs-floating-badge">
              <span className="cs-badge-dot"></span>
              <span>6 Month Sprint</span>
            </div>
            <div className="cs-metrics-grid">
              {metrics.map((metric, idx) => (
                <div className="cs-metric-card" key={metric.label} style={{'--delay': `${idx * 0.1}s`}}>
                  <h2 className="cs-metric-value">{metric.value}</h2>
                  <p className="cs-metric-label">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="cs-section cs-challenge-sec">
        <div className="cs-container">
          <div className="cs-grid cs-grid-2">
            <div className="reveal-on-scroll">
              <span className="cs-section-label">The challenge</span>
              <h2 className="cs-section-title">
                Their team had expertise, but the market could not see it.
              </h2>
            </div>
            <div className="cs-story-copy reveal-on-scroll">
              <p>
                Before the engagement, TechFlow had inconsistent posting, no clear narrative, and
                very little content that supported demos or sales conversations. Traffic was weak,
                brand recall was lower than competitors, and outreach felt colder than it should.
              </p>
              <p>
                We focused on building one connected system: sharper positioning, repeatable creative
                formats, and clear calls to action across every piece of content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Breakdown Section */}
      <section className="cs-section cs-breakdown-sec">
        <div className="cs-container">
          <div className="cs-breakdown-header reveal-on-scroll">
            <span className="cs-section-label">What we changed</span>
            <h2 className="cs-section-title">
              Strategy, production, and conversion were all treated as one funnel.
            </h2>
            <p className="cs-summary-tight">
              Instead of chasing isolated views, we designed content to create familiarity first,
              trust second, and action third.
            </p>
          </div>

          <div className="cs-phases-grid">
            {phases.map((phase, index) => (
              <div className="cs-phase-card reveal-on-scroll" key={phase.title}>
                <div className="cs-phase-content">
                  <h3>{phase.title}</h3>
                  <p>{phase.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="cs-section cs-results-sec">
        <div className="cs-container">
          <div className="cs-results-wrapper reveal-on-scroll">
            <div className="cs-quote-box">
              <span className="cs-section-label">Outcome</span>
              <blockquote className="cs-quote">
                "The content stopped feeling like marketing homework and started working like a sales
                asset."
              </blockquote>
              <div className="cs-quote-author">
                <span className="cs-author-line"></span>
                <p>Head of Growth, TechFlow</p>
              </div>
            </div>

            <div className="cs-deliverables-panel">
              <span className="cs-section-label">Delivered</span>
              <ul className="cs-deliverables-list">
                {deliverables.map((item, idx) => (
                  <li key={item} style={{'--delay': `${idx * 0.05}s`}}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cs-cta-sec reveal-on-scroll">
        <div className="cs-cta-glow"></div>
        <div className="cs-container">
          <div className="cs-cta-content">
            <span className="cs-section-label">Next move</span>
            <h2 className="cs-cta-title">
              Want this kind of clarity and consistency for your brand too?
            </h2>
            <div className="cs-cta-actions">
              <Link to="/services" className="cs-btn-primary">
                <span>See How We Work</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4.16663 10H15.8333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.8333 5L15.8333 10L10.8333 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link to="/" className="cs-link-back">View Homepage</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

