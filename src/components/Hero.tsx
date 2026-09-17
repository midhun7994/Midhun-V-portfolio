import React from 'react';
import { motion } from 'motion/react';
import { Download, FolderGit2, Mail, Github, Linkedin, MessageSquare, ArrowDownRight, Sparkles } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Ambient Background Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Text Content (7 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-6 text-center lg:text-left"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
            </span>
            Available for Hiring & Roles
          </div>

          {/* Main Title & Headline */}
          <div className="space-y-2">
            <h2 className="text-base font-semibold text-slate-400 light:text-slate-600">
              Hello, I'm
            </h2>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-100 light:text-slate-900 leading-[1.08]">
              {personalData.name}
            </h1>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text pt-1">
              {personalData.title}
            </div>
          </div>

          {/* Intro Description */}
          <p className="text-slate-300 light:text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
            {personalData.tagline} Focused on building robust backend systems, RESTful APIs, and responsive full-stack solutions.
          </p>

          {/* Primary Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <a
              href="#projects"
              className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/25 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
            >
              <FolderGit2 className="w-4 h-4" />
              <span>View Projects</span>
            </a>

            <a
              href={personalData.resumeUrl}
              download="midhun_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl glass-card text-slate-200 light:text-slate-800 font-semibold text-sm flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
            >
              <Download className="w-4 h-4 text-blue-400" />
              <span>Download Resume</span>
            </a>

            <a
              href="#contact"
              className="px-6 py-3.5 rounded-xl border border-white/10 light:border-black/10 hover:border-blue-500/50 bg-white/5 light:bg-black/5 text-slate-200 light:text-slate-800 font-semibold text-sm flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
            >
              <Mail className="w-4 h-4 text-indigo-400" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Social Links Bar */}
          <div className="pt-4 flex items-center justify-center lg:justify-start gap-4 text-slate-400 light:text-slate-600">
            <span className="text-xs font-semibold tracking-wider uppercase">Connect:</span>
            <a
              href={personalData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-white/10 light:border-black/10 bg-white/5 light:bg-black/5 hover:text-white light:hover:text-black hover:border-blue-500/40 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-white/10 light:border-black/10 bg-white/5 light:bg-black/5 hover:text-white light:hover:text-black hover:border-blue-500/40 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personalData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-white/10 light:border-black/10 bg-white/5 light:bg-black/5 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
              aria-label="WhatsApp Chat"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Right Photo Column (5 cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative group">
            {/* Outer Glow Halo */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 opacity-40 blur-xl group-hover:opacity-75 transition duration-500" />

            {/* Photo Card Container */}
            <div className="relative rounded-3xl overflow-hidden glass-card p-3 max-w-sm sm:max-w-md">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-800">
                <img
                  src={personalData.photoUrl}
                  alt={personalData.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />

                {/* Subtle Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-60" />

                {/* Floating Info Tag */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs text-white">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <div>
                      <div className="font-semibold">{personalData.name}</div>
                      <div className="text-[10px] text-slate-300">BCA & Python Full Stack</div>
                    </div>
                  </div>
                  <div className="text-[10px] bg-blue-600/80 px-2 py-1 rounded font-mono font-medium">
                    Palakkad, IN
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
