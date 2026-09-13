import React from 'react';
import { motion } from 'motion/react';
import { Award, Calendar, ExternalLink, ShieldCheck } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            Verified Knowledge
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 light:text-slate-900 tracking-tight">
            Certifications & Credentials
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
            Industry certifications in Artificial Intelligence, Machine Learning, and Cloud Workloads.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="glass-card rounded-2xl p-6 sm:p-8 space-y-5 border border-white/10 light:border-black/10 hover:border-blue-500/40 transition-all relative overflow-hidden"
            >
              {/* Badge Icon Header */}
              <div className="flex items-center justify-between">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${cert.badgeColor || 'from-blue-600 to-indigo-500'} flex items-center justify-center text-white shadow-md`}>
                  <Award className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-1 text-xs text-slate-400 font-mono bg-white/5 light:bg-black/5 px-3 py-1 rounded-full border border-white/10">
                  <Calendar className="w-3.5 h-3.5 text-blue-400" />
                  <span>{cert.date}</span>
                </div>
              </div>

              {/* Title & Issuer */}
              <div className="space-y-1">
                <h3 className="font-extrabold text-xl text-slate-100 light:text-slate-900 leading-snug">
                  {cert.title}
                </h3>
                <div className="text-sm font-semibold text-blue-400 flex items-center gap-1.5 pt-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Issuer: {cert.issuer}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 light:text-slate-700 text-sm leading-relaxed">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
