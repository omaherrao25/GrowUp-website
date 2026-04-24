import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    id: 1,
    client: 'FintechFlow',
    category: 'Brand Positioning & Social Growth',
    title: 'From generic software to category leader in 6 months.',
    problem: 'Despite a superior product, FintechFlow was drowning in a sea of corporate sameness. Their social presence was lifeless and failed to capture the attention of their core demographic.',
    solution: 'We pivoted their entire narrative. Instead of talking about features, we built a content engine around financial literacy and lifestyle, launching a creator-led series with bold aesthetics.',
    metrics: [
      { label: 'Follower Growth', value: '450K+' },
      { label: 'Engagement Rate', value: '8.4%' },
      { label: 'CAC Reduction', value: '-42%' },
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000',
    layout: 'left',
  },
  {
    id: 2,
    client: 'Aura Skincare',
    category: 'E-commerce & Performance Creative',
    title: 'Scaling D2C revenue with authentic creator-driven creative.',
    problem: 'Aura was struggling with rising ad costs and creative fatigue. Their highly polished studio ads were being ignored by an audience craving authenticity.',
    solution: 'We deployed a high-volume UGC strategy combined with dynamic performance testing. We sourced 50+ micro-creators to produce raw, native-feeling content that seamlessly blended into the feed.',
    metrics: [
      { label: 'ROAS', value: '4.2x' },
      { label: 'Revenue Generated', value: '$2.1M' },
      { label: 'Creative Testing', value: '120+' },
    ],
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=2000',
    layout: 'right',
  }
];

export default function CaseStudyPage() {
  useEffect(() => {
    // Scroll reveal logic
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

    document.querySelectorAll('.premium-reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="premium-cs-page">
      <div className="premium-cs-container">
        
        {/* Header */}
        <header className="premium-cs-header">
          <div className="premium-reveal" style={{ transitionDelay: '0s' }}>
            <span className="premium-cs-kicker">Selected Works</span>
          </div>
          <div className="premium-reveal" style={{ transitionDelay: '0.1s' }}>
            <h1 className="premium-cs-title">
              We don't just chase metrics.<br />
              <span className="premium-cs-title-sub">We engineer growth.</span>
            </h1>
          </div>
        </header>

        {/* Case Studies List */}
        <div className="premium-cs-list">
          {caseStudies.map((study) => (
            <article key={study.id} className={`premium-cs-card layout-${study.layout}`}>
              
              {/* Media Section */}
              <div className="premium-cs-media-wrap">
                <div className="premium-reveal media-reveal-wrap" style={{ transitionDelay: '0.2s' }}>
                  <div className="premium-cs-media-inner">
                    <img src={study.image} alt={study.client} className="premium-cs-img" />
                    
                    {/* Hover Reveal Metric */}
                    <div className="premium-cs-hover-metric">
                      <div className="premium-cs-hover-metric-inner">
                        <div className="metric-text-wrap">
                          <span className="metric-label">Key Result</span>
                          <span className="metric-val">{study.metrics[0].value}</span>
                        </div>
                        <div className="metric-icon">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative Blob */}
                <div className={`premium-cs-blob blob-${study.layout}`}></div>
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
            <Link to="/contact" className="cs-cta-btn group">
              Start the Conversation
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cs-cta-icon">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}

