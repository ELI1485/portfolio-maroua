import { useEffect, useRef, useState } from 'react';

/** Adds .in class when element scrolls into view (works with .reveal). */
export function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);
  return ref;
}

/** Typewriter cycling through a list of phrases. */
export function useTypewriter(phrases, { typeMs = 55, holdMs = 2200, eraseMs = 28 } = {}) {
  const [text, setText] = useState('');
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const phrase = phrases[idx % phrases.length];
    let i = 0;
    let timer;
    let cancelled = false;

    const type = () => {
      if (cancelled) return;
      if (i <= phrase.length) {
        setText(phrase.slice(0, i));
        i += 1;
        timer = setTimeout(type, typeMs);
      } else {
        timer = setTimeout(erase, holdMs);
      }
    };
    const erase = () => {
      if (cancelled) return;
      if (i >= 0) {
        setText(phrase.slice(0, i));
        i -= 1;
        timer = setTimeout(erase, eraseMs);
      } else {
        setIdx((v) => (v + 1) % phrases.length);
      }
    };
    type();
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [idx, phrases, typeMs, holdMs, eraseMs]);

  return text;
}

/** 0..100 page scroll progress. */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return progress;
}
