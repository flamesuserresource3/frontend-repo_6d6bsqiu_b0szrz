import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Users, Building2, Mail, Timer, Zap, CheckCircle, Cpu, BarChart3, Slack, Calendar, Database } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.08 } }),
};

export default function Sections() {
  return (
    <div className="bg-[#0F0F0F] text-white">
      {/* How It Works */}
      <section className="relative py-20">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute left-10 top-10 h-48 w-48 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,230,161,0.12),rgba(0,0,0,0))] blur-2xl" />
        </div>
        <div className="mx-auto max-w-7xl px-6">
          <motion.h2
            custom={0}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="text-center text-3xl font-bold sm:text-4xl"
          >
            How It Works
          </motion.h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Finds Prospects',
                desc: 'Sandesh scrapes, qualifies, and verifies contacts from multiple sources.',
                icon: <Users className="h-6 w-6" />,
              },
              {
                title: 'Writes Personalized Outreach',
                desc: 'Each email feels human, written with founder-level empathy.',
                icon: <Mail className="h-6 w-6" />,
              },
              {
                title: 'Books Meetings Automatically',
                desc: 'Integrated with your calendar and CRM for seamless follow-up.',
                icon: <Calendar className="h-6 w-6" />,
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-xl transition-transform duration-300 hover:scale-[1.02]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="mb-3 inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-3 text-[#00E6A1]">
                  {card.icon}
                </div>
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="mt-2 text-sm text-white/70">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases + Why */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-14 md:grid-cols-2">
            {/* Use Cases */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="text-2xl font-bold"
              >
                Use Cases
              </motion.h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  { name: 'SaaS Founders', icon: <Rocket className="h-5 w-5" /> },
                  { name: 'B2B Agencies', icon: <Building2 className="h-5 w-5" /> },
                  { name: 'Tech Startups', icon: <Cpu className="h-5 w-5" /> },
                  { name: 'Sales Teams', icon: <BarChart3 className="h-5 w-5" /> },
                  { name: 'Recruiters', icon: <Users className="h-5 w-5" /> },
                ].map((uc, i) => (
                  <motion.div
                    key={uc.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.05 * i }}
                    className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4 transition [transform-style:preserve-3d] hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-emerald-500/10"
                  >
                    <div className="rounded-lg border border-white/10 bg-white/5 p-2 text-emerald-300">
                      {uc.icon}
                    </div>
                    <div className="font-medium">{uc.name}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Why Sandesh AI */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="text-2xl font-bold"
              >
                Why Sandesh AI
              </motion.h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  { label: '10x Faster Lead Generation', icon: <Zap className="h-5 w-5" /> },
                  { label: '92% Reply Rate Increase', icon: <CheckCircle className="h-5 w-5" /> },
                  { label: 'Zero Manual Outreach', icon: <Timer className="h-5 w-5" /> },
                  { label: '24/7 Running Agents', icon: <Cpu className="h-5 w-5" /> },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.05 * i }}
                    className="relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <div className="mb-2 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-emerald-300">
                      {item.icon}
                      <span className="text-xs text-white/70">Metric</span>
                    </div>
                    <div className="text-base font-semibold">{item.label}</div>
                    <div className="pointer-events-none absolute -right-10 -top-10 h-20 w-20 rounded-full bg-emerald-400/10 blur-2xl" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center text-2xl font-bold"
          >
            Works with your stack
          </motion.h3>
          <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 items-center gap-6 sm:grid-cols-3 md:grid-cols-6">
            {[
              { name: 'HubSpot' },
              { name: 'Salesforce' },
              { name: 'Slack', icon: <Slack className="h-6 w-6" /> },
              { name: 'Gmail' },
              { name: 'Outlook' },
              { name: 'Postgres', icon: <Database className="h-6 w-6" /> },
            ].map((logo, i) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: 0.06 * i }}
                className="flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white/70 backdrop-blur transition hover:text-white"
              >
                {logo.icon ? (
                  <div className="flex items-center gap-2"><span>{logo.icon}</span><span className="text-sm">{logo.name}</span></div>
                ) : (
                  <span className="text-sm">{logo.name}</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-20">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute left-1/3 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(88,82,255,0.16),rgba(0,0,0,0))] blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-6">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center text-2xl font-bold"
          >
            Loved by modern go-to-market teams
          </motion.h3>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                quote: 'Sandesh feels like a tireless teammate. Our reply rates are up 3x and meetings doubled in two weeks.',
                name: 'Aarav • SaaS Founder',
              },
              {
                quote: 'We run multi-ICP outreach without lifting a finger. The personalization is unreal.',
                name: 'Maya • Agency Partner',
              },
              {
                quote: 'From list-building to booking the call — fully automated. It just works.',
                name: 'Ishaan • Head of Sales',
              },
            ].map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.05 * i }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6"
              >
                <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_20%,rgba(255,255,255,0.05),transparent)]" />
                <p className="relative text-white/80">“{t.quote}”</p>
                <div className="relative mt-4 text-sm text-white/60">{t.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
