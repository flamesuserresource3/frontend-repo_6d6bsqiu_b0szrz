import React from 'react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="cta" className="relative w-full bg-[#0F0F0F] py-24 text-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute right-10 top-0 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,230,161,0.15),rgba(0,0,0,0))] blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-10 text-center shadow-2xl"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_circle_at_center,rgba(0,230,161,0.12),transparent)]" />
          <h3 className="text-2xl font-bold sm:text-3xl">Start Your Autonomous Sales Engine Today.</h3>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            Get early access to Sandesh AI and supercharge your outbound with autonomous agents.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="group relative inline-flex items-center justify-center rounded-xl bg-[#00E6A1] px-6 py-3 font-semibold text-black transition-transform duration-200 hover:scale-[1.02]"
            >
              <span className="absolute inset-0 rounded-xl bg-[#00E6A1] opacity-30 blur-md transition-opacity group-hover:opacity-50" />
              <span className="relative">Get Early Access</span>
            </a>
            <a
              href="#"
              className="relative inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.06] px-6 py-3 font-semibold text-white transition-transform duration-200 hover:scale-[1.02]"
            >
              <span className="absolute inset-0 rounded-xl bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0))]" />
              <span className="relative">Try Free for 7 Days</span>
            </a>
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-white/60 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="relative h-8 w-8">
              <span className="absolute inset-0 rounded-full bg-emerald-400/30 blur-md" />
              <span className="relative block h-8 w-8 rounded-full bg-emerald-500" />
            </div>
            <span className="text-white">Sandesh AI</span>
          </div>
          <nav className="flex flex-wrap items-center gap-5 text-sm">
            <a href="#" className="hover:text-white">About</a>
            <a href="#" className="hover:text-white">Careers</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </nav>
          <div className="text-sm">Built for Founders. Powered by AI.</div>
        </footer>
      </div>
    </section>
  );
}
