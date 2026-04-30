import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function SelectedWorks() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const takeoverY = useTransform(
    scrollYProgress,
    [0, 0.35, 0.72, 1],
    ['8vh', '2vh', '-4vh', '-10vh']
  );

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '100px',
      threshold: 0.1,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        const source = video.querySelector('source');

        if (entry.isIntersecting) {
          // Lazy load source
          if (source && source.dataset.src && !video.src) {
            video.src = source.dataset.src;
            video.load();
          }
          // Play when visible
          video.play().catch(() => {});
        } else {
          // Pause when not visible
          video.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    const videoElements = containerRef.current?.querySelectorAll('.sw-video');
    
    videoElements?.forEach((vid) => observer.observe(vid));

    return () => observer.disconnect();
  }, []);

  const videos = [
  'https://res.cloudinary.com/degjo7mzp/video/upload/f_auto,q_auto,vc_auto/v1777457277/video/Rv01_pv1jcm.mp4',
  'https://res.cloudinary.com/degjo7mzp/video/upload/f_auto,q_auto,vc_auto/v1777457258/video/dt01_pgecmt.mp4',
  'https://res.cloudinary.com/degjo7mzp/video/upload/f_auto,q_auto,vc_auto/v1777457260/video/tl02_opltpf.mp4',
  'https://res.cloudinary.com/degjo7mzp/video/upload/f_auto,q_auto,vc_auto/v1777457275/video/Gr3_eaqz0a.mp4',
  'https://res.cloudinary.com/degjo7mzp/video/upload/f_auto,q_auto,vc_auto/v1777467147/Tc01_dlydtm.mp4',
  'https://res.cloudinary.com/degjo7mzp/video/upload/f_auto,q_auto,vc_auto/v1777457266/video/timus01_dal0gv.mp4',
  'https://res.cloudinary.com/degjo7mzp/video/upload/f_auto,q_auto,vc_auto/v1777467131/uu02_lr7vgl.mp4',
  'https://res.cloudinary.com/degjo7mzp/video/upload/f_auto,q_auto,vc_auto/v1777457277/video/uu03_qrt9sn.mp4',
  'https://res.cloudinary.com/degjo7mzp/video/upload/f_auto,q_auto,vc_auto/v1777457266/video/uu01_zwkvlp.mp4'
];

  const logos = [
    { src: '/logo/1.png',                                    alt: 'Client 1'             },
    { src: '/logo/2.png',                                    alt: 'Client 2'             },
    { src: '/logo/Banjos Logo.png',                          alt: 'Banjos'               },
    { src: '/logo/finshell logo 01.png',                     alt: 'Finshell'             },
    { src: '/logo/kaari.png',                                alt: 'Kaari'                },
    { src: '/logo/kaira.png',                                alt: 'Kaira'                },
    { src: '/logo/Manifestation.png',                        alt: 'Manifestation'        },
    { src: '/logo/Sanmaan.png',                              alt: 'Sanmaan'              },
    { src: '/logo/Shubhaarambh events Logo without Bg.png',  alt: 'Shubhaarambh Events'  },
    { src: '/logo/sngt.png',                                 alt: 'SNGT'                 },
    { src: '/logo/tcs_logo-.png',                            alt: 'TCS'                  },
    { src: '/logo/timus_log.png',                            alt: 'Timus'                },
    { src: '/logo/tiny_trends_logo.png',                     alt: 'Tiny Trends'          },
    { src: '/logo/Usha Infotech (1).png',                    alt: 'Usha Infotech'        },
    { src: '/logo/usha infra.png',                           alt: 'Usha Infra'           },
    { src: '/logo/VAAMSI.png',                               alt: 'VAAMSI'               },
  ];

  return (
    <section className="selected-works" id="selected-works" ref={sectionRef}>
      <motion.div
        ref={containerRef}
        className="sw-video-marquee-container video-section"
        data-parallax="0.08"
        data-parallax-mode="css-var"
        style={{ '--takeover-y': takeoverY }}
        transformTemplate={() =>
          'translateY(calc(var(--parallax-y, 0px) + var(--takeover-y, 0px)))'
        }
      >
        {/* Horizontal infinite logo marquee */}
        <div className="sw-logo-marquee" aria-label="Client logos">
          <div className="sw-logo-track">
            {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
              <div key={i} className="sw-logo-pill">
                <img
                  src={encodeURI(logo.src)}
                  alt={logo.alt}
                  className="sw-logo-image"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="sw-video-marquee-track">
          {[...videos, ...videos, ...videos, ...videos].map((vid, idx) => (
            <div className="sw-card" key={idx}>
              <video 
                className="sw-video"
                loop 
                muted 
                playsInline 
                preload="none"
                poster={vid.replace(/\/upload\/.*?\/(v\d+)/, '/upload/so_auto/$1').replace('.mp4', '.jpg')}
              >
                <source data-src={vid} type="video/mp4" />
              </video>
              <div className="sw-video-gradient" aria-hidden="true" />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
