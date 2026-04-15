import React from 'react';
import Button from './ui/Button';
export default function CTA() {
 return (

    <section className="relative bg-[var(--color-forest)] md:py-28 py-12 lg:py-36 px-6 overflow-hidden">
      

      <div className="absolute inset-0 opacity-[0.07] pointer-events-none select-none">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path 
            d="M0,500 Q250,400 500,500 T1000,500 M0,520 Q250,420 500,520 T1000,520" 
            stroke="var(--color-ryyva-light)" 
            fill="transparent" 
            strokeWidth="1" 
          />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">


        <h2 className="text-white! text-[56px] lg:text-[72px] font-heading font-medium leading-[1.05] mb-10 tracking-tight">
          Ready to <span className="italic font-normal">weave?</span>
        </h2>


        <p className="text-[var(--color-ryyva-pale)] text-[18px] lg:text-[22px] leading-[1.75] font-body max-w-2xl mx-auto md:mb-16 mb-10 opacity-90">
          Tell us about your complexity. We will tell you exactly how we would
          resolve it — and what it looks like on the other side.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button variant="primary" href="#contact">
            Start the conversation
          </Button>
        </div>

      </div>
    </section>
  );
}