"use client";

import React from 'react';
import Button from './ui/Button'; 

export default function Contact() {
  const inputFields = [
    { label: "Name", type: "text" },
    { label: "Contact", type: "text" },
    { label: "Email", type: "email" },
    { label: "Company", type: "text" },
    { label: "Role at Company", type: "text" }
  ];

  return (
    /* */
    <section id="contact" className="bg-[var(--color-off-white)] md:py-20 py-10 lg:py-32 px-6 border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-32">

        {/* */}
        <div className="flex flex-col">
          {/* Eyebrow */}
          <p className="eyebrow text-[var(--color-ryyva-green)] md:mb-8 mb-4">
            CONTACT
          </p>

          {/* Headline*/}
          <h2 className="text-[var(--color-ink)] text-[40px] lg:text-[52px] leading-[1.1] md:mb-8 mb-4 font-heading">
            Ready to <span className="italic font-normal text-[var(--color-ryyva-green)]/90">weave?</span>
          </h2>

          <p className="text-[var(--color-ink)]/70 mb-12 max-w-md font-body leading-[1.75]">
            Tell us about your complexity. We would enjoy solving the problem 
            with you.
          </p>

          {/* MAP */}
          <div className=" group">
            <div className="relative border border-[var(--color-border)] grayscale transition-all duration-[1200ms] h-84 rounded-sm overflow-hidden bg-white shadow-sm">
              <iframe
                title="Ryyva HQ Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211933.2625293233!2d18.33757105!3d-33.9144804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc500f8826eed7%3A0x687fe1fc2494a91!2sCape%20Town%2C%20South%20Africa!5e0!3m2!1sen!2s!4v1713100000000!5m2!1sen!2s"
                className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity"
                loading="lazy"
              ></iframe>
            </div>
            {/* UI Labels: Inter 600, 11px */}
            {/* <div className="mt-8 flex items-center justify-between border-b border-[var(--color-border)] pb-4">
              <p className="text-[11px] font-body font-semibold uppercase tracking-[0.1em] text-[var(--color-ink)]">
                Cape Town, South Africa
              </p>
              <p className="text-[11px] font-body font-semibold text-[var(--color-ink)]/30 uppercase tracking-[0.1em]">
                HQ / Southern Node
              </p>
            </div> */}
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="relative pt-8 lg:pt-0">
          <form className="flex flex-col md:gap-12" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-12">
              {inputFields.map((field, idx) => (
                <div key={idx} className="relative group">
                  {/* Label: Floats or remains as placeholder style */}
                  <input 
                    type={field.type} 
                    required
                    placeholder={field.label} 
                    /* Accessibility */
                    className="w-full bg-transparent border-b border-[var(--color-border)] pb-4 text-[15px] font-body text-[var(--color-ink)] placeholder:text-[var(--color-ink)]/30 focus:border-[var(--color-ryyva-green)] focus:ring-0 outline-none transition-all duration-500" 
                  />
                  {/* Underline Signature*/}
                  <div className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[var(--color-ryyva-green)] transition-all duration-700 group-focus-within:w-full"></div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-8">
              <Button 
                variant="primary" 
                type="submit" 
                className="w-full md:w-auto"
              >
                Start the conversation
              </Button>
              
              {/* Note: */}
              <p className="mt-6 text-[12px] font-body text-[var(--color-ink)]/40 italic">
                A member of our team will respond within 24 hours.
              </p>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}