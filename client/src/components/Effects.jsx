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

const CLICKABLE = '.btn, .filters button, .socials a, .founder-socials a, .faq-item summary, .hamburger';
const SPARK_COLORS = ['#2563eb', '#7c3aed', '#06b6d4', '#10b981', '#f59e0b', '#f43f5e'];

/** Ripple from the click point on every button, plus a colour spark burst on primary buttons. */
export function useClickEffects() {
  useEffect(() => {
    if (reduceMotion()) return undefined;
    const onDown = (e) => {
      const el = e.target.closest(CLICKABLE);
      if (!el) return;
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;

      // Ripple
      const size = Math.max(r.width, r.height) * 2.2;
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.cssText = `width:${size}px;height:${size}px;left:${x - size / 2}px;top:${y - size / 2}px`;
      el.classList.add('has-ripple');
      el.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());

      // Spark burst on primary actions
      if (el.matches('.btn-primary, .btn-light, .nav-cta')) {
        for (let i = 0; i < 14; i++) {
          const s = document.createElement('span');
          const angle = (Math.PI * 2 * i) / 14 + Math.random() * 0.4;
          const dist = 55 + Math.random() * 45;
          const color = SPARK_COLORS[i % SPARK_COLORS.length];
          s.className = i % 3 === 0 ? 'spark sq' : 'spark';
          s.style.cssText = `left:${e.clientX}px;top:${e.clientY}px;background:${color};color:${color};--dx:${Math.cos(angle) * dist}px;--dy:${Math.sin(angle) * dist}px`;
          document.body.appendChild(s);
          s.addEventListener('animationend', () => s.remove());
        }
      }
    };
    document.addEventListener('pointerdown', onDown);
    return () => document.removeEventListener('pointerdown', onDown);
  }, []);
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
