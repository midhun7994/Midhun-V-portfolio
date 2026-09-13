import React from 'react';
import { motion } from 'motion/react';
import { SectionEyebrow } from './Primitives';

const chips = [
  'Auto-categorize',
  'Snooze for later',
  'Silent newsletters',
  'One-tap unsubscribe',
];

export const FeatureTriage: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 md:py-28 relative z-10">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <SectionEyebrow label="Triage" tag="AI-native" />
          <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.02]">
            Clear your inbox <br />
            in a single pass.
          </h2>
          <p className="mt-6 text-white/60 text-base leading-[1.6] max-w-md">
            Aura reads every message, understands intent, and routes the noise away from the signal. Focus on what moves your day forward — the rest handles itself.
          </p>

          {/* Chips Row */}
          <div className="mt-8 flex flex-wrap gap-2">
            {chips.map((chip) => (
              <span
                key={chip}
                className="text-xs text-white/70 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03]"
              >
                {chip}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right Column Liquid-Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="liquid-glass rounded-2xl p-5 border border-white/10"
        >
          <div className="text-xs text-white/50 mb-4 font-medium">
            Today · 42 messages triaged
          </div>

          <div className="space-y-3">
            {/* Priority */}
            <div className="liquid-glass rounded-lg p-3 border border-white/10">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-semibold text-white flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  Priority
                </span>
                <span className="text-white/60 font-mono">4</span>
              </div>
              <div className="text-xs text-white/70 space-y-1">
                <div>Sophia Chen — Q3 review</div>
                <div>David Lim — contract signoff</div>
              </div>
            </div>

            {/* Follow-up */}
            <div className="liquid-glass rounded-lg p-3 border border-white/10">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-semibold text-[#e5e5e5] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e5e5e5]" />
                  Follow-up
                </span>
                <span className="text-white/60 font-mono">7</span>
              </div>
              <div className="text-xs text-white/70 space-y-1">
                <div>Marcus — design review</div>
                <div>Figma — comment thread</div>
              </div>
            </div>

            {/* Updates */}
            <div className="liquid-glass rounded-lg p-3 border border-white/10">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-semibold text-[#a3a3a3] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#a3a3a3]" />
                  Updates
                </span>
                <span className="text-white/60 font-mono">18</span>
              </div>
              <div className="text-xs text-white/70 space-y-1">
                <div>Vercel — deploy ready</div>
                <div>GitHub — PR #482 merged</div>
              </div>
            </div>

            {/* Archived */}
            <div className="liquid-glass rounded-lg p-3 border border-white/10">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-semibold text-[#525252] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#525252]" />
                  Archived
                </span>
                <span className="text-white/60 font-mono">13</span>
              </div>
              <div className="text-xs text-white/70">
                Stripe payout · Newsletter · Receipts
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
