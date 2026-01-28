"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import story_image from "../images/story-image.jpg";
import sunset_dock from "../images/sunset-dock.jpg";
import peng_fun from "../images/peng-fun.png";
import { useState } from "react";
import { X } from "lucide-react";

const memes = [
  {
    src: story_image,
    alt: "When the 5-year online collab finally meets IRL",
    caption: "When the 5-year online collab finally meets IRL",
  },
  {
    src: sunset_dock,
    alt: "Antarctic Cruise comic",
    caption: "Expectations vs Reality",
  },
  {
    src: peng_fun,
    alt: "Whalentine waiting at sunset",
    caption: "Some things are worth waiting for",
  },
];

export function MemesSection() {
  const [selectedMeme, setSelectedMeme] = useState<number | null>(null);

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0a1628] via-[#0c1a2e] to-[#0a1628]">
      <div className="container mx-auto px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-sm mb-4">
            Community Vibes
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-normal text-cyan-100 mb-4 tracking-wide">
            Meme Gallery
          </h2>
          <p className="text-lg text-cyan-200/70 max-w-xl mx-auto font-light">
            Join the journey with the funniest duo in crypto
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {memes.map((meme, index) => (
            <motion.div
              key={meme.alt}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedMeme(index)}
              className="group cursor-pointer relative rounded-2xl overflow-hidden bg-[#0c1a2e] border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
            >
            <div className="relative w-full aspect-[9/9] overflow-hidden">
              <Image
                src={meme.src}
                alt={meme.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-cyan-100 text-sm font-medium">{meme.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedMeme !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a1628]/95 backdrop-blur-md p-4"
            onClick={() => setSelectedMeme(null)}
          >
            <button
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              onClick={() => setSelectedMeme(null)}
            >
              <X className="w-6 h-6 text-cyan-100" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
            <div className="relative w-full aspect-video">
            <Image
              src={memes[selectedMeme].src}
              alt={memes[selectedMeme].alt}
              fill
              className="object-contain rounded-2xl"
            />
            </div>
              <p className="text-center text-cyan-100 mt-4 text-lg font-medium">
                {memes[selectedMeme].caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
