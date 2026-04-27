import React, { useState } from 'react';

export default function Contact() {
  const [btnState, setBtnState] = useState({ text: 'Send Message', bg: '', shadow: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setBtnState({
      text: 'Message Sent ✓',
      bg: '#00C851',
      shadow: '0 0 28px rgba(0,200,81,0.5)'
    });
    
    setTimeout(() => {
      setBtnState({ text: 'Send Message', bg: '', shadow: '' });
      e.target.reset();
    }, 3000);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <p className="section-eyebrow reveal">Get In Touch</p>
        <h2 className="contact-title reveal">Ready to scale<br />your content?</h2>
        <form className="contact-form reveal" id="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input type="text" placeholder="Your Name" className="form-input" id="f-name" required />
            <input type="email" placeholder="Email Address" className="form-input" id="f-email" required />
          </div>
          <input type="text" placeholder="Company / Brand Name" className="form-input" id="f-company" required />
          <textarea placeholder="Tell us about your content needs..." className="form-textarea" id="f-message" required></textarea>
          <button 
            type="submit" 
            className="btn-primary-blue form-submit" 
            id="f-submit"
            style={{ backgroundColor: btnState.bg, boxShadow: btnState.shadow }}
          >
            {btnState.text}
          </button>
        </form>
      </div>
    </section>
  );
}
