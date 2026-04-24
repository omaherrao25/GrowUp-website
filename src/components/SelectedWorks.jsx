import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function SelectedWorks() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const takeoverY = useTransform(
    scrollYProgress,
    [0, 0.35, 0.72, 1],
    ['8vh', '2vh', '-4vh', '-10vh']
  );

  const videos = [
    '/v/1.mp4',
    '/v/2.mp4',
    '/v/3.mp4',
    '/v/4.mp4',
    '/v/5.mp4',
    '/v/6.mp4',
    '/v/7.mp4',
    '/v/8.mp4',
    '/v/10.mp4',
    '/v/11.mp4',
    '/v/12.mp4',
    '/v/13.mp4',
    '/v/14.mp4',
    '/v/15.mp4',
    '/v/16.mp4',
    '/v/17.mp4',
  ];
  const logos = [
    { src: '/logo/37.png',                           alt: '37'                   },
    { src: '/logo/Aura Bling.png',                   alt: 'Aura Bling'           },
    { src: '/logo/Banjos Logo.png',                  alt: 'Banjos'               },
    { src: '/logo/Cela Logo.png',                    alt: 'Cela'                 },
    { src: '/logo/Eunora Logo by nisha Garani .png', alt: 'Eunora'               },
    { src: '/logo/finshell logo 01.jpg',             alt: 'Finshell'             },
    { src: '/logo/kaari.png',                        alt: 'Kaari'                },
    { src: '/logo/kaira.png',                        alt: 'Kaira'                },
    { src: '/logo/liqquor embassy.png',              alt: 'Liquor Embassy'       },
    { src: '/logo/Manifestation.png',                alt: 'Manifestation'        },
    { src: "/logo/niya's logo.jpg",                  alt: "Niya's"               },
    { src: '/logo/Sanmaan.png',                      alt: 'Sanmaan'              },
    { src: '/logo/Shubhaarambh events Logo.png',     alt: 'Shubhaarambh Events'  },
    { src: '/logo/tcs logo.jpeg',                    alt: 'TCS'                  },
    { src: '/logo/timus-logo-black.avif',            alt: 'Timus'                },
    { src: '/logo/Usha Infotech (1).png',            alt: 'Usha Infotech'        },
    { src: '/logo/usha infra.png',                   alt: 'Usha Infra'           },
  ];

  return (
    <section className="selected-works" ref={sectionRef}>
      <motion.div
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
              <video src={vid} autoPlay loop muted playsInline className="sw-video" />
              <div className="sw-video-gradient" aria-hidden="true" />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
