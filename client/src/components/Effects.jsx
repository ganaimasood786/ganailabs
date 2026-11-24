import { useEffect, useRef, useState } from 'react';

const reduceMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Cycles through words with a slide/fade animation. */
export function RotatingWords({ words, interval = 2400 }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (reduceMotion()) return undefined;
    const t = setInterval(() => setI((n) => (n + 1) % words.length), interval);
    return () => clearInterval(t);
  }, [words.length, interval]);
  return (
    <span className="rotator" aria-live="polite">
      <span key={i} className="rotator-word gradient-text animated">{words[i]}</span>
    </span>
  );
}

/** Counts from 0 to the number in `value` (e.g. "150+") when scrolled into view. */
export function CountUp({ value, duration = 1600 }) {
  const ref = useRef(null);
  const match = String(value).match(/^(\d+)(.*)$/);
  const target = match ? Number(match[1]) : 0;
  const suffix = match ? match[2] : '';
  const [n, setN] = useState(reduceMotion() ? target : 0);

  useEffect(() => {
    if (!match || reduceMotion()) return undefined;
    const el = ref.current;
    let frame;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1);
        setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
        if (p < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target, duration]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!match) return <span>{value}</span>;
  return <span ref={ref}>{n}{suffix}</span>;
}

/** Fades/slides in every `.reveal` element as it scrolls into view. Re-runs on route change. */
export function useScrollReveal(dep) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.visible)');
    if (reduceMotion() || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('visible'));
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [dep]);
}

/** Moves the hero glow blobs slightly with the mouse for a parallax feel. */
export function useParallax(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el || reduceMotion()) return undefined;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty('--mx', x.toFixed(3));
      el.style.setProperty('--my', y.toFixed(3));
    };
    el.addEventListener('mousemove', onMove);
    return () => el.removeEventListener('mousemove', onMove);
  }, [ref]);
}
