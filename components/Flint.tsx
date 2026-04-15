"use client";

import React, { useEffect, useRef } from 'react';
import Button from './ui/Button';
import { motion, useInView, Variants } from 'framer-motion';

// ── Angular mark data ──
const ANGULAR_MARKS = [
  { x1: '78%', y1: '-2%', x2: '62%', y2: '55%',  strokeWidth: 1,   opacity: 0.07 },
  { x1: '81%', y1: '-2%', x2: '65%', y2: '55%',  strokeWidth: 0.4, opacity: 0.04 },
  { x1: '92%', y1: '40%', x2: '78%', y2: '105%', strokeWidth: 0.8, opacity: 0.06 },
  { x1: '4%',  y1: '60%', x2: '11%', y2: '80%',  strokeWidth: 0.6, opacity: 0.05 },
  { x1: '88%', y1: '88%', x2: '96%', y2: '72%',  strokeWidth: 0.5, opacity: 0.05 },
  { x1: '14%', y1: '18%', x2: '19%', y2: '32%',  strokeWidth: 0.5, opacity: 0.06 },
];

const SPARK_POSITIONS = [
  { x: '68%', y: '12%' }, { x: '74%', y: '8%'  }, { x: '71%', y: '19%' },
  { x: '82%', y: '5%'  }, { x: '76%', y: '15%' }, { x: '65%', y: '22%' },
  { x: '85%', y: '18%' }, { x: '79%', y: '28%' }, { x: '88%', y: '10%' },
  { x: '63%', y: '9%'  }, { x: '90%', y: '30%' }, { x: '72%', y: '3%'  },
  { x: '95%', y: '22%' }, { x: '61%', y: '30%' }, { x: '86%', y: '38%' },
];

function useCountUp(target: number, duration = 1200) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const el = ref.current;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = String(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration]);

  return ref;
}

function Sparks() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    SPARK_POSITIONS.forEach((pos, i) => {
      const el = document.createElement('div');
      const size = (1.5 + Math.random() * 2.5).toFixed(1);

      // Explicitly typing the style object for TypeScript
      const styles: Partial<CSSStyleDeclaration> = {
        position: 'absolute',
        left: pos.x,
        top: pos.y,
        width: `${size}px`,
        height: `${size}px`,
        background: 'var(--color-flint-amber)',
        borderRadius: '50%',
        opacity: '0',
        pointerEvents: 'none',
      };

      Object.assign(el.style, styles);
      container.appendChild(el);

      const delay = 200 + i * 60 + Math.random() * 120;
      const inDuration = 400 + Math.random() * 300;
      const peakOpacity = (0.4 + Math.random() * 0.5).toFixed(2);

      setTimeout(() => {
        el.style.transition = `opacity ${inDuration}ms ease-out`;
        el.style.opacity = peakOpacity;

        setTimeout(() => {
          el.style.transition = `opacity ${800 + Math.random() * 600}ms ease-in`;
          el.style.opacity = '0';
        }, inDuration + 80);
      }, delay);
    });

    return () => {
      if (container) container.innerHTML = '';
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}

function StatItem({
  target,
  suffix,
  label,
}: {
  target: number;
  suffix: string;
  label: string;
}) {
  const numRef = useCountUp(target);

  return (
    <div className="flex flex-col gap-1">
      <span className="text-[42px] font-bold leading-none tracking-tighter text-[var(--color-flint-amber)]">
        <span ref={numRef}>0</span>
        {suffix}
      </span>
      <span className="text-[11px] uppercase tracking-[0.13em] font-medium text-[var(--color-flint-ash)]/40">
        {label}
      </span>
    </div>
  );
}

// Fixed Variants Typing
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut', delay },
  }),
};

export default function Flint() {
  return (
    <section
      id="flint"
      className="flint-section bg-[var(--color-flint-dark)] text-white md:py-24 py-12 lg:py-36 px-6 overflow-hidden relative"
    >
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          {ANGULAR_MARKS.map((m, i) => (
            <line
              key={i}
              x1={m.x1} y1={m.y1}
              x2={m.x2} y2={m.y2}
              stroke="var(--color-flint-amber)"
              strokeWidth={m.strokeWidth}
              opacity={m.opacity}
            />
          ))}
        </svg>
      </div>

      <Sparks />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.p
          className="text-[var(--color-flint-amber)] font-semibold text-[11px] uppercase tracking-[0.15em] md:mb-8 mb-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          Also from Ryyva
        </motion.p>

        <motion.h2
          className="text-[var(--color-flint-ash)]/70! text-[56px] lg:text-[72px] font-bold leading-[1.05] tracking-tighter md:mb-6 mb-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.1}
        >
          Meet <span className="text-[var(--color-flint-amber)]">Flint.</span>
        </motion.h2>

        <motion.h3
          className="text-[var(--color-flint-ash)]/70! text-[24px] lg:text-[28px] font-bold leading-tight md:mb-12 mb-6 max-w-2xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.2}
        >
          AI-powered lead intelligence, built for the moments that matter.
        </motion.h3>

        <motion.div
          className="space-y-6 text-[var(--color-flint-ash)]/70 text-[16px] lg:text-[18px] leading-[1.75] max-w-3xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.3}
        >
          <p>
            Flint is Ryyva's AI lead generation product — designed to identify, qualify and engage
            high-intent prospects at the precise moment a life event makes them ready to act.
          </p>
          <p>
            Built on the same agentic infrastructure as the Ryyva platform. Delivered as a
            standalone product for clients who need immediate lead intelligence without a full
            platform deployment.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-12 mt-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.4}
        >
          <StatItem target={94} suffix="%" label="Lead accuracy" />
          <StatItem target={3}  suffix="x" label="Conversion lift" />
          <StatItem target={48} suffix="h" label="Time to deploy" />
        </motion.div>

        <motion.div
          className="mt-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.5}
        >
          <Button variant="flint" href="#contact" className="flint-cta-pulse">
            Learn more about Flint
          </Button>
        </motion.div>

        <motion.div
          className="lg:mt-32 mt-16  md:pt-12 border-t border-white/10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.55}
        >
          <p className="text-xs text-[var(--color-flint-ash)]/35 leading-relaxed max-w-2xl font-medium">
            Flint is one application of the Ryyva intelligence framework.
          </p>
        </motion.div>
      </div>
    </section>
  );
}