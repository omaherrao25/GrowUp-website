import React, { useState, useEffect } from 'react';

// ── Paste your Formspree endpoint here (e.g. https://formspree.io/f/xxxxxxxx) ──
const FORMSPREE_URL = 'https://formspree.io/f/xpqkgbeb';

export default function DiscountBanner() {
  const [dismissed, setDismissed] = useState(
    () => localStorage.getItem('discount-banner-v1') === 'true'
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ name: '', email: '', phone: '', brand: '' });

  useEffect(() => {
    if (!dismissed) {
      document.body.classList.add('banner-visible');
    } else {
      document.body.classList.remove('banner-visible');
    }
    return () => document.body.classList.remove('banner-visible');
  }, [dismissed]);

  useEffect(() => {
    document.body.style.overflow = modalOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [modalOpen]);

  const dismiss = () => {
    setDismissed(true);
    setModalOpen(false);
    localStorage.setItem('discount-banner-v1', 'true');
  };

  const openModal = () => { setError(''); setModalOpen(true); };
  const closeModal = () => setModalOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name:  form.name,
          email: form.email,
          phone: form.phone,
          brand: form.brand || '—',
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Submission failed');

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        dismiss();
      }, 2800);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (dismissed) return null;

  return (
    <>
      {/* ── Top announcement bar ── */}
      <div className="db-bar">
        <div className="db-bar-inner">
          <span className="db-pill">LIMITED TIME</span>
          <span className="db-text">
            Flat <strong className="db-highlight">20% OFF</strong> on your first booking
          </span>
          <button className="db-claim-btn" onClick={openModal}>
            Book Now
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
        <button className="db-dismiss" onClick={dismiss} aria-label="Dismiss banner">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>

      {/* ── Modal ── */}
      {modalOpen && (
        <div className="db-overlay" onClick={closeModal}>
          <div className="db-modal" onClick={e => e.stopPropagation()}>
            <button className="db-modal-close" onClick={closeModal} aria-label="Close">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>

            {submitted ? (
              <div className="db-success">
                <div className="db-success-check">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3 className="db-success-title">You're all set!</h3>
                <p className="db-success-sub">We'll reach out within 24 hours with your exclusive 20% discount.</p>
              </div>
            ) : (
              <>
                <div className="db-modal-badge">20% OFF</div>
                <h2 className="db-modal-title">Claim Your Exclusive Discount</h2>
                <p className="db-modal-sub">
                  Limited slots available — drop your details and we'll get back to you within 24 hours.
                </p>

                <form className="db-form" onSubmit={handleSubmit} noValidate>
                  <div className="db-form-row">
                    <input
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      className="form-input"
                      value={form.name}
                      onChange={handleChange}
                      required
                      disabled={loading}
                    />
                    <input
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      className="form-input"
                      value={form.email}
                      onChange={handleChange}
                      required
                      disabled={loading}
                    />
                  </div>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    className="form-input"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  />
                  <input
                    name="brand"
                    type="text"
                    placeholder="Brand / Company Name (optional)"
                    className="form-input"
                    value={form.brand}
                    onChange={handleChange}
                    disabled={loading}
                  />

                  {error && <p className="db-error">{error}</p>}

                  <button type="submit" className="db-submit-btn" disabled={loading}>
                    {loading ? (
                      <span className="db-spinner" />
                    ) : (
                      <>
                        Claim My 20% Off
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
