import React from 'react';
import { motion } from 'motion/react';
import { Code, Database, Layers, Wrench, CheckCircle } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code,
  Database,
  Layers,
  Wrench,
  CheckCircle,
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-slate-950/40 light:bg-slate-100/50 border-y border-white/5 light:border-black/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            Technical Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 light:text-slate-900 tracking-tight">
            Skills & Technology Expertise
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
            Categorized skills and tools extracted from hands-on projects, academic training, and professional internship experience.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => {
            const IconComponent = iconMap[category.iconName] || Code;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card rounded-2xl p-6 border border-white/10 light:border-black/10 hover:border-blue-500/40 transition-all space-y-5"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 border-b border-white/10 light:border-black/10 pb-4">
                  <div className="w-9 h-9 rounded-xl bg-blue-600/15 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-100 light:text-slate-900">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 light:bg-black/5 text-slate-200 light:text-slate-800 border border-white/10 light:border-black/10 hover:border-blue-500/50 hover:bg-blue-600/10 hover:text-blue-400 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
