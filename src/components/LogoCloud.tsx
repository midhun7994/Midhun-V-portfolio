import React from 'react';
import { motion } from 'motion/react';

const logos = [
  'Linear',
  'Vercel',
  'Figma',
  'Stripe',
  'Ramp',
  'Notion',
  'Loom',
  'Arc',
];

export const LogoCloud: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 md:py-20 relative z-10">
      <p className="text-center text-xs uppercase tracking-widest text-white/40 font-semibold">
        Trusted by the world's most thoughtful teams
      </p>

      <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 text-center">
        {logos.map((logo, i) => (
          <motion.div
            key={logo}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="flex items-center justify-center h-12"
          >
            <span className="text-sm font-semibold tracking-tight text-white/50 hover:text-white transition-colors cursor-default">
              {logo}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
