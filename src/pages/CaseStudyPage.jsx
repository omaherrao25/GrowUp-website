import React, { useEffect, useState } from 'react';
import { getCtaLink } from '../utils/ctaLink';

const STUDIES = [
  {
    id: 'fintechflow',
    client: 'FintechFlow',
    category: 'SaaS · Brand Positioning',
    title: 'From invisible startup to category authority in under six months.',
    video: '/video/Rv01.mp4',
    context: [
      'Strong product with zero organic presence and no consistent brand narrative',
      'Entirely dependent on paid acquisition with steadily rising cost per lead',
      'No voice established on LinkedIn, YouTube, or short-form social channels',
    ],
    approach: [
      'Built a founder-led content strategy anchored in financial education',
      'Produced a weekly short-form video series with bold, editorial aesthetics',
      'Established a structured cross-platform publishing cadence targeting decision-makers',
    ],
    outcome: [
      'Organic content became the primary driver of qualified inbound leads',
      'Paid ad spend dependency dropped significantly within the first quarter',
      'Brand now recognized as a category authority within its core target segment',
    ],
  },
  {
    id: 'aura',
    client: 'Aura Skincare',
    category: 'D2C · E-commerce',
    title: 'Authentic creative at scale for a brand craving real connection.',
    video: '/video/dt01.mp4',
    context: [
      'Rising ad costs and severe creative fatigue across all paid channels',
      'Polished studio content failing to resonate with a younger, authenticity-first audience',
      'Inconsistent brand voice across Instagram, TikTok, and YouTube',
    ],
    approach: [
      'Deployed a high-volume UGC content engine built on a network of micro-creators',
      'Developed raw, native-feeling creative designed to blend seamlessly into the feed',
      'Ran systematic creative testing across a large pool of variations every month',
    ],
    outcome: [
      'Paid channel performance improved substantially across all key metrics',
      'Creative fatigue eliminated through a continuously refreshed content pipeline',
      'Brand community grew organically alongside paid performance',
    ],
  },
];

export default function CaseStudyPage() {
  const [ctaLink, setCtaLink] = useState('tel:+917821092963');

  useEffect(() => {
    setCtaLink(getCtaLink());
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('cs-visible')),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.cs-reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="cs-page">

      {/* Hero — dark */}
      <section className="cs-band cs-band--dark cs-band--hero">
        <div className="cs-container">
          <div className="cs-hero cs-reveal">
            <p className="cs-eyebrow">Our Work</p>
            <h1 className="cs-hero-title">Case Studies</h1>
            <p className="cs-hero-sub">
              Strategies built around outcomes. Stories told through growth.
            </p>
          </div>
        </div>
      </section>

      {/* Studies — alternating light / dark */}
      {STUDIES.map((study, idx) => (
        <section
          key={study.id}
          className={`cs-band ${idx % 2 === 0 ? 'cs-band--light' : 'cs-band--dark'}`}
        >
          <div className="cs-container">
            <article className={`cs-study${idx % 2 !== 0 ? ' cs-study--reverse' : ''}`}>

              <div className="cs-study-visual cs-reveal">
                <div className="cs-video-frame">
                  <video src={study.video} autoPlay loop muted playsInline className="cs-video" />
                  <div className="cs-video-tint" />
                </div>
              </div>

              <div className="cs-study-content">
                <div className="cs-reveal" style={{ transitionDelay: '0.08s' }}>
                  <div className="cs-tags">
                    <span className="cs-tag">{study.client}</span>
                    <span className="cs-tag cs-tag--dim">{study.category}</span>
                  </div>
                </div>

                <div className="cs-reveal" style={{ transitionDelay: '0.16s' }}>
                  <h2 className="cs-study-title">{study.title}</h2>
                </div>

                <div className="cs-blocks cs-reveal" style={{ transitionDelay: '0.24s' }}>
                  <div className="cs-block">
                    <p className="cs-block-label">The Context</p>
                    <ul className="cs-bullets">
                      {study.context.map((pt, i) => <li key={i}>{pt}</li>)}
                    </ul>
                  </div>
                  <div className="cs-block">
                    <p className="cs-block-label">Our Approach</p>
                    <ul className="cs-bullets">
                      {study.approach.map((pt, i) => <li key={i}>{pt}</li>)}
                    </ul>
                  </div>
                  <div className="cs-block">
                    <p className="cs-block-label">The Outcome</p>
                    <ul className="cs-bullets">
                      {study.outcome.map((pt, i) => <li key={i}>{pt}</li>)}
                    </ul>
                  </div>
                </div>
              </div>

            </article>
          </div>
        </section>
      ))}

      {/* CTA — light */}
      <section className="cs-band cs-band--light cs-band--cta">
        <div className="cs-container">
          <div className="cs-cta cs-reveal">
            <p className="cs-eyebrow">Ready?</p>
            <h2 className="cs-cta-title">Let's build yours next.</h2>
            <a href={ctaLink} className="cs-cta-btn">
              Start the Conversation
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
