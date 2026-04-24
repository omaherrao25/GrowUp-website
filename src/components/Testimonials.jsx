import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Our team stopped worrying about content and started shipping features. That trade-off was worth it 10 times over.",
      author: "Priya Shah",
      role: "Founder, CloudNote",
      theme: "light"
    },
    {
      quote: "Every single month. On time. No follow-ups. That reliability alone is the product.",
      author: "Marcus Lee",
      role: "CEO, ShopFlow",
      theme: "dark"
    },
    {
      quote: "We own everything. We can pause anytime. This is how agencies should work — most don't.",
      author: "Sarah Kim",
      role: "CMO, DataRig",
      theme: "light"
    }
  ];

  return (
    <section className="test-section" id="testimonials">
      <div className="test-inner">
        <div className="test-header">
          <div>
            <p className="test-header-label">What clients say</p>
            <h2 className="test-header-title">Don't take<br />our word for it.</h2>
          </div>
          <p className="test-count">{testimonials.length} reviews</p>
        </div>
        <div className="test-grid">
          {testimonials.map((t, i) => (
            <div className={`test-card t-${t.theme}`} key={i}>
              <p className="test-quote">{t.quote}</p>
              <div className="test-author">
                <h4>{t.author}</h4>
                <p>{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
