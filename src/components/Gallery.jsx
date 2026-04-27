import React, { useRef, useState } from 'react';

export default function Gallery() {
  const trackRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="gallery-section" id="gallery">
      <p className="gallery-hint reveal">Scroll sideways to explore</p>
      <div
        className="gallery-track"
        id="gallery-track"
        ref={trackRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{ cursor: isDown ? 'grabbing' : 'grab' }}
      >
        <div className="gallery-card" style={{'--hue': 210}}>
          <div className="gc-thumb">
            <div className="gc-label">Social Media</div>
          </div>
          <p className="gc-cap">Brand Reels</p>
        </div>
        <div className="gallery-card" style={{'--hue': 220}}>
          <div className="gc-thumb">
            <div className="gc-label">Product</div>
          </div>
          <p className="gc-cap">Product Demos</p>
        </div>
        <div className="gallery-card" style={{'--hue': 200}}>
          <div className="gc-thumb">
            <div className="gc-label">Founder</div>
          </div>
          <p className="gc-cap">Founder Stories</p>
        </div>
        <div className="gallery-card" style={{'--hue': 215}}>
          <div className="gc-thumb">
            <div className="gc-label">UGC</div>
          </div>
          <p className="gc-cap">UGC Content</p>
        </div>
        <div className="gallery-card" style={{'--hue': 225}}>
          <div className="gc-thumb">
            <div className="gc-label">Ads</div>
          </div>
          <p className="gc-cap">Paid Ad Creatives</p>
        </div>
        <div className="gallery-card" style={{'--hue': 205}}>
          <div className="gc-thumb">
            <div className="gc-label">Short-Form</div>
          </div>
          <p className="gc-cap">TikTok / Reels</p>
        </div>
        <div className="gallery-card" style={{'--hue': 230}}>
          <div className="gc-thumb">
            <div className="gc-label">Long-Form</div>
          </div>
          <p className="gc-cap">YouTube Content</p>
        </div>
        <div className="gallery-card" style={{'--hue': 195}}>
          <div className="gc-thumb">
            <div className="gc-label">Testimonials</div>
          </div>
          <p className="gc-cap">Client Testimonials</p>
        </div>
      </div>
    </section>
  );
}
