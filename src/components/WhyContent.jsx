import React from 'react';

export default function WhyContent() {
  const points = [
    {
      num: '01',
      title: 'INVISIBLE TO UNDENIABLE',
      desc: 'If you\'re not posting, you don\'t exist. Content is how you occupy space in your prospect\'s mind before you even hop on a call.'
    },
    {
      num: '02',
      title: 'COMPOUNDING TRUST',
      desc: 'Every video, post, and case study is a brick in your wall of authority. Trust used to take years; now it takes 15 minutes of binge-watching.'
    },
    {
      num: '03',
      title: 'THE INBOUND ENGINE',
      desc: 'Stop chasing leads. Build an ecosystem that attracts them. Good content qualifies your leads so you only talk to people who already want to work with you.'
    }
  ];

  return (
    <section className="why-content-section">
      <div className="why-inner">
        <div className="why-header">
          <p className="work-eyebrow">THE CONTENT EDGE</p>
          <h2 className="work-title">WHY CONTENT MATTERS</h2>
        </div>
        
        <div className="why-grid-modern">
          {points.map((pt, i) => (
            <div className="why-card-modern" key={i}>
              <span className="why-num-modern">{pt.num}</span>
              <h3 className="why-title-modern">{pt.title}</h3>
              <p className="why-desc-modern">{pt.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
