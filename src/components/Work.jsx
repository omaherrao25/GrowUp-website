import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function WorkCard({ c }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  const [showBtn, setShowBtn] = useState(false);

  const togglePlay = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const vid = videoRef.current;
    if (!vid) return;
    if (vid.paused) {
      vid.play();
      setPlaying(true);
    } else {
      vid.pause();
      setPlaying(false);
    }
    // flash the button then hide
    setShowBtn(true);
    setTimeout(() => setShowBtn(false), 1200);
  };

  return (
    <div className="work-card">
      {/* Video area — click toggles play/pause, no redirect */}
      <div
        className="work-img-placeholder"
        onClick={togglePlay}
        onMouseEnter={() => setShowBtn(true)}
        onMouseLeave={() => { if (playing) setShowBtn(false); }}
        style={{ position: 'relative', cursor: 'pointer' }}
      >
        <video
          ref={videoRef}
          src={c.video}
          autoPlay
          loop
          muted
          playsInline
          className="work-video"
        />
        {/* Play / Pause overlay button */}
        <div className={`work-play-btn ${showBtn || !playing ? 'visible' : ''}`}>
          {playing ? (
            /* Pause icon */
            <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
              <rect x="5" y="3" width="4" height="18" rx="1"/>
              <rect x="15" y="3" width="4" height="18" rx="1"/>
            </svg>
          ) : (
            /* Play icon */
            <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
              <polygon points="5,3 19,12 5,21"/>
            </svg>
          )}
        </div>
      </div>

      {/* Text area — clicking navigates to case study */}
      <Link to={c.href} className="work-card-text-link">
        <p className="work-client">{c.name}</p>
        <p className="work-metric">{c.metric}</p>
        <p className="work-desc">{c.desc}</p>
        <span className="work-card-cta">
          View case study
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '6px' }}>
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </span>
      </Link>
    </div>
  );
}

export default function Work() {
  const cases = [
    {
      name: 'TechFlow - SaaS',
      metric: '5,000 YOUTUBE SUBS',
      desc: 'Zero online presence to 5,000 YouTube subscribers in 6 months. 40% increase in website traffic. Pipeline started coming in from content alone.',
      video: '/video/Rv01.mp4',
      href: '/case-study',
    },
    {
      name: 'FashionFwd - E-commerce',
      metric: '3X ENGAGEMENT',
      desc: 'Dead Instagram to 3x engagement and 2x conversion rate in 90 days. Same product. Better content.',
      video: '/video/dt01.mp4',
      href: '/case-study',
    },
    {
      name: 'DataDash - SaaS',
      metric: '60% MORE DEMOS',
      desc: 'Visual rebrand, new landing pages, new brand identity. 60% more demo bookings. Their sales team stopped apologising for the website.',
      video: '/video/en02.mp4',
      href: '/case-study',
    },
    {
      name: 'GrowthOps - B2B',
      metric: '$1.2M PIPELINE',
      desc: 'End-to-end content distribution system. Repurposed 10 core webinars into 150+ micro-assets. Generated $1.2M in qualified pipeline in Q3.',
      video: '/video/Gr3.mp4',
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
            <span className="eyebrow-arrow">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </span>
          </Link>
        </div>
        <div className="work-grid">
          {cases.map((c, i) => (
            <WorkCard key={i} c={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
