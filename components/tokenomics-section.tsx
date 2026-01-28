"use client";

import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Droplets, Users, Settings, Lock } from "lucide-react";

const tokenomicsData = [
  { name: "Liquidity & Launch", value: 80, color: "#22d3ee", icon: Droplets },
  { name: "Community Rewards", value: 10, color: "#fbbf24", icon: Users },
  { name: "Reserve", value: 6, color: "#38bdf8", icon: Lock },
  { name: "Dev/Ops (Locked)", value: 4, color: "#fb923c", icon: Settings },
];

const TOTAL_SUPPLY = "1,000,000,000";

export function TokenomicsSection() {
  return (
    <section
      id="tokenomics"
      className="relative py-24 bg-gradient-to-b from-[#0a1628] via-[#0c1a2e] to-[#0a1628] overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Animated Background Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-8 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-sm mb-4">
            Token Distribution
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-normal text-cyan-100 mb-4 tracking-wide">
            Tokenomics
          </h2>
          <p className="text-lg text-cyan-200/70 max-w-xl mx-auto font-light">
            Fair launch with no team allocation. Community-first distribution.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Pie Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={tokenomicsData}
                    cx="50%"
                    cy="50%"
                    innerRadius="55%"
                    outerRadius="85%"
                    paddingAngle={2}
                    dataKey="value"
                    stroke="none"
                  >
                    {tokenomicsData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.color}
                        style={{
                          filter: "drop-shadow(0 0 8px rgba(34, 211, 238, 0.3))",
                        }}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-[#0c1a2e] border border-cyan-500/30 rounded-lg px-4 py-2 shadow-xl">
                            <p className="text-cyan-100 font-semibold">
                              {payload[0].name}
                            </p>
                            <p className="text-cyan-300">{payload[0].value}%</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
              {/* Center text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-cyan-400 text-sm uppercase tracking-wider">
                    Total Supply
                  </p>
                  <p className="text-2xl sm:text-3xl font-bold text-cyan-100">
                    {TOTAL_SUPPLY}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            {tokenomicsData.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="group p-5 rounded-2xl bg-gradient-to-r from-cyan-500/5 to-transparent border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${item.color}20` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: item.color }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-cyan-100 font-semibold">
                          {item.name}
                        </span>
                        <span
                          className="text-lg font-bold"
                          style={{ color: item.color }}
                        >
                          {item.value}%
                        </span>
                      </div>
                      <div className="h-2 bg-cyan-900/30 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.value}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: 0.6 + index * 0.1,
                            ease: "easeOut",
                          }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: item.color }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Note */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="mt-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30"
            >
              <p className="text-amber-200/90 text-sm flex items-center gap-2">
                <span className="text-lg">⚠️</span>
                <span>
                  <strong>Note:</strong> No team allocation. Dev/Ops capped at 4%
                  max participation with explicit buy limits.
                </span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
