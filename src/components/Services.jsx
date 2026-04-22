import React from "react";

export default function Services() {
  const services = [
    {
      num: "(01)",
      title: "SOCIAL MEDIA MARKETING",
      desc: "Your audience is on Instagram, LinkedIn, YouTube and TikTok right now. They're watching someone. It should be you.",
      bullets: [
        "Content calendars & strategy",
        "Channel management",
        "Community growth",
        "Platform campaigns",
      ],
      video: "/video-1.mp4",
    },
    {
      num: "(02)",
      title: "VIDEO PRODUCTION",
      desc: "Script to screen. Concept to final cut. We handle the entire production pipeline.",
      bullets: [
        "Scripting & ideation",
        "Shooting & directing",
        "Editing, sound & delivery",
        "Short & long form",
      ],
      video: "/video-2.mp4",
    },
    {
      num: "(03)",
      title: "DESIGN",
      desc: "First impressions happen in 50 milliseconds. Your visuals need to look like they were made with intention.",
      bullets: [
        "Brand identity & assets",
        "Thumbnails & social graphics",
        "Pitch decks",
        "Landing page design",
      ],
      video: "/video-3.mp4",
    },
    {
      num: "(04)",
      title: "WEBSITE",
      desc: "75% of consumers judge credibility from your website. It's either selling for you — or silently losing you business.",
      bullets: [
        "Web design & development",
        "Conversion optimisation",
        "SEO-ready architecture",
        "Performance & speed",
      ],
      video: "/video-4.mp4",
    },
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-inner">
        <div className="services-header-wrapper">
          <h2 className="services-header">WHAT WE DO.</h2>
          <p className="services-sub">Four things. One team. Zero excuses.</p>
        </div>
        <div className="services-list">
          {services.map((svc, idx) => (
            <div className="svc-item" key={idx}>
              <div className="svc-top-row">
                <span className="svc-num">{svc.num}</span>
                <div className="svc-thumb">
                  <video
                    src={svc.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="svc-thumb-video"
                  />
                </div>
                <h3 className="svc-title">{svc.title}</h3>
              </div>
              <div className="svc-expand">
                <div className="svc-expand-inner">
                  <p className="svc-desc">{svc.desc}</p>
                  <ul className="svc-bullets">
                    {svc.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
