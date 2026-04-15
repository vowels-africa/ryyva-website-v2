"use client";

import React from 'react';
import Image from 'next/image';

export default function WhyRyyva() {
  return (
    /* Structural Rule*/
    <section id="about" className="bg-[var(--color-off-white)]  py-12 lg:py-32 px-6 border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-32 items-center">
          
          {/* Left Column*/}
          <div>
            {/* Eyebrow */}
            <p className="eyebrow text-[var(--color-ryyva-green)] md:mb-10 mb-5">
              WHY RYYVA
            </p>

            {/* Headline */}
            <h2 className="text-[var(--color-ink)] md:text-[40px] text-[24px] lg:text-[52px] leading-[1.1] md:mb-12 mb-6 font-heading">
              Not a systems integrator. <br />
              Not another SaaS platform. <br />
              <span className="italic font-normal text-[var(--color-ryyva-green)]/90">The intelligence layer above them all.</span>
            </h2>

            {/* BODY */}
            <div className="space-y-8 text-[var(--color-ink)]/80 text-[16px] lg:text-[18px] leading-[1.75] font-body">
              <p>
                Ryyva does not replace your CRM, your communications platform or your
                operational tools. We sit above them. <span className="font-medium text-[var(--color-ink)]">We make them behave as one.</span>
              </p>

              {/* Blockquote*/}
              <p className="font-heading italic text-[20px] lg:text-[22px] border-l-[2px] border-[var(--color-ryyva-green)]/30 pl-8 my-10 text-[var(--color-ink)]/70">
                The CRM holds the data. Ryyva decides what to do with it. The POS records the transaction.
                Ryyva predicts the next one. The message is delivered. Ryyva determines which message, to
                whom, and exactly when.
              </p>

              <p>
                We are the synthesis logic that turns a collection of best-in-class tools into a single, coherent,
                continuing improving operating intelligence.
              </p>
            </div>

            {/* Special Branding Line*/}
            <div className="md:mt-16 mt-8 flex flex-wrap gap-x-10 gap-y-6 font-body font-semibold text-[11px] uppercase tracking-[0.1em] text-[var(--color-ryyva-green)]">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-ryyva-green)]"></span> African-built
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-ryyva-green)]"></span> Globally deployed
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-ryyva-green)]"></span> Unapologetically ambitious
              </span>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative group">
            {/* Image Container*/}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-[var(--color-border)] bg-white z-10 shadow-sm">
              <Image 
                src="/images/why.avif" 
                alt="Architectural conceptualization of synthesis logic" 
                fill 
                className="object-cover grayscale opacity-80 transition-all duration-[1200ms] ease-in-out group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
              />
            </div>
            
            {/* Decorative background element */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-[var(--color-ryyva-green)]/10 rounded-sm -z-10 group-hover:-bottom-4 group-hover:-right-4 transition-all duration-700"></div>
          </div>

        </div>
      </div>
    </section>
  );
}