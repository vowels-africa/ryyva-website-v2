"use client";

import React from 'react';
import Image from 'next/image';

export default function WhatWeDo() {
  const features = [
    {
      title: "Synthesise",
      image: "/images/what1.avif",
      text: "We do not add complexity. We resolve it. Ryyva takes your existing systems, your existing data and your existing operations - and weaves them into a single intelligence fabric. Every agent. Every decision. Every signal. One source of truth."
    },
    {
      title: "Orchestrate",
      image: "/images/what2.avif",
      text: " Our agents are not automations. They are not rule-followers. They sense, reason, act and escalate - continuously, without waiting to be asked. Decentralised by design so no single point of failure can bring the system down."
    },
    {
      title: "Weave",
      image: "/images/what3.avif",
      text: "The outcome is not just integrated data. It is intelligence that improves with every interaction, every transaction, every touchpoint. The longer Ryyva runs, the smarter it becomes. This is what separates us from every workflow tool that came before."
    }
  ];

  return (
    <section id="what" className="bg-[var(--color-off-white)] py-20 md:py-28 lg:py-32 px-6 border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto">
        
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-ryyva-green)] mb-6 md:mb-10">
          WHAT WE DO
        </p>
        
        <h2 className="text-[var(--color-ink)] text-[40px] lg:text-[56px] font-heading lg:mb-24 mb-12 max-w-3xl leading-[1.1] tracking-tight">
          We take the fragmented. <br />
          <span className="italic font-normal text-[var(--color-ryyva-green)]/90">We weave it.</span>
        </h2>


        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col h-full group cursor-default">
              
              {/* Image Container */}
              <div className="relative aspect-[16/11] mb-8 overflow-hidden rounded-sm border border-[var(--color-border)] bg-white shadow-sm transition-all duration-700 group-hover:border-[var(--color-ryyva-green)]/30">
                <Image 
                  src={item.image} 
                  alt={item.title}
                  fill 
                  className="object-cover grayscale opacity-90 transition-all duration-[1200ms] ease-in-out group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                />
              </div>

           
              <div className="flex flex-col flex-grow transition-transform duration-500 group-hover:-translate-y-1">
                <h3 className="text-[var(--color-ryyva-green)]! text-[26px] lg:text-[30px] font-heading italic mb-5 leading-tight">
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