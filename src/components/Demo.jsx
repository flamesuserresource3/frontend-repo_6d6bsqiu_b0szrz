import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function Demo() {
  return (
    <section id="demo" className="relative w-full bg-[#0F0F0F] py-24 text-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,230,161,0.18),rgba(0,0,0,0))] blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold sm:text-4xl"
          >
            Autonomous by Design.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-white/70"
          >
            Watch Sandesh orchestrate the full outbound workflow: Lead Found → Email Sent → Reply → Meeting Booked.
          </motion.p>
        </div>

        {/* Animated dashboard demo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto mt-10 max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur"
        >
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {[
              { step: 'Lead Found', color: 'from-emerald-400/30 to-transparent' },
              { step: 'Email Sent', color: 'from-cyan-400/30 to-transparent' },
              { step: 'Reply', color: 'from-violet-400/30 to-transparent' },
              { step: 'Meeting Booked', color: 'from-amber-400/30 to-transparent' },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className={`relative rounded-xl border border-white/10 bg-gradient-to-b ${item.color} p-4`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/60">Step {i + 1}</span>
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#00E6A1]" />
                </div>
                <div className="mt-2 text-lg font-semibold">{item.step}</div>
                <div className="mt-1 text-sm text-white/60">Running...</div>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-center">
            <a
              href="#cta"
              className="group relative inline-flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-5 py-3 text-emerald-200 transition hover:scale-[1.02]"
            >
              <span className="absolute inset-0 rounded-xl bg-emerald-400/20 blur-xl transition-opacity group-hover:opacity-70" />
              <Play size={18} />
              <span className="relative">Watch Full Demo</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
