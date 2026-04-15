"use client";

import React from 'react';
import Image from 'next/image';
import Button from './ui/Button'; 

export default function Work() {
  return (
  
    <section id="work" className="bg-[var(--color-off-white)]  py-12 lg:py-32 px-6 border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid lg:grid-cols-2 md:gap-16 gap-8 lg:gap-24 items-center">
          
          {/* Left Column: Editorial Image Container */}
          <div className="relative group order-2 lg:order-1">
            {/* Architectural Detail */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-[var(--color-ryyva-green)]/30 z-0 transition-all duration-700 group-hover:-top-2 group-hover:-left-2"></div>
            
            {/* Editorial Style Image */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-[var(--color-border)] bg-white z-10 shadow-sm">
              <Image 
                src="/images/ourwork.avif" 
                alt="Ryyva Intelligence in Luxury Production Environment" 
                fill 
                className="object-cover grayscale opacity-90 transition-all duration-[1000ms] ease-in-out group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
              />
            </div>
            
            
          </div>

          {/* Right Column */}
          <div className="order-1 lg:order-2">
            {/* Eyebrow */}
            <p className="eyebrow text-[var(--color-ryyva-green)] md:mb-10 mb-5">
              OUR WORK
            </p>

            {/* Headline:  */}
            <h2 className="text-[var(--color-ink)] md:text-[40px] text-[24px] lg:text-[52px] leading-[1.1] md:mb-12 mb-6 font-heading">
              What Ryyva looks like <br />
              <span className="italic font-normal text-[var(--color-ryyva-green)]/90">in production.</span>
            </h2>

            {/* BODY */}
            <div className="space-y-8 text-[var(--color-ink)]/80 text-[16px] lg:text-[18px] leading-[1.75] font-body">
              <p>
                Our current flagship deployment connects Store, Lab and Production
                across one of the world's most recognisable luxury brands — weaving
                three entirely separate operational nodes into a single coherent
                intelligence fabric.
              </p>

              <p>
                Demand signals from social media become product briefs in 24 hours. Inventory reorders
happen before stock runs low. Quality deviations are caught before a single product leaves
production. And every customer interaction feeds a unified profile that gets smarter with every
visit
              </p>

              {/* Emphasis Block: */}
              <div className="pt-8 border-t border-[var(--color-border)] lg:mt-10 mt-5">
                <p className="text-[20px] font-heading italic text-[var(--color-ryyva-green)] leading-relaxed">
                  "This is Ryyva running. Not a demo. Not a pilot. Production."
                </p>
              </div>
            </div>

            {/* CTA*/}
            <div className="lg:mt-16 mt-8">
              <Button 
                variant="primary" 
                showArrow={true}
                href="#contact"
              >
                See how we build it 
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}