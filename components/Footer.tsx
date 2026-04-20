"use client";

import React from 'react';
import Link from "next/link";
import Image from "next/image"; // Image import kiya

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-forest)] text-white py-10 lg:py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-12 gap-10">

          {/* LEFT: Logo and Contact */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div className="space-y-8">
              
              {/* Replacing Text Wordmark with Image Logo */}
              <div className="select-none">
                <Image 
                  src="/images/darklogo.png" 
                  alt="Ryyva Logo" 
                  width={120} 
                  height={40} 
                  className="object-contain"
                />
              </div>
              
              <div className="space-y-3 text-[var(--color-ryyva-pale)]/60 font-body text-[13px] tracking-wide">
                <p className="hover:text-[var(--color-ryyva-light)] cursor-pointer transition-colors duration-300">ryyva.ai</p>
                <p className="hover:text-[var(--color-ryyva-light)] cursor-pointer transition-colors duration-300">hello@ryyva.ai</p>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 font-body font-semibold text-[11px] uppercase tracking-[0.15em] text-white/50">
            <div className="flex flex-col gap-5">
              <Link href="#what" className="hover:text-[var(--color-ryyva-light)] transition-colors">What We Do</Link>
              <Link href="#how" className="hover:text-[var(--color-ryyva-light)] transition-colors">How It Works</Link>
              <Link href="#flint" className="hover:text-[var(--color-ryyva-light)] transition-colors">Flint</Link>
            </div>
            <div className="flex flex-col gap-5">
              <Link href="#work" className="hover:text-[var(--color-ryyva-light)] transition-colors">Our Work</Link>
              <Link href="#about" className="hover:text-[var(--color-ryyva-light)] transition-colors">About</Link>
              <Link href="#contact" className="hover:text-[var(--color-ryyva-light)] transition-colors">Contact</Link>
            </div>
          </div>

          {/* Tagline */}
          <div className="md:col-span-4 flex flex-col md:items-end gap-6 text-left md:text-right">
            <p className="font-heading italic text-[22px] text-white leading-[1.2] max-w-[200px]">
              Complexity, <br /> 
              <span className="text-[var(--color-ryyva-light)]">woven</span> into clarity.
            </p>
            <p className="text-[var(--color-ryyva-pale)]/40 font-body text-[11px] uppercase tracking-[0.2em] font-semibold">
              Three threads. One weave.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-10 pt-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          
          <div className="flex flex-col gap-4">
              <p className="text-[10px] font-body font-semibold uppercase tracking-[0.15em] text-white/30">
                © {currentYear} Ryyva. All rights reserved.
              </p>
              
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-ryyva-green)]"></span>
                <p className="text-[10px] font-body font-semibold uppercase tracking-[0.15em] text-[var(--color-ryyva-green)]">
                  Flint is a Ryyva product
                </p>
              </div>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3 text-[10px] font-body font-semibold uppercase tracking-[0.15em] text-white/40">
            <Link href="#" className="hover:text-[var(--color-ryyva-light)] transition-colors">Privacy Policy</Link>
            <span className="text-white/10 hidden md:block">|</span>
            <span className="text-white/60">Cape Town, South Africa</span>
          </div>

        </div>

      </div>
    </footer>
  );
}