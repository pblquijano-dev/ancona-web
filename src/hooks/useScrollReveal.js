import { useEffect } from 'react';

export default function useScrollReveal(loading = false) {
  useEffect(() => {
    if (loading) return;

    let observer;

    const observeElements = () => {
      const revealElements = document.querySelectorAll('.reveal-on-scroll');

      if (!('IntersectionObserver' in window)) {
        // Fallback for environments without IntersectionObserver
        revealElements.forEach((el) => el.classList.add('reveal-active'));
        return;
      }

      const observerCallback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
          }
        });
      };

      const observerOptions = {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.05,
      };

      observer = new IntersectionObserver(observerCallback, observerOptions);

      revealElements.forEach((el) => {
        // Check if element is already in viewport
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('reveal-active');
        } else {
          observer.observe(el);
        }
      });
    };

    // Use requestAnimationFrame to ensure DOM is fully rendered after loading becomes false
    const animationFrame = requestAnimationFrame(() => {
      observeElements();
    });

    // Safety fallback: reveal all elements after 1.5 seconds so no content is ever hidden
    const safetyTimeout = setTimeout(() => {
      const revealElements = document.querySelectorAll('.reveal-on-scroll');
      revealElements.forEach((el) => el.classList.add('reveal-active'));
    }, 1500);

    return () => {
      cancelAnimationFrame(animationFrame);
      clearTimeout(safetyTimeout);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [loading]);
}
