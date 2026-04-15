"use client";

import React from 'react';
import { MoveRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'flint'; 
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  showArrow?: boolean;
  href?: string; // Anchor link (e.g., "#contact")
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  type = 'button', 
  className = '', 
  onClick,
  showArrow = true,
  href 
}) => {
  
  const handleScroll = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Agar onClick prop di gayi hai toh use pehle run karein
    if (onClick) onClick(e);

    // Agar href hai aur wo # se shuru ho raha hai
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const elem = document.getElementById(targetId);
      
      if (elem) {
        elem.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  const baseStyles = "relative px-8 py-4 rounded-sm font-body font-medium text-[13px] transition-all duration-300 inline-flex items-center justify-center group outline-none focus:outline-none ring-0";

  const variants = {
    primary: "bg-[var(--color-ryyva-green)] text-white hover:bg-[var(--color-ryyva-light)]",
    flint: "bg-[var(--color-flint-amber)] text-[var(--color-flint-dark)] hover:bg-[var(--color-flint-spark)] active:scale-95"
  };

  return (
    <button
      type={type}
      onClick={handleScroll}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <span className="relative z-10">{children}</span>
      
      {showArrow && (
        <MoveRight 
          size={16} 
          className={`ml-2 transition-transform duration-300 ${
            variant === 'flint' ? 'group-hover:translate-x-2' : 'group-hover:translate-x-1'
          }`} 
        /> 
      )}

      {variant === 'flint' && (
        <span className="absolute inset-0 rounded-sm bg-[var(--color-flint-amber)] opacity-0 group-hover:animate-pulse -z-0"></span>
      )}
    </button>
  );
};

export default Button;