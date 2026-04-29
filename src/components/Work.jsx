import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function WorkCard({ c }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [ended, setEnded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    const onTimeUpdate = () => {
      if (vid.duration) setProgress((vid.currentTime / vid.duration) * 100);
    };
    const onEnded = () => {
      setPlaying(false);
      setEnded(true);
    };

    vid.addEventListener('timeupdate', onTimeUpdate);
    vid.addEventListener('ended', onEnded);
    return () => {
      vid.removeEventListener('timeupdate', onTimeUpdate);
      vid.removeEventListener('ended', onEnded);
    };
  }, []);

  const handleVideoClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const vid = videoRef.current;
    if (!vid) return;
    if (ended) {
      vid.currentTime = 0;
      vid.play();
      setEnded(false);
      setPlaying(true);
    } else if (vid.paused) {
      vid.play();
      setPlaying(true);
    } else {
      vid.pause();
      setPlaying(false);
    }
  };

  const toggleMute = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const vid = videoRef.current;
    if (!vid) return;
    vid.muted = !vid.muted;
    setMuted(vid.muted);
  };

  const handleSeek = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const vid = videoRef.current;
    if (!vid || !vid.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    vid.currentTime = ratio * vid.duration;
    setProgress(ratio * 100);
    if (ended && ratio < 1) {
      vid.play();
      setEnded(false);
      setPlaying(true);
    }
  };

  const showOverlay = hovered || !playing || ended;

  return (
    <div className="work-card">
      <div
        className="work-img-placeholder"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={handleVideoClick}
        style={{ position: 'relative', cursor: 'pointer' }}
      >
        <video
          ref={videoRef}
          src={c.video}
          autoPlay
          muted
          playsInline
          className="work-video"
        />

        {/* Center play / pause / replay button */}
        <div className={`work-play-btn ${showOverlay ? 'visible' : ''}`}>
          {ended ? (
            /* Replay icon */
            <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
              <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/>
            </svg>
          ) : playing ? (
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

        {/* Bottom controls: timeline + mute */}
        <div
          className={`work-controls ${showOverlay ? 'visible' : ''}`}
          onClick={e => e.stopPropagation()}
        >
          <div className="work-timeline" onClick={handleSeek}>
            <div className="work-progress" style={{ width: `${progress}%` }} />
          </div>
          <button
            className="work-mute-btn"
            onClick={toggleMute}
            aria-label={muted ? 'Unmute' : 'Mute'}
          >
            {muted ? (
              /* Volume off */
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
              </svg>
            ) : (
              /* Volume up */
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
              </svg>
            )}
          </button>
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
