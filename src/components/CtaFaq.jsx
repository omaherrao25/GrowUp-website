import React from 'react';

const CLIENT_COUNTRIES = ['India', 'USA', 'UK', 'Australia', 'UAE', 'Canada'];

/* Percentage positions on the world_map.jpg (Mercator projection) */
const MARKERS = [
  { id: 'Canada',    top: '21%', left: '23%', label: 'Canada'    },
  { id: 'USA',       top: '33%', left: '21%', label: 'USA'        },
  { id: 'UK',        top: '24%', left: '48%', label: 'UK'         },
  { id: 'UAE',       top: '39%', left: '63%', label: 'UAE'        },
  { id: 'India',     top: '43%', left: '68%', label: 'India'      },
  { id: 'Australia', top: '65%', left: '81%', label: 'Australia'  },
];

export default function CtaFaq() {
  return (
    <section className="cta-faq-section" id="contact">
      <div className="cta-faq-inner">

        {/* Left: dark CTA panel */}
        <div className="cf-left">
          <p className="cf-eyebrow">Ready when you are</p>
          <h2 className="cf-title">YOUR MARKET<br />IS MOVING.</h2>
          <p className="cf-sub">
            Every week without consistent content is ground you're giving away.
            One call. Thirty minutes. We'll show you exactly what's missing and how we fix it.
          </p>
          <div className="cf-cta-group">
            <a href="#" className="gu-btn-hero">BOOK YOUR FREE CALL</a>
            <p className="cf-guarantee">No commitment. Just clarity.</p>
          </div>
        </div>

        {/* Right: world map */}
        <div className="cf-right">
          <div className="cf-map-card">

            <div className="cf-map-header">
              <p className="cf-map-eyebrow">Global reach</p>
              <h3 className="cf-map-title">Clients across<br />6 countries</h3>
            </div>

            {/* Map image + country markers */}
            <div className="cf-map-wrap">
              <img
                src="/world_map.jpg"
                alt="World map showing client countries"
                className="cf-map-img"
              />
              {MARKERS.map(({ id, top, left, label }, i) => (
                <div
                  key={id}
                  className="cf-map-pin"
                  style={{ top, left, animationDelay: `${i * 0.45}s` }}
                  aria-label={label}
                >
                  <span className="cf-map-pin-ring" />
                  <span className="cf-map-pin-dot" />
                  <span className="cf-map-pin-label">{label}</span>
                </div>
              ))}
            </div>

            <div className="cf-map-tags">
              {CLIENT_COUNTRIES.map(c => (
                <span className="cf-map-tag" key={c}>{c}</span>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
