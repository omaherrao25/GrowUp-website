import React from 'react';
import { Link } from 'react-router-dom';

export default function Value() {
  return (
    <section className="value-section" id="plans">
      <div className="value-inner">
        <p className="section-eyebrow reveal">The GrowwUp Difference</p>
        <h2 className="value-title reveal">Why limit content when you can<br />scale at volume with GrowwUp.</h2>
        <div className="value-actions reveal">
          <Link to="/#contact" className="btn-primary-blue" id="plans-cta">See our plans</Link>
          <Link to="/#services" className="btn-outline-white" id="plans-learn">Learn more</Link>
        </div>
        <div className="value-features">
          <div className="vf-item reveal">
            <div className="vf-icon">âš¡</div>
            <h3>48hr Turnaround</h3>
            <p>Get polished content delivered within 48 hours, every time.</p>
          </div>
          <div className="vf-item reveal">
            <div className="vf-icon">âˆž</div>
            <h3>Unlimited Revisions</h3>
            <p>We iterate until you love it â€” no extra charges, ever.</p>
          </div>
          <div className="vf-item reveal">
            <div className="vf-icon">â†‘</div>
            <h3>Scale On Demand</h3>
            <p>Ramp up or down instantly. No retainers. No contracts.</p>
          </div>
          <div className="vf-item reveal">
            <div className="vf-icon">â—ˆ</div>
            <h3>Platform Native</h3>
            <p>Content built specifically for TikTok, Reels, YouTube &amp; LinkedIn.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
