import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            Career Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 light:text-slate-900 tracking-tight">
            Professional Experience
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
            Hands-on full-stack development experience from industry internships.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto relative border-l-2 border-blue-600/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Timeline Marker Badge */}
              <div className="absolute -left-[37px] sm:-left-[53px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-600 border-4 border-[#0a0a0f] light:border-white flex items-center justify-center text-white shadow-md shadow-blue-600/30">
                <Briefcase className="w-3.5 h-3.5" />
              </div>

              {/* Experience Card */}
              <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-5 border border-white/10 light:border-black/10 hover:border-blue-500/40 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-white/10 light:border-black/10 pb-4">
                  <div>
                    <h3 className="font-extrabold text-xl text-slate-100 light:text-slate-900">
                      {exp.role}
                    </h3>
                    <div className="text-blue-400 font-semibold text-sm mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 light:text-slate-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-blue-400" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-blue-600/10 px-2.5 py-1 rounded-full text-blue-400 font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                {/* Key Responsibilities */}
                <div className="space-y-3">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 light:text-slate-600">
                    Key Responsibilities & Achievements
                  </h4>
                  <ul className="space-y-2.5">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300 light:text-slate-700 text-xs sm:text-sm leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-blue-600/10 text-blue-400 border border-blue-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
