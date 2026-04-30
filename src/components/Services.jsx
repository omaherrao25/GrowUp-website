import React, { useEffect, useRef } from "react";

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        const source = video.querySelector('source');

        if (entry.isIntersecting) {
          if (source && source.dataset.src && !video.src) {
            video.src = source.dataset.src;
            video.load();
          }
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.05, rootMargin: '100px' });
    const videoElements = containerRef.current?.querySelectorAll('.svc-thumb-video');
    
    videoElements?.forEach((vid) => observer.observe(vid));

    return () => observer.disconnect();
  }, []);

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
      video: "https://res.cloudinary.com/degjo7mzp/video/upload/f_auto,q_auto,vc_auto/v1777457260/video/tl02_opltpf.mp4",  
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
      video: "https://res.cloudinary.com/degjo7mzp/video/upload/f_auto,q_auto,vc_auto/v1777457616/A_Boring_Morning_but_Cinematic_-_Sony_ZV-E10_vybxqr.mp4",
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
      video: "https://res.cloudinary.com/degjo7mzp/video/upload/f_auto,q_auto,vc_auto/v1777457265/video/Motion_Design_Reel_gsbkvj.mp4",
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
      video: "https://res.cloudinary.com/degjo7mzp/video/upload/f_auto,q_auto,vc_auto/v1777457256/video/en02_jbzvjq.mp4",
      videoPos: "center center",
    },
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-inner" ref={containerRef}>
        <div className="services-header-wrapper">
          <h2 className="services-header">WHAT WE DO.</h2>
          <p className="services-sub">Four things. One team. Zero excuses.</p>
        </div>
        <div className="services-list">
          {services.map((svc, idx) => (
            <div className="svc-item" key={idx}>
              <div className="svc-top-row">
                <span className="svc-num">{svc.num}</span>
                {svc.video && (
                  <div className="svc-thumb">
                    <video
                      className="svc-thumb-video"
                      loop
                      muted
                      playsInline
                      preload="none"
                      poster={svc.video.replace(/\/upload\/.*?\/(v\d+)/, '/upload/so_auto/$1').replace('.mp4', '.jpg')}
                    >
                      <source data-src={svc.video} type="video/mp4" />
                    </video>
                  </div>
                )}
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
