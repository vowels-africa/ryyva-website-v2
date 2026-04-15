"use client";

import Image from 'next/image';
import Button from './ui/Button';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export default function Hero() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      pathLength: 1,
      opacity: 0.22,
      transition: { duration: 4, ease: [0.25, 0.46, 0.45, 0.94] },
    });
  }, [controls]);

  return (
    <section className="relative bg-[var(--color-forest)]  text-white flex items-center overflow-hidden px-6 py-20  lg:min-h-[85vh]">

      {/* ── 1. Animated Weave Breathing ── */}
  
      <motion.div
        initial={{ opacity: 0.08 }}
        animate={{ opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 pointer-events-none select-none"
        aria-hidden="true"
      >
        <svg width="100%" height="100%" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="ryyva-weave-pattern"
              x="0" y="0"
              width="600" height="120"
              patternUnits="userSpaceOnUse"
            >
              {/* Layer 1 — primary thread */}
              <path
                d="M-600 30 Q-300 0, 0 30 T 600 30 T 1200 30"
                fill="none"
                stroke="var(--color-ryyva-light)"
                strokeWidth="0.6"
              />
              {/* Layer 2 */}
              <path
                d="M-600 50 Q-300 20, 0 50 T 600 50 T 1200 50"
                fill="none"
                stroke="var(--color-ryyva-light)"
                strokeWidth="0.5"
                opacity="0.5"
              />
              {/* Layer 3 */}
              <path
                d="M-600 70 Q-300 40, 0 70 T 600 70 T 1200 70"
                fill="none"
                stroke="var(--color-ryyva-light)"
                strokeWidth="0.4"
                opacity="0.35"
              />
              {/* Layer 4 — faintest */}
              <path
                d="M-600 90 Q-300 60, 0 90 T 600 90 T 1200 90"
                fill="none"
                stroke="var(--color-ryyva-light)"
                strokeWidth="0.35"
                opacity="0.2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ryyva-weave-pattern)" />
        </svg>
      </motion.div>

      {/* ── 2. One Thread Draw (animated on page load) ── */}
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        <svg width="100%" height="100%" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M 0 420 Q 350 360, 700 480 T 1400 420 T 2100 460"
            fill="none"
            stroke="var(--color-ryyva-green)"
            strokeWidth="1.4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={controls}
          />
        </svg>
      </div>

      {/* ── Content Grid ── */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10 w-full">

        {/* ── 3. Fade-up on scroll — Text ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          

          <h1 className="!text-white text-[48px] md:text-[64px] lg:text-[72px] font-medium leading-[1.05] mb-8 tracking-tighter font-heading">
            Complexity, <br />
            <span className="italic font-normal opacity-90">woven into clarity.</span>
          </h1>

          <p className="text-[var(--color-ryyva-pale)] text-[16px] lg:text-[18px] leading-[1.8] max-w-lg mb-12 opacity-80">
            Ryyva is a decentralised agentic workflow intelligence company. We synthesise
            fragmented systems, disconnected data and operational complexity into a single,
            coherent, self-improving fabric of enterprise intelligence.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="primary" showArrow={true} href="#contact">
              See how it works
            </Button>
          </div>
        </motion.div>

        {/* ── 4. Editorial Visual — fade-in + scale ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="relative h-[550px] w-full hidden lg:block rounded-md overflow-hidden border border-white/5 shadow-2xl group"
        >
          <Image
            src="/images/hero.png"
            alt="Ryyva Intelligence Fabric Visual"
            fill
            className="object-cover grayscale brightness-75 contrast-125 transition-all duration-[2500ms] group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100"
            priority
          />

          {/* Forest blend overlay */}
          <div className="absolute inset-0 bg-[var(--color-forest)]/30 mix-blend-multiply transition-opacity duration-1000 group-hover:opacity-10" />

          {/* Ground gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-forest)] via-transparent to-transparent opacity-60" />

          {/* Inner weave overlay on the image panel */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.06, 0.12, 0.06] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
          >
            <svg width="100%" height="100%" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="ryyva-inner-weave"
                  x="0" y="0"
                  width="300" height="80"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M-300 20 Q-150 0, 0 20 T 300 20 T 600 20"
                    fill="none"
                    stroke="var(--color-ryyva-light)"
                    strokeWidth="0.8"
                  />
                  <path
                    d="M-300 40 Q-150 20, 0 40 T 300 40 T 600 40"
                    fill="none"
                    stroke="var(--color-ryyva-light)"
                    strokeWidth="0.6"
                    opacity="0.6"
                  />
                  <path
                    d="M-300 60 Q-150 40, 0 60 T 300 60 T 600 60"
                    fill="none"
                    stroke="var(--color-ryyva-light)"
                    strokeWidth="0.5"
                    opacity="0.4"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#ryyva-inner-weave)" />
            </svg>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}