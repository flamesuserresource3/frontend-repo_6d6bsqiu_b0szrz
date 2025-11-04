import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const container = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0F0F0F] text-white">
      {/* Background subtle gradient aura */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
      >
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,230,161,0.15),rgba(0,0,0,0))] blur-2xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(88,82,255,0.12),rgba(0,0,0,0))] blur-2xl" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-10 px-6 pb-16 pt-28 md:flex-row md:gap-16">
        {/* Left: Copy + CTAs */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 w-full md:w-1/2"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#00E6A1]"></span>
            Autonomous AI SDR
          </div>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Meet Sandesh — The Autonomous AI SDR That Books You Meetings on Autopilot.
          </h1>
          <p className="mt-5 max-w-xl text-white/70">
            AI that finds leads, writes hyper-personalized emails, and nurtures prospects — 24/7.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#cta"
              className="group relative inline-flex items-center justify-center rounded-xl bg-[#00E6A1] px-6 py-3 font-semibold text-black transition-transform duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#00E6A1]/60"
            >
              <span className="absolute inset-0 rounded-xl bg-[#00E6A1] opacity-30 blur-md transition-opacity group-hover:opacity-50" />
              <span className="relative">Book a Demo</span>
            </a>
            <a
              href="#demo"
              className="relative inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.06] px-6 py-3 font-semibold text-white transition-transform hover:scale-[1.02]"
            >
              <span className="absolute inset-0 rounded-xl bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0))]" />
              <span className="relative">See It in Action</span>
            </a>
          </div>

          <div className="mt-8 text-sm text-white/50">
            Your Autonomous AI SDR — Prospect, Personalize, and Pitch at Scale.
          </div>
        </motion.div>

        {/* Right: Spline Scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-0 h-[380px] w-full md:h-[560px] md:w-1/2"
        >
          <div className="absolute inset-0 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent" />
          <Spline
            scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          {/* gentle overlay gradient that doesn't block pointer events */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </motion.div>
      </div>

      {/* subtle scroll indicator */}
      <div className="mx-auto -mt-8 mb-8 flex w-full max-w-7xl justify-center px-6 md:-mt-10">
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex items-center gap-2 text-sm text-white/60"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
          Scroll to explore
        </motion.div>
      </div>
    </section>
  );
}
