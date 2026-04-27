import { useEffect } from 'react';

/**
 * Lightweight parallax engine.
 * Add `data-parallax="0.2"` to any element (value = speed factor, 0.1 = subtle, 0.5 = strong).
 * Add `data-parallax-dir="-1"` to reverse direction.
 */
export function useParallax() {
  useEffect(() => {
    let rafId = null;

    const update = () => {
      const scrollY = window.scrollY;
      const els = document.querySelectorAll('[data-parallax]');

      els.forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-parallax')) || 0.15;
        const dir = parseFloat(el.getAttribute('data-parallax-dir')) || 1;
        const mode = el.getAttribute('data-parallax-mode');
        const rect = el.getBoundingClientRect();
        const centerY = rect.top + rect.height / 2 + scrollY;
        const offset = (scrollY - centerY + window.innerHeight / 2) * speed * dir;

        if (mode === 'css-var') {
          el.style.setProperty('--parallax-y', `${offset}px`);
          el.style.willChange = 'transform';
          return;
        }

        el.style.transform = `translateY(${offset}px)`;
        el.style.willChange = 'transform';
      });

      rafId = null;
    };

    const onScroll = () => {
      if (!rafId) {
        rafId = requestAnimationFrame(update);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update(); // run once on mount

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);
}
