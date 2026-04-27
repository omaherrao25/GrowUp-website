import React from 'react';

export default function Distribution() {
  return (
    <section className="dist-section">
      <div className="dist-inner text-heavy">
        <h2 className="dist-title">THE DISTRIBUTION ENGINE</h2>
        <p className="dist-sub">
          Making content is half the job.<br/>
          Getting it seen is the other half. Most agencies skip this part.<br/><br/>
          We don't just create — we distribute. Every piece of content we make gets pushed through a structured online distribution system built around your audience and your goals.
        </p>
        
        <div className="dist-diagram">
          <div className="dist-main-box">
            YOUR LONGFORM VIDEO
          </div>
          <div className="dist-arrow">→</div>
          <div className="dist-platforms">
            <div className="platform-box">YOUTUBE</div>
            <div className="platform-box">INSTAGRAM & TIKTOK</div>
            <div className="platform-box">LINKEDIN</div>
            <div className="platform-box">YOUR WEBSITE</div>
          </div>
        </div>

        <div className="dist-details" style={{textAlign: 'left', marginTop: '4rem', color: '#ccc'}}>
          <h3 style={{color: '#fff', marginBottom: '1rem'}}>Your Content Across Every Channel That Matters:</h3>
          <p><strong>YouTube</strong> — Long-form authority content that compounds over time. One video can bring in leads for years.</p>
          <p><strong>Instagram & TikTok</strong> — Short-form content that puts your brand in front of cold audiences daily. The algorithm is free real estate. We use it.</p>
          <p><strong>LinkedIn</strong> — LinkedIn delivers the best B2B content marketing value according to 84% of B2B marketers. Your founders and your brand need a voice here. We build it.</p>
          <p><strong>Your Website</strong> — Every piece of content connects back to your home base. Traffic. Trust. Conversion.</p>
          <br/>
          <p style={{color: '#fff'}}><strong>The result:</strong> One idea becomes a YouTube video, three LinkedIn posts, eight Instagram reels, a website update, and a dozen short clips. One piece of content repurposed and redistributed across multiple platforms — that's how you maintain a presence everywhere without burning out your team.</p>
        </div>
      </div>
    </section>
  );
}
