import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Code, Database, Cpu, CheckCircle2, Terminal } from 'lucide-react';
import { personalData } from '../data/portfolioData';

const highlights = [
  {
    icon: GraduationCap,
    title: 'BCA Graduate',
    desc: 'Strong foundational education in Computer Science and Software Engineering principles.',
  },
  {
    icon: Code,
    title: 'Python Full Stack',
    desc: 'Hands-on development using Python, Django, Flask, HTML, CSS, JavaScript, and Angular/React.',
  },
  {
    icon: Database,
    title: 'Database & API Design',
    desc: 'Proficient in MySQL, PostgreSQL, MongoDB, SQLite, ORM queries, and RESTful API architecture.',
  },
  {
    icon: Cpu,
    title: 'Clean Code & Agile',
    desc: 'Committed to writing maintainable, object-oriented code, debugging, and adhering to modern SDLC workflows.',
  },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 light:text-slate-900 tracking-tight">
            Passionate Developer Building Clean & Scalable Web Solutions
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
            Here is a snapshot of my professional background, technical expertise, and core development philosophy.
          </p>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Bio Card (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 glass-card rounded-2xl p-8 space-y-6 relative overflow-hidden"
          >
            <div className="flex items-center gap-3 text-blue-400 font-mono text-sm font-semibold border-b border-white/10 light:border-black/10 pb-4">
              <Terminal className="w-5 h-5" />
              <span>whoami --verbose</span>
            </div>

            <p className="text-slate-300 light:text-slate-700 leading-relaxed text-sm sm:text-base">
              I am <strong className="text-white light:text-black">{personalData.name}</strong>, a BCA graduate and Python Full Stack Developer based in Palakkad, India. My journey in software engineering revolves around constructing reliable, data-driven web applications that bridge back-end server logic with responsive, user-centric front-end interfaces.
            </p>

            <p className="text-slate-300 light:text-slate-700 leading-relaxed text-sm sm:text-base">
              During my internship at <strong className="text-blue-400">Quest Innovative Solutions</strong>, I worked extensively with Django, Flask, REST APIs, and SQL/NoSQL databases—architecting authentication mechanisms, role-based access controls, and database schemas.
            </p>

            <div className="pt-2 grid sm:grid-cols-2 gap-3 text-xs text-slate-300 light:text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Location: Palakkad, India</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Degree: BCA (2021-2024)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Primary Backend: Python & Django</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Open for Relocation & Remote</span>
              </div>
            </div>
          </motion.div>

          {/* Right Feature Highlights Grid (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 grid sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-2xl p-6 space-y-3 border border-white/10 light:border-black/10 hover:border-blue-500/40 transition-all hover:-translate-y-1"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-slate-100 light:text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 light:text-slate-600 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
