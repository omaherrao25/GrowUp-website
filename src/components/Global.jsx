import React from 'react';

export default function Global() {
  return (
    <section className="global-section" id="global">
      <div className="global-inner">
        <p className="section-eyebrow reveal">Worldwide Presence</p>
        <h2 className="global-title reveal">Now global</h2>
        <p className="global-sub reveal">Serving ambitious brands across the world's fastest-growing markets.</p>
        <div className="world-map-container reveal">
          <div className="world-map">
            <svg viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg" className="map-svg">
              <path d="M80,80 L220,80 L240,120 L230,180 L200,220 L160,240 L120,230 L90,200 L70,150 Z" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
              <path d="M160,260 L220,250 L240,300 L230,370 L200,410 L170,400 L150,350 L145,300 Z" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
              <path d="M430,60 L520,60 L530,100 L510,130 L470,140 L440,120 L425,90 Z" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
              <path d="M440,155 L530,145 L550,200 L540,290 L510,340 L480,350 L450,320 L430,260 L425,200 Z" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
              <path d="M535,130 L590,120 L610,160 L590,190 L550,195 L530,170 Z" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
              <path d="M580,60 L820,60 L840,120 L820,200 L760,230 L700,220 L640,200 L600,170 L575,130 Z" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
              <path d="M640,200 L700,200 L720,260 L700,300 L670,290 L645,250 Z" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
              <path d="M750,290 L870,285 L890,340 L870,390 L810,400 L755,370 L740,330 Z" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>

              <circle cx="155" cy="155" r="7" fill="#0096FF" opacity="0.9">
                <animate attributeName="r" values="7;10;7" dur="2s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.9;0.5;0.9" dur="2s" repeatCount="indefinite"/>
              </circle>
              <circle cx="155" cy="155" r="16" fill="none" stroke="#0096FF" strokeWidth="1" opacity="0.3">
                <animate attributeName="r" values="8;20;8" dur="2s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite"/>
              </circle>
              <text x="165" y="145" fill="#0096FF" fontSize="11" fontFamily="Helvetica Neue">United States</text>

              <circle cx="455" cy="80" r="6" fill="#0096FF" opacity="0.9">
                <animate attributeName="r" values="6;9;6" dur="2.2s" repeatCount="indefinite"/>
              </circle>
              <text x="462" y="76" fill="#0096FF" fontSize="11" fontFamily="Helvetica Neue">UK</text>

              <circle cx="470" cy="100" r="5" fill="#4DB8FF" opacity="0.8"/>
              <text x="477" y="96" fill="#4DB8FF" fontSize="10" fontFamily="Helvetica Neue">France</text>

              <circle cx="488" cy="88" r="5" fill="#4DB8FF" opacity="0.8"/>
              <text x="495" y="84" fill="#4DB8FF" fontSize="10" fontFamily="Helvetica Neue">Germany</text>

              <circle cx="450" cy="175" r="5" fill="#4DB8FF" opacity="0.8"/>
              <text x="457" y="171" fill="#4DB8FF" fontSize="10" fontFamily="Helvetica Neue">Morocco</text>

              <circle cx="580" cy="155" r="6" fill="#0096FF" opacity="0.9">
                <animate attributeName="r" values="6;9;6" dur="1.8s" repeatCount="indefinite"/>
              </circle>
              <text x="588" y="151" fill="#0096FF" fontSize="11" fontFamily="Helvetica Neue">Dubai</text>

              <circle cx="655" cy="220" r="7" fill="#0096FF" opacity="0.9">
                <animate attributeName="r" values="7;10;7" dur="2.4s" repeatCount="indefinite"/>
              </circle>
              <text x="663" y="216" fill="#0096FF" fontSize="11" fontFamily="Helvetica Neue">India</text>

              <circle cx="770" cy="215" r="5" fill="#4DB8FF" opacity="0.8"/>
              <text x="777" y="211" fill="#4DB8FF" fontSize="10" fontFamily="Helvetica Neue">Philippines</text>

              <circle cx="810" cy="335" r="7" fill="#0096FF" opacity="0.9">
                <animate attributeName="r" values="7;10;7" dur="2.6s" repeatCount="indefinite"/>
              </circle>
              <text x="818" y="331" fill="#0096FF" fontSize="11" fontFamily="Helvetica Neue">Australia</text>
            </svg>
          </div>
        </div>
        <div className="global-stats reveal">
          <div className="gstat">
            <span className="gstat-num">9+</span>
            <span className="gstat-label">Countries</span>
          </div>
          <div className="gstat-divider"></div>
          <div className="gstat">
            <span className="gstat-num">500+</span>
            <span className="gstat-label">Brands Served</span>
          </div>
          <div className="gstat-divider"></div>
          <div className="gstat">
            <span className="gstat-num">10K+</span>
            <span className="gstat-label">Videos Delivered</span>
          </div>
        </div>
      </div>
    </section>
  );
}
