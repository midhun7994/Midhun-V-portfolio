import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Sparkles, CheckCircle2, X } from 'lucide-react';
import { projectsData, Project } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 bg-slate-950/40 light:bg-slate-100/50 border-y border-white/5 light:border-black/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            Featured Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 light:text-slate-900 tracking-tight">
            Projects & Code Showcase
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
            Real-world full-stack web applications and AI computer vision solutions.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="glass-card rounded-2xl overflow-hidden border border-white/10 light:border-black/10 hover:border-blue-500/40 transition-all flex flex-col justify-between group"
            >
              <div className="p-6 sm:p-8 space-y-5">
                {/* Header Category Tag */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-600/15 text-blue-400 border border-blue-500/20">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400 light:text-slate-600">
                    Full Stack App
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div className="space-y-1">
                  <h3 className="font-extrabold text-2xl text-slate-100 light:text-slate-900 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="text-xs font-medium text-slate-400 light:text-slate-600">
                    {project.subtitle}
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 light:text-slate-700 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features Breakdown */}
                <div className="space-y-2 pt-2">
                  <div className="text-xs uppercase font-semibold text-slate-400 tracking-wider">
                    Core Capabilities:
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300 light:text-slate-700">
                    {project.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Badges */}
                <div className="pt-3 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-white/5 light:bg-black/5 text-slate-300 light:text-slate-700 border border-white/10 light:border-black/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 sm:px-8 sm:py-5 bg-black/20 light:bg-black/5 border-t border-white/10 light:border-black/10 flex items-center justify-between gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs flex items-center gap-2 transition-all hover:scale-105"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="px-4 py-2.5 rounded-xl border border-blue-500/30 hover:bg-blue-600/10 text-blue-400 font-semibold text-xs flex items-center gap-1.5 transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>View Details</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="glass-card max-w-2xl w-full rounded-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto relative border border-white/20"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-slate-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-600/20 text-blue-400">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-extrabold text-white mt-2">
                  {selectedProject.title}
                </h3>
                <div className="text-xs text-slate-400 mt-1">{selectedProject.subtitle}</div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  All Key Features:
                </h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  {selectedProject.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-blue-600/20 text-blue-300 border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center gap-2 shadow-lg shadow-blue-600/25"
                >
                  <Github className="w-4 h-4" />
                  <span>Open GitHub Repository</span>
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2.5 rounded-xl border border-white/10 text-slate-300 text-xs hover:bg-white/5"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
