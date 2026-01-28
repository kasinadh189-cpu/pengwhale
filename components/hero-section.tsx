"use client";

import Image from "next/image";
import hero_bg from "../images/hero.jpg";
import { motion } from "framer-motion";
import { Snowflake, ArrowRight } from "lucide-react";
import { SunsetButton } from "./sunset-button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image - positioned to show characters on right */}
      <div className="absolute block inset-0 z-0 overflow-hidden">
      <Image
        src={hero_bg}
        alt=""
        fill
        priority
        quality={100}
        className="
          object-cover
          object-top
          object-right
          scale-[1.05]
          sm:scale-[1]
          md:scale-[0.98]
          lg:scale-[1]
        "
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/40 via-transparent to-[#0a1628]/90" />
    </div>

      {/* Floating Snowflakes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-cyan-200/20"
            initial={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
              y: -20,
              rotate: 0,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: typeof window !== "undefined" ? window.innerHeight + 20 : 1000,
              rotate: 360,
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 10,
              ease: "linear",
            }}
          >
            <Snowflake size={Math.random() * 16 + 8} />
          </motion.div>
        ))}
      </div>

      {/* Content - aligned left */}
      <div className="relative z-10 container mx-auto px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl lg:max-w-2xl text-left"
        >
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal mb-2 leading-tight tracking-wide"
          >
            <span className="bg-gradient-to-r from-cyan-200 via-sky-300 to-cyan-100 bg-clip-text text-transparent drop-shadow-lg">
              Whalentine
            </span>
            <br />
            <span className="text-xl sm:text-2xl lg:text-3xl text-amber-200/90 font-serif font-normal tracking-widest uppercase">
              The Penguin Chapter
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-sm sm:text-base lg:text-lg text-cyan-100/90 max-w-md mb-8 leading-relaxed font-light"
          >
            Born on a frozen horizon where one penguin refused to turn back.{" "}
            <span className="text-amber-300 font-normal">A token about stubborn hope, patience,</span> and
            the quiet power of showing up.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <SunsetButton href="#tokenomics">
              View Tokenomics
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </SunsetButton>
            <SunsetButton href="#roadmap" variant="secondary">
              Explore Roadmap
            </SunsetButton>
          </motion.div>

          {/* Token Symbol */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-900/50 to-sky-900/50 border border-cyan-500/30 backdrop-blur-md"
          >
            <span className="text-base">🐧</span>
            <span className="text-cyan-100 font-mono font-semibold text-sm">$WHALENTINE</span>
            <span className="text-base">🐋</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a1628] to-transparent" />
    </section>
  );
}
