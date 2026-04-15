"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; 
import Button from "./ui/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Updated Styles: 12-13px size as per UI Label rule 
  const navLinkStyle = "font-body font-medium text-[13px] uppercase tracking-[0.02em] text-[var(--color-ink)] hover:text-[var(--color-ryyva-green)] transition-colors duration-300";

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-5 lg:px-6 px-6">

        {/* Wordmark: Following strict color table  */}
        <Link href="/" className="font-heading text-2xl tracking-tight leading-none group">
          <span className="text-[var(--color-ink)]">R</span>
          <span className="text-[var(--color-ryyva-green)]">yy</span>
          <span className="text-[#0F6E56]">va</span> {/* Correct Forest Mid for Light BG  */}
        </Link>

        {/* Desktop Nav: Generous spacing [cite: 35] */}
        <nav className="hidden md:flex lg:gap-10 gap-6 items-center">
          <Link href="#what" className={navLinkStyle}>What We Do</Link>
          <Link href="#how" className={navLinkStyle}>How It Works</Link>
          <Link href="#flint" className={navLinkStyle}>Flint</Link>
          <Link href="#work" className={navLinkStyle}>Our Work</Link>
          <Link href="#about" className={navLinkStyle}>About</Link>
          <Link href="#contact" className={navLinkStyle}>Contact</Link>
        </nav>

        <div className="hidden md:block">
          {/* CTA: Action-led text  */}
          <Button variant="primary" showArrow={true} href="#contact">
            Start the conversation
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-[var(--color-ink)] p-2" 
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu: Premium drawer feel */}
      {open && (
        <div className="md:hidden bg-white border-t border-[var(--color-border)] px-6 py-12 flex flex-col gap-8 animate-in fade-in slide-in-from-top-2 duration-300">
          <Link href="#what" onClick={() => setOpen(false)} className={navLinkStyle}>What We Do</Link>
          <Link href="#how" onClick={() => setOpen(false)} className={navLinkStyle}>How It Works</Link>
          <Link href="#flint" onClick={() => setOpen(false)} className={navLinkStyle}>Flint</Link>
          <Link href="#work" onClick={() => setOpen(false)} className={navLinkStyle}>Our Work</Link>
          <Link href="#about" onClick={() => setOpen(false)} className={navLinkStyle}>About</Link>
          <Link href="#contact" onClick={() => setOpen(false)} className={navLinkStyle}>Contact</Link>

          <Button variant="primary" className="w-full mt-4" href="#contact">
            Start the conversation
          </Button>
        </div>
      )}
    </header>
  );
}