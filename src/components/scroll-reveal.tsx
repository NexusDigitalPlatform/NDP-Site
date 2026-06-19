"use client";

import { useEffect } from "react";

/**
 * Drives the scroll-reveal animation for any element carrying `data-reveal`.
 * Mirrors the original Claude Design behaviour: reveal classes are added after
 * first paint, an IntersectionObserver fades elements in as they enter view,
 * and a safety timeout guarantees nothing stays hidden.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const reduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    if (!els.length) return;

    const show = (el: HTMLElement) => el.classList.add("ndpIn");

    els.forEach((el) => {
      const base = parseInt(el.getAttribute("data-reveal-delay") || "0", 10);
      if (el.hasAttribute("data-reveal-stagger")) {
        el.classList.add("ndpStagger");
      } else {
        el.classList.add("ndpReveal");
        if (base) el.style.transitionDelay = `${base}ms`;
      }
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            show(e.target as HTMLElement);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
    );

    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.92) show(el);
      else io.observe(el);
    });

    const safety = setTimeout(() => {
      els.forEach((el) => {
        io.unobserve(el);
        show(el);
      });
    }, 1600);

    return () => {
      io.disconnect();
      clearTimeout(safety);
    };
  }, []);

  return null;
}
