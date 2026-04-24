import React from 'react';
import { Link } from 'react-router-dom';

export default function Creative() {
  return (
    <section className="creative-section" id="creative">
      <div className="creative-inner">
        <div className="creative-glow"></div>
        <p className="section-eyebrow reveal">Our Edge</p>
        <h2 className="creative-title reveal">Creative Excellence</h2>
        <p className="creative-sub reveal">Fazinflo Combines creativity with systems to deliver<br />top-tier content at scale with any overheads.</p>
        <Link to="/#contact" className="btn-primary-blue reveal" id="creative-cta">Get started today</Link>
      </div>
    </section>
  );
}
