import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCtaLink } from '../utils/ctaLink';

export default function Creative() {
  const [ctaLink, setCtaLink] = useState('tel:+917821092963');

  useEffect(() => {
    setCtaLink(getCtaLink());
  }, []);

  return (
    <section className="creative-section">
      <div className="creative-inner">
        <p className="section-eyebrow reveal">Our Edge</p>
        <h2 className="creative-title reveal">Creative Excellence</h2>
        <p className="creative-sub reveal">Fazinflo Combines creativity with systems to deliver<br />top-tier content at scale with any overheads.</p>
        <a href={ctaLink} className="btn-primary-blue reveal" id="creative-cta">GET STARTED TODAY</a>
      </div>
    </section>
  );
}
