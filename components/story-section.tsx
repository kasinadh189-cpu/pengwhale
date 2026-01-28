"use client";

import Image from "next/image";
import peng from "../images/peng.jpg";
import { motion } from "framer-motion";
import { Heart, Anchor, Star } from "lucide-react";

export function StorySection() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-[#0a1628] via-[#0d1d33] to-[#0a1628]">
      
      {/* Background Image only on xl and above */}
      <div className="absolute block inset-0 z-0 overflow-hidden">
      <Image
        src={peng}
        alt=""
        fill
        priority
        quality={100}
        className="
          object-cover
          object-[top_right]
          scale-x-[-1]
        "
      />

      </div>

      {/* Gradients always visible */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/70 to-transparent" />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0a1628]/100 via-transparent to-[#0a1628]/90" />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0a1628]/10 via-transparent to-[#0a1628]/90" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Decorative Image Block */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-cyan-900/30">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 via-transparent to-transparent" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-4xl sm:text-5xl font-serif font-normal text-cyan-100 leading-tight tracking-wide">
              The{" "}
              <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                Origin
              </span>{" "}
              Story
            </h2>

            <p className="text-lg text-cyan-200/80 leading-relaxed font-light">
              In the vast, frozen expanse where the ocean meets the ice, there lived a penguin who
              saw things differently. While others turned back at the first sign of storms, this
              little penguin kept walking forward.
            </p>

            <p className="text-lg text-cyan-200/80 leading-relaxed font-light">
              Then one day, a white whale appeared on the horizon—dressed impeccably, holding a
              rose, ready to walk alongside. Not to lead. Not to follow. Just to{" "}
              <span className="text-amber-300 font-medium">show up</span>.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-cyan-500/5 border border-cyan-500/20 text-center">
                <Heart className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                <span className="text-cyan-200 text-sm font-medium">Stubborn Hope</span>
              </div>
              <div className="p-4 rounded-2xl bg-cyan-500/5 border border-cyan-500/20 text-center">
                <Anchor className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <span className="text-cyan-200 text-sm font-medium">Patience</span>
              </div>
              <div className="p-4 rounded-2xl bg-cyan-500/5 border border-cyan-500/20 text-center">
                <Star className="w-8 h-8 text-sky-400 mx-auto mb-2" />
                <span className="text-cyan-200 text-sm font-medium">Showing Up</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
