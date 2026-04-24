import React from 'react';
import { Link } from 'react-router-dom';

export default function Work() {
  const cases = [
    {
      name: 'TechFlow - SaaS',
      metric: '5,000 YOUTUBE SUBS',
      desc: 'Zero online presence to 5,000 YouTube subscribers in 6 months. 40% increase in website traffic. Pipeline started coming in from content alone.',
      video: '/video-4.mp4',
      href: '/case-study',
    },
    {
      name: 'FashionFwd - E-commerce',
      metric: '3X ENGAGEMENT',
      desc: 'Dead Instagram to 3x engagement and 2x conversion rate in 90 days. Same product. Better content.',
      video: '/video-2.mp4',
      href: '/case-study',
    },
    {
      name: 'DataDash - SaaS',
      metric: '60% MORE DEMOS',
      desc: 'Visual rebrand, new landing pages, new brand identity. 60% more demo bookings. Their sales team stopped apologising for the website.',
      video: '/video-3.mp4',
      href: '/case-study',
    },
    {
      name: 'GrowthOps - B2B',
      metric: '$1.2M PIPELINE',
      desc: 'End-to-end content distribution system. Repurposed 10 core webinars into 150+ micro-assets. Generated $1.2M in qualified pipeline in Q3.',
      video: '/video-1.mp4',
      href: '/case-study',
    },
  ];

  return (
    <section className="work-section" id="work">
      <div className="work-inner">
        <div className="work-header">
          <h2 className="work-title" data-parallax="0.07">THE WORK</h2>
          <Link to="/case-study" className="work-eyebrow work-eyebrow-link">
            OUR RECENT CASE STUDIES
            <span className="eyebrow-arrow">-&gt;</span>
          </Link>
        </div>
        <div className="work-grid">
          {cases.map((c, i) => (
            <Link to={c.href} className="work-card work-card-link" key={i}>
              <div className="work-img-placeholder">
                <video src={c.video} autoPlay loop muted playsInline className="work-video" />
              </div>
              <p className="work-client">{c.name}</p>
              <p className="work-metric">{c.metric}</p>
              <p className="work-desc">{c.desc}</p>
              <span className="work-card-cta">View case study →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
