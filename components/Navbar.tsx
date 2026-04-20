"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; 
import Button from "./ui/Button";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);


  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const navLinkStyle = "font-body font-medium  lg:text-[13px] md:text-[10px] uppercase tracking-[0.02em] text-[var(--color-ink)] hover:text-[var(--color-ryyva-green)] transition-colors duration-300";
 
  return (
    <header className="bg-white fixed top-0 left-0 w-full z-[100] border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-5 lg:px-6 md:px-3">

        <Link href="/" className="flex items-center">
          <Image 
            src="/images/lightlogo.png" 
            alt="Ryyva Logo" 
            width={110} 
            height={35} 
            priority 
            className="object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex lg:gap-10 gap-3 items-center">
          <Link href="#what" className={navLinkStyle}>What We Do</Link>
          <Link href="#how" className={navLinkStyle}>How It Works</Link>
          <Link href="#flint" className={navLinkStyle}>Flint</Link>
          <Link href="#work" className={navLinkStyle}>Our Work</Link>
          <Link href="#about" className={navLinkStyle}>About</Link>
          <Link href="#contact" className={navLinkStyle}>Contact</Link>
        </nav>

        <div className="hidden md:block">
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

      {/* Mobile Menu: Ab height automatic (content jitni) hogi */}
      {open && (
        <div className="md:hidden bg-white border-t border-[var(--color-border)] px-6 py-8 flex flex-col gap-6 animate-in fade-in slide-in-from-top-2 duration-300">
          <Link href="#what" onClick={() => setOpen(false)} className={navLinkStyle}>What We Do</Link>
          <Link href="#how" onClick={() => setOpen(false)} className={navLinkStyle}>How It Works</Link>
          <Link href="#flint" onClick={() => setOpen(false)} className={navLinkStyle}>Flint</Link>
          <Link href="#work" onClick={() => setOpen(false)} className={navLinkStyle}>Our Work</Link>
          <Link href="#about" onClick={() => setOpen(false)} className={navLinkStyle}>About</Link>
          <Link href="#contact" onClick={() => setOpen(false)} className={navLinkStyle}>Contact</Link>

          <Button variant="primary" className="w-full mt-2" href="#contact">
            Start the conversation
          </Button>
        </div>
      )}
    </header>
  );
}