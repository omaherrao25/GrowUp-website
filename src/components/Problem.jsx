import React from 'react';

const statements = [
  'You have a great product.',
  'A solid team.',
  'Real results for clients.',
  'And no one knows you exist.',
];

export default function Problem() {
  return (
    <section className="problem-section" id="problem">
      <div className="problem-inner">

        {/* LEFT: Editorial headline */}
        <div className="problem-left">
          <p className="problem-eyebrow">The real problem</p>
          <h2 className="problem-title">
            YOUR PRODUCT<br />
            IS NOT YOUR<br />
            BIGGEST PROBLEM.<br />
            <span className="problem-title-accent">INVISIBILITY IS.</span>
          </h2>
          <p className="problem-body">
            Great companies get ignored every day. Not because they're bad —
            because no one can find them. Content without a system is just noise.
          </p>
        </div>

        {/* RIGHT: Pure typographic visual */}
        <div className="problem-right">
          <div className="prob-type-art">
            {statements.map((s, i) => (
              <p
                key={i}
                className="prob-type-line"
                style={{ '--opacity': 1 - i * 0.28 }}
              >
                {s}
              </p>
            ))}
            <div className="prob-type-accent" />
          </div>
        </div>

      </div>
    </section>
  );
}
