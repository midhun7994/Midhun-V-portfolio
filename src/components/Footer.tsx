import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, MessageSquare } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-slate-950 light:bg-slate-100 border-t border-white/10 light:border-black/10 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Info */}
        <div className="space-y-1 text-center md:text-left">
          <div className="font-extrabold text-lg text-slate-100 light:text-slate-900">
            {personalData.name}
          </div>
          <div className="text-xs text-blue-400 font-medium">
            {personalData.title} &bull; Palakkad, India
          </div>
        </div>

        {/* Center Quick Links */}
        <div className="flex items-center gap-4 text-slate-400 light:text-slate-600">
          <a
            href={personalData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/5 light:bg-black/5 hover:text-white light:hover:text-black transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personalData.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/5 light:bg-black/5 hover:text-white light:hover:text-black transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personalData.email}`}
            className="p-2 rounded-lg bg-white/5 light:bg-black/5 hover:text-white light:hover:text-black transition-colors"
            aria-label="Send Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={personalData.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/5 light:bg-black/5 hover:text-emerald-400 transition-colors"
            aria-label="WhatsApp"
          >
            <MessageSquare className="w-4 h-4" />
          </a>
        </div>

        {/* Right Copyright & Back to Top */}
        <div className="flex items-center gap-4 text-xs text-slate-400 light:text-slate-600">
          <span>&copy; {new Date().getFullYear()} Midhun V. All rights reserved.</span>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/20 transition-transform hover:scale-110"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
