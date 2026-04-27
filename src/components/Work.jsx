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
      name: 'TIMUS — Product Brand',
      metric: '1M+ VIEWS PER REEL',
      desc: 'Global luggage brand with no social presence. We rebuilt their visual identity for short-form audiences and produced cinematic reels that turned casual viewers into loyal customers.',
      video: '/video/timus01.mp4',
      href: '/case-study',
    },
    {
      name: 'Usha Infotech — Tech & B2B',
      metric: 'B2B LEADS FROM REELS',
      desc: 'A solid IT company invisible on social. We repositioned the founder as a thought leader and built a content engine that educated, established trust, and converted simultaneously.',
      video: '/video/uu01.mp4',
      href: '/case-study',
    },
    {
      name: 'Rahul Jain — Real Estate',
      metric: 'INBOUND LEADS ONLY',
      desc: 'Real estate professional reliant on cold outreach. We built a recognisable personal brand through education-first content — buyers now arrive pre-sold.',
      video: '/video/gr3.mp4',
      href: '/case-study',
    },
    {
      name: 'EUNORA Physiotherapy — Healthcare',
      metric: 'BOOKINGS UP EVERY MONTH',
      desc: 'A physiotherapy clinic with zero online visibility. We built an education-first content strategy that made them the most visible physio brand in the city.',
      video: '/video/en02.mp4',
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
