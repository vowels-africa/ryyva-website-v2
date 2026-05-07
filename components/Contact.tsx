"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import Button from './ui/Button';
import 'leaflet/dist/leaflet.css';

const LeafletMap = dynamic(() => import('./LeafletMap'), { ssr: false });

export default function Contact() {
  const inputFields = [
    { label: "Name", type: "text" },
    { label: "Contact", type: "text" },
    { label: "Email", type: "email" },
    { label: "Company", type: "text" },
    { label: "Role at Company", type: "text" }
  ];

  return (
    <section id="contact" className="bg-[var(--color-off-white)] md:py-20 py-10 lg:py-32 px-6 border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-32">

        <div className="flex flex-col">
          <p className="eyebrow text-[var(--color-ryyva-green)] md:mb-8 mb-4">
            CONTACT
          </p>

          <h2 className="text-[var(--color-ink)] text-[40px] lg:text-[52px] leading-[1.1] md:mb-8 mb-4 font-heading">
            Ready to <span className="italic font-normal text-[var(--color-ryyva-green)]/90">weave?</span>
          </h2>

          <p className="text-[var(--color-ink)]/70 mb-12 max-w-md font-body leading-[1.75]">
            Tell us about your complexity. We would enjoy solving the problem
            with you.
          </p>

          {/* MAP */}
          <div className="group">
            <div className="relative border border-[var(--color-border)] grayscale hover:grayscale-0 transition-all duration-[1200ms] h-84 rounded-sm overflow-hidden bg-white shadow-sm">
              <LeafletMap />
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="relative pt-8 lg:pt-0">
          <form className="flex flex-col md:gap-12" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-12">
              {inputFields.map((field, idx) => (
                <div key={idx} className="relative group">
                  <input
                    type={field.type}
                    required
                    placeholder={field.label}
                    className="w-full bg-transparent border-b border-[var(--color-border)] pb-4 text-[15px] font-body text-[var(--color-ink)] placeholder:text-[var(--color-ink)]/30 focus:border-[var(--color-ryyva-green)] focus:ring-0 outline-none transition-all duration-500"
                  />
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
