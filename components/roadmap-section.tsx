"use client";

import { motion } from "framer-motion";
import { Rocket, TrendingUp, Users, Check } from "lucide-react";
import { useState } from "react";

const phases = [
  {
    phase: "Phase 1",
    title: "Launch",
    icon: Rocket,
    color: "#22d3ee",
    date: "Jan 28",
    status: "upcoming",
    items: [
      "ECA Launch Event",
      "Fair Launch on Pump.fun",
      "Initial Community Building",
      "Social Media Launch",
    ],
  },
  {
    phase: "Phase 2",
    title: "Lift Off",
    icon: TrendingUp,
    color: "#fbbf24",
    date: "Q1 2026",
    status: "planned",
    items: [
      "Marketing Push",
      "DEX Boost Campaign",
      "Trending Targets",
      "Partnership Announcements",
    ],
  },
  {
    phase: "Phase 3",
    title: "Momentum",
    icon: Users,
    color: "#38bdf8",
    date: "Q2 2026+",
    status: "planned",
    items: [
      "Community Growth Initiatives",
      "Sell Rule Rollout",
      "Future Drops (One Token/Month)",
      "Ecosystem Expansion",
    ],
  },
];

export function RoadmapSection() {
  const [activePhase, setActivePhase] = useState(0);

  return (
    <section
      id="roadmap"
      className="relative py-24 bg-gradient-to-b from-[#0a1628] via-[#0d1d33] to-[#0a1628] overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-8 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-sm mb-4">
            The Journey Ahead
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-normal text-cyan-100 mb-4 tracking-wide">
            Roadmap
          </h2>
          <p className="text-lg text-cyan-200/70 max-w-xl mx-auto font-light">
            Every great journey starts with a single step on the ice.
          </p>
        </motion.div>

        {/* Timeline Navigation */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center justify-between relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-cyan-900/50 -translate-y-1/2" />
            <motion.div
              className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-cyan-400 to-amber-400 -translate-y-1/2"
              initial={{ width: "0%" }}
              animate={{ width: `${((activePhase + 1) / phases.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />

            {phases.map((phase, index) => {
              const Icon = phase.icon;
              const isActive = index === activePhase;
              const isPast = index < activePhase;

              return (
                <motion.button
                  key={phase.phase}
                  onClick={() => setActivePhase(index)}
                  className={`relative z-10 flex flex-col items-center gap-2 p-2 transition-all duration-300 ${
                    isActive ? "scale-110" : "opacity-60 hover:opacity-100"
                  }`}
                  whileHover={{ scale: isActive ? 1.1 : 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? "shadow-lg"
                        : "bg-[#0c1a2e] border border-cyan-500/30"
                    }`}
                    style={{
                      backgroundColor: isActive ? `${phase.color}20` : undefined,
                      borderColor: isActive ? phase.color : undefined,
                      boxShadow: isActive
                        ? `0 0 30px ${phase.color}40`
                        : undefined,
                    }}
                  >
                    {isPast ? (
                      <Check
                        className="w-7 h-7"
                        style={{ color: phase.color }}
                      />
                    ) : (
                      <Icon
                        className="w-7 h-7"
                        style={{ color: isActive ? phase.color : "#67e8f9" }}
                      />
                    )}
                  </div>
                  <span
                    className={`text-sm font-semibold hidden sm:block ${
                      isActive ? "text-cyan-100" : "text-cyan-400/70"
                    }`}
                  >
                    {phase.phase}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Active Phase Content */}
        <motion.div
          key={activePhase}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <div
            className="p-8 sm:p-10 rounded-3xl border backdrop-blur-sm"
            style={{
              backgroundColor: `${phases[activePhase].color}08`,
              borderColor: `${phases[activePhase].color}30`,
            }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: `${phases[activePhase].color}20` }}
              >
                {(() => {
                  const Icon = phases[activePhase].icon;
                  return (
                    <Icon
                      className="w-7 h-7"
                      style={{ color: phases[activePhase].color }}
                    />
                  );
                })()}
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-cyan-100">
                  {phases[activePhase].title}
                </h3>
                <p
                  className="text-sm font-medium"
                  style={{ color: phases[activePhase].color }}
                >
                  {phases[activePhase].date}
                </p>
              </div>
              <div className="ml-auto">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    phases[activePhase].status === "upcoming"
                      ? "bg-cyan-500/20 text-cyan-300"
                      : "bg-amber-500/20 text-amber-300"
                  }`}
                >
                  {phases[activePhase].status === "upcoming"
                    ? "Upcoming"
                    : "Planned"}
                </span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {phases[activePhase].items.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-[#0a1628]/60 border border-cyan-500/10"
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: phases[activePhase].color }}
                  />
                  <span className="text-cyan-200/90">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
