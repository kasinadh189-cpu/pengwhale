"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function FooterSection() {
  return (
    <footer className="relative py-16 bg-[#070f1b] border-t border-cyan-500/10">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-3xl font-serif font-normal mb-2">
              <span className="bg-gradient-to-r from-cyan-300 to-sky-400 bg-clip-text text-transparent">
                Whalentine
              </span>{" "}
              <span className="text-amber-300">🐧</span>
            </h3>
            <p className="text-cyan-300/60 text-sm font-light">The Penguin Chapter</p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <a
              href="https://x.com/thewhalentine"
              className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
              aria-label="Twitter"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://t.me/+1rlxUHwjW6ZhZTdl"
              className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
              aria-label="Telegram"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </a>
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-lg mx-auto mb-8 p-6 rounded-2xl bg-cyan-500/5 border border-cyan-500/10"
          >
            <p className="text-cyan-200/80 italic text-lg leading-relaxed">
              &quot;Some walk alone. Some walk together. But the bravest ones simply
              show up.&quot;
            </p>
            <p className="text-amber-300/80 text-sm mt-2">— Whalentine & Penguin</p>
          </motion.div>

          {/* Bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="pt-8 border-t border-cyan-500/10"
          >
            <p className="text-cyan-400/50 text-sm flex items-center justify-center gap-1">
              Made with <Heart className="w-4 h-4 text-rose-400 fill-rose-400" /> by
              the community
            </p>
            <p className="text-cyan-500/30 text-xs mt-2">
              © 2026 Whalentine. Not financial advice. DYOR.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
