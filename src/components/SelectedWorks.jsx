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
    '/video/Rv01.mp4',
    '/video/dt01.mp4',
    '/video/en02.mp4',
    '/video/Gr3.mp4',
    '/video/Tc01.mp4',
    '/video/timus01.mp4',
    '/video/tl02.mp4',
    '/video/uu01.mp4',
    '/video/uu02.mp4',
    '/video/uu03.mp4',
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
