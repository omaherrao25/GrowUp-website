import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCtaLink } from '../utils/ctaLink';

const STUDIES = [
  {
    id: 'techflow',
    client: 'TechFlow',
    category: 'SaaS / B2B',
    title: 'Zero to 5,000 subscribers in 6 months.',
    problem: 'Despite a solid product, TechFlow had zero organic presence. They were spending $15k/mo on LinkedIn ads with diminishing returns.',
    solution: 'We implemented a "Founder-First" content strategy, turning their CEO into a thought leader through high-impact short-form videos and a weekly newsletter.',
    metrics: [
      { label: 'Subscribers', value: '5,000+' },
      { label: 'Ad Spend', value: '-40%' },
      { label: 'Pipeline', value: '$850k' }
    ],
    video: '/video/Rv01.mp4'
  },
  {
    id: 'fashionfwd',
    client: 'FashionFwd',
    category: 'E-commerce',
    title: '3X Engagement with high-velocity content.',
    problem: 'FashionFwd was struggling with low conversion rates on Instagram. Their content felt "too corporate" and wasn\'t resonating with Gen Z.',
    solution: 'We shifted to raw, community-driven content. We built a network of 50+ micro-influencers and produced 300+ assets in 90 days.',
    metrics: [
      { label: 'Engagement', value: '310%' },
      { label: 'ROAS', value: '4.5x' },
      { label: 'Revenue', value: '+120%' }
    ],
    video: '/video/dt01.mp4'
  }
];

export default function CaseStudyPage() {
  const { id } = useParams();
  const [ctaLink, setCtaLink] = useState('tel:+917821092963');

  useEffect(() => {
    setCtaLink(getCtaLink());
  }, []);
  
  return (
    <main className="premium-cs-page">
      <div className="premium-cs-container">
        <header className="premium-cs-header">
          <div className="premium-reveal">
            <h1 className="cs-header-title">Impact over impressions.</h1>
            <p className="cs-header-sub">How we help ambitious brands dominate their category through content systems.</p>
          </div>
        </header>

        <div className="premium-cs-list">
          {STUDIES.map((study, idx) => (
            <article className="premium-cs-item" key={study.id}>
              {/* Video/Visual Section */}
              <div className="premium-cs-visual">
                <div className="premium-reveal">
                  <div className="cs-video-wrap">
                    <video 
                      src={study.video} 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      className="cs-main-video"
                    />
                    <div className="cs-video-overlay" />
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="premium-cs-content">
                <div className="premium-reveal" style={{ transitionDelay: '0.3s' }}>
                  <div className="premium-cs-tags">
                    <span className="cs-tag-client">{study.client}</span>
                    <span className="cs-tag-cat">{study.category}</span>
                  </div>
                </div>
                
                <div className="premium-reveal" style={{ transitionDelay: '0.4s' }}>
                  <h2 className="cs-content-title">{study.title}</h2>
                </div>

                <div className="premium-reveal" style={{ transitionDelay: '0.5s' }}>
                  <div className="cs-content-body">
                    <p>
                      <strong>The Problem</strong>
                      {study.problem}
                    </p>
                    <p>
                      <strong>The Strategy</strong>
                      {study.solution}
                    </p>
                  </div>
                </div>

                <div className="premium-reveal" style={{ transitionDelay: '0.6s' }}>
                  <div className="cs-metrics-grid">
                    {study.metrics.map((metric, i) => (
                      <div className="cs-metric-item" key={i}>
                        <div className="cs-metric-value">{metric.value}</div>
                        <div className="cs-metric-label">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="premium-cs-cta">
          <div className="premium-reveal">
            <div className="cs-cta-badge">
              <span>Ready to scale?</span>
            </div>
            <h2 className="cs-cta-title">Let's write your success story.</h2>
            <a href={ctaLink} className="cs-cta-btn group">
              START THE CONVERSATION
              <svg 
                width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
