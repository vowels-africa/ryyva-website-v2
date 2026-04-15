"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Jab user 400px niche scroll karega tab arrow dikhega
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-10 right-10 z-[999] animate-in fade-in slide-in-from-bottom-4 duration-500">
      <button
        onClick={scrollToTop}
        className="p-4 bg-[var(--color-forest)] text-white rounded-full shadow-2xl hover:bg-[var(--color-ryyva-green)] transition-all duration-300 border border-white/10 group outline-none focus:outline-none ring-0 focus:ring-0 active:scale-95"
        aria-label="Scroll to top"
      >
        <ChevronUp size={24} className="group-hover:-translate-y-1 transition-transform duration-300" />
      </button>
    </div>
  );
}