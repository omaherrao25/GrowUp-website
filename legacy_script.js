/* =============================================
   FAZINFLO CLONE — Main Script
   - Sticky nav on scroll
   - Mobile hamburger
   - Scroll reveal
   - Gallery auto-scroll
   - Contact form submit
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  // ── NAV SCROLL ────────────────────────────
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });

  // ── HAMBURGER ─────────────────────────────
  const hamburger = document.getElementById('hamburger');
  const navMobile = document.getElementById('nav-mobile');
  hamburger.addEventListener('click', () => {
    const open = navMobile.classList.toggle('open');
    hamburger.classList.toggle('open', open);
  });
  document.querySelectorAll('.mob-link').forEach(l => {
    l.addEventListener('click', () => {
      navMobile.classList.remove('open');
      hamburger.classList.remove('open');
    });
  });

  // ── SCROLL REVEAL ─────────────────────────
  const revealEls = document.querySelectorAll(
    '.hero-eyebrow, .hero-title, .hero-sub, .btn-primary-blue, ' +
    '.section-eyebrow, .value-title, .value-actions, .vf-item, ' +
    '.global-title, .global-sub, .world-map-container, .global-stats, ' +
    '.creative-title, .creative-sub, .contact-title, .contact-form, ' +
    '.gallery-hint, .footer-top'
  );
  revealEls.forEach(el => el.classList.add('reveal'));

  const ro = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        ro.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => ro.observe(el));

  // ── GALLERY AUTO-SCROLL ───────────────────
  const track = document.getElementById('gallery-track');
  if (track) {
    let isDown = false;
    let startX;
    let scrollLeft;

    track.addEventListener('mousedown', e => {
      isDown = true;
      track.style.cursor = 'grabbing';
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
    });
    track.addEventListener('mouseleave', () => {
      isDown = false;
      track.style.cursor = 'grab';
    });
    track.addEventListener('mouseup', () => {
      isDown = false;
      track.style.cursor = 'grab';
    });
    track.addEventListener('mousemove', e => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX) * 1.5;
      track.scrollLeft = scrollLeft - walk;
    });
    track.style.cursor = 'grab';
  }

  // ── CONTACT FORM ──────────────────────────
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = document.getElementById('f-submit');
      btn.textContent = 'Message Sent ✓';
      btn.style.background = '#00C851';
      btn.style.boxShadow = '0 0 28px rgba(0,200,81,0.5)';
      setTimeout(() => {
        btn.textContent = 'Send Message';
        btn.style.background = '';
        btn.style.boxShadow = '';
        form.reset();
      }, 3000);
    });
  }

  // ── SMOOTH SCROLL ─────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const offset = nav.offsetHeight + 16;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // ── CHAT WIDGET ──────────────────────────
  const chat = document.getElementById('chat-widget');
  if (chat) {
    chat.addEventListener('click', () => {
      chat.innerHTML = '<span class="chat-icon">💬</span><span class="chat-label">Coming soon!</span>';
      setTimeout(() => {
        chat.innerHTML = '<span class="chat-icon">✦</span><span class="chat-label">Chat With Flowie</span>';
      }, 2500);
    });
  }

});
