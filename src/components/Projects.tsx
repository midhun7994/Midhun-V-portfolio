import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, Sparkles, CheckCircle2, X } from 'lucide-react';
import { projectsData, Project } from '../data/portfolioData';
import { splitTextIntoChars } from '../hooks/useGSAP';

gsap.registerPlugin(ScrollTrigger);

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Heading text animation
      if (headingRef.current) {
        const chars = splitTextIntoChars(headingRef.current);
        gsap.fromTo(
          chars,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.012,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headingRef.current,
              start: 'top 85%',
            },
          }
        );
      }

      // Badge
      gsap.fromTo(
        '.proj-badge',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: { trigger: '.proj-badge', start: 'top 90%' },
        }
      );

      gsap.fromTo(
        '.proj-desc',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: 0.1,
          scrollTrigger: { trigger: '.proj-desc', start: 'top 90%' },
        }
      );

      // Project cards scale up from smaller size
      if (gridRef.current) {
        const cards = gridRef.current.children;
        gsap.fromTo(
          cards,
          { y: 80, opacity: 0, scale: 0.85 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.9,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 82%',
            },
          }
        );

        // Add hover effects to cards
        Array.from(cards).forEach((card) => {
          const el = card as HTMLElement;
          el.addEventListener('mouseenter', () => {
            gsap.to(el, {
              y: -6,
              scale: 1.02,
              duration: 0.3,
              ease: 'power2.out',
            });
          });
          el.addEventListener('mouseleave', () => {
            gsap.to(el, {
              y: 0,
              scale: 1,
              duration: 0.3,
              ease: 'power2.out',
            });
          });
        });
      }
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  // Modal animations
  useEffect(() => {
    if (selectedProject) {
      if (overlayRef.current && modalRef.current) {
        gsap.fromTo(
          overlayRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.3 }
        );
        gsap.fromTo(
          modalRef.current,
          { opacity: 0, scale: 0.9, y: 30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.5,
            ease: 'back.out(1.5)',
          }
        );
      }
    }
  }, [selectedProject]);

  const closeModal = () => {
    if (overlayRef.current && modalRef.current) {
      const tl = gsap.timeline({
        onComplete: () => setSelectedProject(null),
      });
      tl.to(modalRef.current, {
        opacity: 0,
        scale: 0.9,
        y: 20,
        duration: 0.3,
        ease: 'power2.in',
      });
      tl.to(
        overlayRef.current,
        { opacity: 0, duration: 0.2 },
        '-=0.15'
      );
    } else {
      setSelectedProject(null);
    }
  };

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-slate-950/40 light:bg-slate-100/50 border-y border-white/5 light:border-black/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="proj-badge inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            Featured Portfolio
          </div>
          <h2
            ref={headingRef}
            className="text-3xl sm:text-4xl font-extrabold text-slate-100 light:text-slate-900 tracking-tight"
          >
            Projects & Code Showcase
          </h2>
          <p className="proj-desc text-slate-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
            Real-world full-stack web applications and AI computer vision solutions.
          </p>
        </div>

        {/* Project Cards */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden border border-white/10 light:border-black/10 hover:border-blue-500/40 transition-colors flex flex-col justify-between group cursor-default"
              style={{ opacity: 0 }}
            >
              <div className="p-6 sm:p-7 space-y-5">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-600/15 text-blue-400 border border-blue-500/20">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400 light:text-slate-600">
                    Full Stack App
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-extrabold text-2xl text-slate-100 light:text-slate-900 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="text-xs font-medium text-slate-400 light:text-slate-600 line-clamp-1">
                    {project.subtitle}
                  </div>
                </div>

                <p className="text-slate-300 light:text-slate-700 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="space-y-2 pt-2">
                  <div className="text-xs uppercase font-semibold text-slate-400 tracking-wider">
                    Core Capabilities:
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300 light:text-slate-700">
                    {project.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-white/5 light:bg-black/5 text-slate-300 light:text-slate-700 border border-white/10 light:border-black/10"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 6 && (
                    <span className="px-2 py-1 rounded-md text-xs font-mono text-slate-400">
                      +{project.technologies.length - 6} more
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-5 sm:px-6 sm:py-4 bg-black/20 light:bg-black/5 border-t border-white/10 light:border-black/10 flex items-center justify-between gap-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs flex items-center gap-1.5 transition-all hover:scale-105"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="px-3.5 py-2 rounded-xl border border-blue-500/30 hover:bg-blue-600/10 text-blue-400 font-semibold text-xs flex items-center gap-1.5 transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Details</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            ref={overlayRef}
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            onClick={closeModal}
          />
          <div
            ref={modalRef}
            className="glass-card max-w-2xl w-full rounded-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto relative border border-white/20 z-10"
          >
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-slate-300 hover:text-white transition-colors"
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

            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center gap-2 shadow-lg shadow-blue-600/25 transition-all hover:scale-105"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center gap-2 shadow-lg shadow-emerald-600/25 transition-all hover:scale-105"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
              <button
                onClick={closeModal}
                className="px-4 py-2.5 rounded-xl border border-white/10 text-slate-300 text-xs hover:bg-white/5 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
