"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface SunsetButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export function SunsetButton({
  children,
  href = "#",
  variant = "primary",
  className = "",
}: SunsetButtonProps) {
  const Component = motion.a;

  if (variant === "primary") {
    return (
      <Component
        href={href}
        className={`group relative inline-flex items-center justify-center px-8 py-4 text-base font-medium tracking-wide text-white overflow-hidden rounded-xl transition-all duration-300 hover:scale-105 ${className}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500" />
        
        {/* Animated overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100"
          initial={false}
          animate={{
            background: [
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)",
            ],
            x: ["-100%", "200%"],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 0.5,
          }}
        />
        
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500 opacity-30 blur-lg group-hover:opacity-100 group-hover:blur-xl transition-all duration-500" />
        
        {/* Content */}
        <span className="relative z-10 flex items-center gap-2 drop-shadow-lg">
          {children}
        </span>
      </Component>
    );
  }

  return (
    <Component
      href={href}
      className={`group relative inline-flex items-center justify-center px-8 py-4 text-base font-medium tracking-wide text-cyan-100 overflow-hidden rounded-xl border transition-all duration-300 ${className}`}
      style={{
        borderColor: "rgba(34, 211, 238, 0.3)",
        backgroundColor: "rgba(255, 255, 255, 0.03)",
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 backdrop-blur-sm" />
      
      {/* Gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-sky-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Border glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 opacity-0 group-hover:opacity-30 blur transition-all duration-500 -z-10" />
      
      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </Component>
  );
}
