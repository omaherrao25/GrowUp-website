import React, { useState, useEffect, useRef } from 'react';

// Card colors are fixed — always light, dark, light regardless of which group shows
const CARD_THEMES = ['light', 'dark', 'light'];

const groups = [
  [
    {
      quote: "Grow Up Services brought a fresh perspective to our digital presence. Their strategic approach and execution were seamless and result-driven. A reliable partner for any business looking to scale smartly.",
      author: "Ekta Agarawal",
      role: "Co-founder – Usha Infotech",
    },
    {
      quote: "Grow Up Creativity truly understands brand storytelling. Their creative direction helped us stand out in a crowded market. The team delivers ideas that actually convert into growth.",
      author: "Aditya Raj Jaju",
      role: "Founder – Kosh Craft",
    },
    {
      quote: "Working with Grow Up was a smooth and rewarding experience. They captured our brand essence perfectly through their work. Highly recommend them for creative and consistent output.",
      author: "Disha Shah",
      role: "Niya's Creation",
    },
  ],
  [
    {
      quote: "Grow Up helped us elevate our brand visibility effortlessly. Their content and strategy alignment is top-notch. Great team to work with for long-term growth.",
      author: "Sumit Tiwari",
      role: "Founder – Timus",
    },
    {
      quote: "Professional, creative, and highly responsive team. Grow Up understood our market and delivered accordingly. Their work added real value to our brand presence.",
      author: "Rahul Jain",
      role: "Grace Realty",
    },
    {
      quote: "Grow Up added a unique creative touch to our brand. Their ideas were fresh, engaging, and impactful. A great partner for brands looking to grow digitally.",
      author: "Sunaya Madan",
      role: "Chocoyum",
    },
  ],
];

const INTERVAL_MS = 6000;
const FADE_MS = 500;

export default function Testimonials() {
  const [activeGroup, setActiveGroup] = useState(0);
  const [visible, setVisible] = useState(true);
  const timerRef = useRef(null);

  const goTo = (index) => {
    if (index === activeGroup) return;
    setVisible(false);
    setTimeout(() => {
      setActiveGroup(index);
      setVisible(true);
    }, FADE_MS);
  };

  const resetTimer = (index) => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setActiveGroup(i => (i + 1) % groups.length);
        setVisible(true);
      }, FADE_MS);
    }, INTERVAL_MS);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setActiveGroup(i => (i + 1) % groups.length);
        setVisible(true);
      }, FADE_MS);
    }, INTERVAL_MS);
    return () => clearInterval(timerRef.current);
  }, []);

  const handleDotClick = (i) => {
    goTo(i);
    resetTimer(i);
  };

  return (
    <section className="test-section" id="testimonials">
      <div className="test-inner">

        <div className="test-header">
          <div>
            <p className="test-header-label">What clients say</p>
            <h2 className="test-header-title">Don't take<br />our word for it.</h2>
          </div>
          <div className="test-dots">
            {groups.map((_, i) => (
              <button
                key={i}
                className={`test-dot${activeGroup === i ? ' active' : ''}`}
                onClick={() => handleDotClick(i)}
                aria-label={`Show testimonials group ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="test-grid">
          {groups[activeGroup].map((t, i) => (
            <div className={`test-card t-${CARD_THEMES[i]}`} key={i}>
              <div
                style={{
                  opacity: visible ? 1 : 0,
                  transition: `opacity ${FADE_MS}ms ease`,
                }}
              >
                <p className="test-quote">{t.quote}</p>
                <div className="test-author">
                  <h4>{t.author}</h4>
                  <p>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
