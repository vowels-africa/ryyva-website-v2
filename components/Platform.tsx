"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from './ui/Button';// Button component import kiya

export default function Problem() {
  const problems = [
    {
      title: "Ryyva Loom - Workflow Orchestration",
      image: "/images/ai.avif",
      text: "The core engine. Connects disparate systems, deploys decentralised agents and orchestrates workflows across every node of your organisation. Loom is the thing that does the weaving."
    },
    {
      title: "Ryyva Thread - Data Intelligence ",
      image: "/images/problem2.avif",
      text: "The single view engine. Pulls from every source into one unified profile - customer, operational, financial. Thread is the fabric of truth that every agent acts on."
    },
    {
      title: "Ryyva Weave - Agentic Concierge",
      image: "/images/workflow.jpg",
      text: "The customer-facing intelligence layer. Conversational agents across WhatsApp, voice, app and web - personalised, context-aware and seamlessly human when it needs to be."
    }
  ];

  return (
    <section id="how" className="bg-[var(--color-off-white)] py-20 md:py-28 lg:py-32 px-6 border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto">
        
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-ryyva-green)] mb-6 md:mb-10">
          THE RYYVA PLATFORM
        </p>

        <div className="max-w-3xl lg:mb-24 mb-12">
          <h2 className="text-[var(--color-ink)] text-[40px] lg:text-[56px] leading-[1.1] font-heading tracking-tight">
            Three products. 
            <br />
            <span className="italic font-normal text-[var(--color-ryyva-green)]/90">One fabric.</span>
          </h2>
        </div>

        {/* Grid Section */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 items-stretch mb-20">
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
                <h3 className="text-[26px] lg:text-[30px] font-heading italic mb-5 leading-tight text-[var(--color-ryyva-green)]">
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

        {/* Footer Note & CTA Area */}
        <div className="pt-12 border-t border-[var(--color-border)]/50 flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="max-w-2xl">
            <p className="text-[15px] lg:text-[17px] text-[var(--color-ink)]/80 leading-relaxed italic">
              Each product is independently deployable. Together they are the complete Ryyva stack - a single operating intelligence for every layer of your enterprise.
            </p>
          </div>
          
           {/* CTA Button */}
        <div className="flex justify-center">
          <Button variant="primary" href="#contact">
            Explore the platform
          </Button>
        </div>
        </div>

      </div>
    </section>
  );
}