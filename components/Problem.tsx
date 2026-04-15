"use client";

import React from 'react';
import Image from 'next/image';

export default function Problem() {
  return (
    /* Structural Rule: Off White for content sections */
    <section id="how" className="bg-[var(--color-off-white)] py-20 md:py-20 lg:py-32 px-6 border-t border-[var(--color-border)] group">
      <div className="max-w-7xl mx-auto">
        
        {/* Grid Logic: Stacked on mobile/tablet (md), Two columns on desktop (lg) */}
        <div className="grid lg:grid-cols-2 gap-16 md:gap-12 lg:gap-24 items-center">
          
          {/* LEFT SIDE: Content - Tablet par center alignment ya proper spacing */}
          <div className="order-2 lg:order-1">
            {/* Eyebrow: Inter 600, 11px, All Caps */}
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-ryyva-green)] mb-6 lg:mb-8">
              THE PROBLEM
            </p>

            {/* Headline: Georgia 500 */}
            <h2 className="text-[var(--color-ink)] text-[36px] md:text-[48px] lg:text-[56px] leading-[1.15] md:leading-[1.1] mb-8 md:mb-10 font-heading tracking-tight">
              Your data exists. <br />
              <span className="italic font-normal">Your intelligence doesn't.</span>
            </h2>

            {/* Body Content */}
            <div className="space-y-6 lg:space-y-8 text-[var(--color-ink)]/80 text-[16px] lg:text-[18px] leading-[1.8] font-body max-w-2xl">
              <p>
                Most enterprises carry the same wound. The data is there. The systems are there. The
                people are working harder than they should have to. But nothing connects. Customer
                intelligence lives on many platforms. Operational decisions are made on instinct.
              </p>

              {/* Quote Block: Precise and Expert tone */}
              <div className="py-6 lg:py-8 border-l-[1.5px] border-[var(--color-ryyva-green)] pl-8 my-10 md:my-12 transition-all duration-700">
                <p className="text-[20px] md:text-[24px] lg:text-[28px] font-heading italic text-[var(--color-ink)] leading-snug">
                  "The problem is not a lack of data. <br/> It is a <span className="text-[var(--color-ryyva-green)]">lack of weave</span>."
                </p>
              </div>

              <p>
                Ryyva exists for that inflection point - the moment when distributed complexity needs to become
                one coherent, intelligent, continuously improving thing.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE: Visual Elements - Tablet par size aur spacing fix */}
          <div className="order-1 lg:order-2 relative h-[400px] md:h-[550px] lg:h-[600px] flex items-center justify-center mb-12 lg:mb-0">
            
            {/* Main Image: Editorial style */}
            <div className="relative w-[75%] md:w-[65%] lg:w-4/5 aspect-[4/5] z-10 overflow-hidden rounded-sm border border-[var(--color-border)] transition-all duration-700 group-hover:border-[var(--color-ryyva-green)]/30 shadow-sm">
              <Image 
                src="/images/ai.avif" 
                alt="Complex architectural systems representing data structure"
                fill 
                className="object-cover grayscale transition-all duration-1000 ease-in-out group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>

            {/* Secondary Overlapping Image: Adjusted for Tablet (md) view */}
            <div className="absolute -bottom-4 md:-bottom-8 left-4 md:left-10 lg:-left-12 w-2/4 md:w-2/5 aspect-square z-20 overflow-hidden rounded-sm border border-[var(--color-border)] shadow-2xl transition-all duration-700 group-hover:border-[var(--color-ryyva-green)]/50">
              <Image 
                src="/images/problem2.avif" 
                alt="Detailed view of woven textures"
                fill 
                className="object-cover grayscale transition-all duration-1000 ease-in-out group-hover:grayscale-0 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[var(--color-ghost)] mix-blend-multiply opacity-10 group-hover:opacity-0 transition-opacity duration-700"></div>
            </div>

            {/* Brand Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[var(--color-ryyva-green)]/5 rounded-full blur-[100px] md:blur-[150px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}