import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-slate-950/40 light:bg-slate-100/50 border-y border-white/5 light:border-black/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 light:text-slate-900 tracking-tight">
            Education & Academic History
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
            Formal education and computer science academic qualification timeline.
          </p>
        </div>

        {/* Academic Timeline Cards Grid */}
        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="glass-card rounded-2xl p-6 sm:p-8 space-y-4 border border-white/10 light:border-black/10 hover:border-blue-500/40 transition-all relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-white/10 light:border-black/10 pb-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-xl text-slate-100 light:text-slate-900">
                      {edu.degree}
                    </h3>
                    <div className="text-blue-400 font-semibold text-sm mt-0.5">
                      {edu.institution}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 light:text-slate-600 sm:self-start">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-blue-600/10 px-2.5 py-1 rounded-full text-blue-400 font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.period}</span>
                  </div>
                </div>
              </div>

              {edu.details && (
                <div className="flex items-start gap-2.5 text-slate-300 light:text-slate-700 text-xs sm:text-sm pt-1">
                  <BookOpen className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span>{edu.details}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
