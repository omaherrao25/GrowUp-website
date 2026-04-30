import React, { useEffect, useState } from 'react';
import { getCtaLink } from '../utils/ctaLink';

const STUDIES = [
  {
    id: 'timus',
    client: 'TIMUS',
    category: 'Product Brand',
    title: 'Global luggage brand. Rebuilt their visual identity on social.',
    video: 'https://res.cloudinary.com/degjo7mzp/video/upload/f_auto,q_auto,vc_auto/v1777457266/video/timus01_dal0gv.mp4',
    context: [
      'A global luggage brand with strong products but no consistent social presence',
      'No visual language or content strategy built for short-form audiences',
      'Missing the storytelling that turns casual viewers into loyal customers',
    ],
    approach: [
      'Rebuilt their visual identity from the ground up for a social-first audience',
      'Developed cinematic hooks centred around travel storytelling and lifestyle',
      'Produced fully edited reels engineered to stop the scroll and hold attention',
    ],
    outcome: [
      'Over a million views achieved per reel, consistently across every upload',
      'Multiple reels crossed the viral threshold within the first quarter',
      'Brand perception shifted — now recognised as a premium, global luggage name',
    ],
    quote: 'Every reel crossed a million views. Brand perception shifted overnight.',
  },
  {
    id: 'usha',
    client: 'Usha Infotech',
    category: 'Tech & B2B',
    title: 'IT company turned into a recognised personal brand.',
    video: 'https://res.cloudinary.com/degjo7mzp/video/upload/f_auto,q_auto,vc_auto/v1777457266/video/uu01_zwkvlp.mp4',
    context: [
      'A solid IT company completely invisible on social with no personal brand presence',
      'Decision-makers in their target market unaware of their services or expertise',
      'Generic content that failed to communicate value or generate any qualified leads',
    ],
    approach: [
      'Repositioned the founder as a thought leader through pain-point-driven hooks',
      'Created content specifically targeting B2B decision-makers on Reels and LinkedIn',
      'Built a content engine that educated, established trust, and converted simultaneously',
    ],
    outcome: [
      'Reel content reached over a million people within the first few months of posting',
      'Direct B2B conversions traced back to specific pieces of content published',
      'Lead quality improved significantly — only high-intent inquiries coming through',
    ],
    quote: 'We got actual business from reels. Grow Up proved us completely wrong.',
  },
  {
    id: 'rahul',
    client: 'Rahul Jain',
    category: 'Real Estate',
    title: 'From just another agent to a recognised local property expert.',
    video: 'https://res.cloudinary.com/degjo7mzp/video/upload/f_auto,q_auto,vc_auto/v1777457275/video/Gr3_eaqz0a.mp4',
    context: [
      'A real estate professional struggling to stand out in a trust-driven, crowded market',
      'Entirely dependent on referrals and cold outreach with no digital presence',
      'Buyers needed extensive trust-building before being willing to make contact',
    ],
    approach: [
      'Positioned Rahul as a market-insight expert through education-first short-form content',
      'Created hooks around genuine buyer pain points to attract pre-qualified audiences',
      'Built a recognisable personal brand centred on trust before any sales message',
    ],
    outcome: [
      'Multiple reels went viral, significantly expanding his local and regional reach',
      'Follower growth accelerated rapidly within weeks of the first content going live',
      'Inbound leads replaced outbound entirely — buyers now arrive pre-sold',
    ],
    quote: "Buyers come pre-sold. I haven't chased a lead since we started.",
  },
  {
    id: 'eunora',
    client: 'EUNORA Physiotherapy',
    category: 'Healthcare',
    title: 'Clinic turned into the most visible physio brand in the city.',
    video: 'https://res.cloudinary.com/degjo7mzp/video/upload/f_auto,q_auto,vc_auto/v1777457256/video/en02_jbzvjq.mp4',
    context: [
      'A physiotherapy clinic with expert practitioners but zero online visibility',
      'Relying entirely on word-of-mouth with no sustainable digital acquisition channel',
      'A highly competitive local market where trust and education are the key to bookings',
    ],
    approach: [
      'Built an education-first content strategy centred on patient pain points and recovery',
      'Produced health reels that demonstrated deep expertise and built lasting audience trust',
      'Established the clinic as the go-to local authority for physiotherapy content online',
    ],
    outcome: [
      'Health content went viral consistently within the local target community',
      'Booked appointments increased month over month driven entirely by content',
      'Ranked as the most visible physiotherapy brand locally within their service area',
    ],
    quote: 'Patients walk in quoting our videos. Grow Up grew our patient base.',
  },
];

export default function CaseStudyPage() {
  const [ctaLink, setCtaLink] = useState('tel:+917821092963');

  useEffect(() => {
    setCtaLink(getCtaLink());
  }, []);

  useEffect(() => {
    // Reveal animation observer
    const revealObserver = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('cs-visible')),
      { threshold: 0.08, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.cs-reveal').forEach(el => revealObserver.observe(el));

    // Video performance observer
    const videoObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
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
      },
      { threshold: 0.05, rootMargin: '100px' }
    );
    document.querySelectorAll('.cs-video').forEach(vid => videoObserver.observe(vid));

    return () => {
      revealObserver.disconnect();
      videoObserver.disconnect();
    };
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
              Real brands. Real results. Stories told through growth.
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
                  <video 
                    className="cs-video"
                    loop 
                    muted 
                    playsInline 
                    preload="none"
                    poster={study.video.replace(/\/upload\/.*?\/(v\d+)/, '/upload/so_auto/$1').replace('.mp4', '.jpg')}
                  >
                    <source data-src={study.video} type="video/mp4" />
                  </video>
                  <div className="cs-video-tint" />
                </div>
              </div>
      {/* ... previous content remains same ... */}

              <div className="cs-study-content">
                <div className="cs-reveal" style={{ transitionDelay: '0.08s' }}>
                  <div className="cs-tags">
                    <span className="cs-tag">{study.client}</span>
                    <span className="cs-tag cs-tag--dim">{study.category}</span>
                  </div>
                </div>

                <div className="cs-reveal" style={{ transitionDelay: '0.15s' }}>
                  <h2 className="cs-study-title">{study.title}</h2>
                </div>

                <div className="cs-blocks cs-reveal" style={{ transitionDelay: '0.22s' }}>
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

                <blockquote className="cs-quote cs-reveal" style={{ transitionDelay: '0.3s' }}>
                  "{study.quote}"
                </blockquote>
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
