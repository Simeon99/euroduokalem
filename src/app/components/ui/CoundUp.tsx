'use client';
import React, { useEffect, useMemo, useRef, useState } from 'react';

type CountUpProps = {
  to: number;                 // final numeric value (e.g. 150, 10000, 20)
  durationMs?: number;        // total animation time, default 700ms
  prefix?: string;            // e.g. "~"
  suffix?: string;            // e.g. "+"
  locale?: string;            // e.g. "en", "sr-RS"
  compact?: boolean;          // true => 10K, 1.2M, etc.
  className?: string;
  reducedMotion?: boolean;    // if true => snap to target with no animation
};

/** Easing: easeOutCubic */
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

export const CountUp: React.FC<CountUpProps> = ({
  to,
  durationMs = 700,
  prefix = '',
  suffix = '',
  locale = 'en',
  compact = false,
  className,
  reducedMotion = false,
}) => {
  const [display, setDisplay] = useState(1);
  const [hasStarted, setHasStarted] = useState(false);
  const startRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);
  const hostRef = useRef<HTMLSpanElement | null>(null);

  const formatter = useMemo(() => {
    return new Intl.NumberFormat(locale, {
      notation: compact ? 'compact' : 'standard',
      maximumFractionDigits: 1,
    });
  }, [locale, compact]);

  // Observe when visible to start once
  useEffect(() => {
    if (!hostRef.current || hasStarted) return;
    const el = hostRef.current;

    const obs = new IntersectionObserver(
      (entries) => {
        const v = entries[0]?.isIntersecting;
        if (v) {
          setHasStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [hasStarted]);

  // Animate
  useEffect(() => {
    if (!hasStarted) return;

    if (reducedMotion || durationMs <= 0) {
      setDisplay(to);
      return;
    }

    const step = (ts: number) => {
      if (startRef.current == null) startRef.current = ts;
      const elapsed = ts - (startRef.current ?? 0);
      const t = Math.min(1, elapsed / durationMs);
      const eased = easeOut(t);
      const current = 1 + (to - 1) * eased;
      setDisplay(current);

      if (t < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setDisplay(to);
        startRef.current = null;
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current);
          rafRef.current = null;
        }
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      startRef.current = null;
    };
  }, [hasStarted, to, durationMs, reducedMotion]);

  const text = `${prefix}${formatter.format(Math.round(display))}${suffix}`;
  return (
    <span ref={hostRef} className={className} aria-label={`${prefix}${to}${suffix}`}>
      {text}
    </span>
  );
};
