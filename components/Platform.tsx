"use client";

import React from 'react';
import Image from 'next/image';

export default function Problem() {
  const problems = [
    {
      title: "Fragmented Data",
      image: "/images/ai.avif",
      text: "Most enterprises carry the same wound. Customer intelligence lives on many platforms, disconnected and dormant. The data exists, but the meaning is lost in the gaps."
    },
    {
      title: "Intuition-Led",
      image: "/images/problem2.avif",
      text: "Operational decisions are often made on instinct rather than insight. Demand signals disappear before anyone notices them because the dots aren't connected."
    },
    {
      title: "The Missing Weave",
      image: "/images/workflow.jpg",
      text: "The problem is not a lack of data; it is a lack of weave. Ryyva exists for the moment when distributed complexity needs to become one coherent, intelligent thing."
    }
  ];

  return (
    <section id="how" className="bg-[var(--color-off-white)] py-20 md:py-28 lg:py-32 px-6 border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto">
        
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-ryyva-green)] mb-6 md:mb-10">
          THE PROBLEM
        </p>

        <div className="max-w-3xl lg:mb-24 mb-12">
          <h2 className="text-[var(--color-ink)] text-[40px] lg:text-[56px] leading-[1.1] font-heading tracking-tight">
            Your data exists. <br />
            <span className="italic font-normal text-[var(--color-ryyva-green)]/90">Your intelligence doesn't.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 items-stretch">
          {problems.map((item, index) => (
            <div key={index} className="group flex flex-col h-full cursor-default">
              
              <div className="relative aspect-[16/11] mb-8 overflow-hidden rounded-sm border border-[var(--color-border)] bg-white shadow-sm transition-all duration-700 group-hover:border-[var(--color-ryyva-green)]/30">
                <Image 
                  src={item.image} 
                  alt={item.title}
                  fill 
                  className="object-cover grayscale opacity-90 transition-all duration-[1200ms] ease-in-out group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col flex-grow transition-transform duration-500 group-hover:-translate-y-1">
                <h3 className="text-[26px] lg:text-[30px] font-heading italic mb-5 leading-tight text-[var(--color-ryyva-green)]!">
                  {item.title}
                </h3>
                
                <p className="text-[var(--color-ink)]/75 text-[15px] lg:text-[16px] leading-[1.8] font-body mb-8 flex-grow">
                  {item.text}
                </p>
              </div>

              <div className="relative h-[1px] w-full bg-[var(--color-border)] overflow-hidden">
                <div className="absolute inset-0 w-12 bg-[var(--color-ryyva-green)] transition-all duration-700 ease-in-out group-hover:w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}