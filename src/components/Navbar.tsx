import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Code2 } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { personalData } from '../data/portfolioData';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0f]/80 light:bg-white/80 backdrop-blur-md border-b border-white/10 light:border-black/10 py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="flex items-center gap-2.5 group"
          aria-label="Midhun V Portfolio"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <Code2 className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base tracking-tight text-slate-100 light:text-slate-900 leading-none">
              {personalData.name}
            </span>
            <span className="text-[10px] text-blue-400 font-medium tracking-wider uppercase mt-1">
              Developer
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/5 light:bg-black/5 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 light:border-black/10">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors ${
                  isActive
                    ? 'text-white light:text-white'
                    : 'text-slate-400 light:text-slate-600 hover:text-slate-200 light:hover:text-slate-900'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-blue-600 rounded-full -z-10 shadow-sm"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop Right: Theme Toggle & Resume Action */}
        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <a
            href={personalData.resumeUrl}
            download="midhun_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-semibold rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/20 transition-all hover:scale-105 active:scale-95"
          >
            Resume
          </a>
        </div>

        {/* Mobile Right Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-full border border-white/10 light:border-black/10 bg-white/5 light:bg-black/5 text-slate-200 light:text-slate-800"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#0a0a0f]/95 light:bg-white/95 backdrop-blur-xl border-b border-white/10 light:border-black/10 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-medium py-2 px-4 rounded-lg transition-colors ${
                    activeSection === item.href.substring(1)
                      ? 'bg-blue-600/20 text-blue-400 font-semibold'
                      : 'text-slate-300 light:text-slate-700 hover:bg-white/5 light:hover:bg-black/5'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2 border-t border-white/10 light:border-black/10 mt-2">
                <a
                  href={personalData.resumeUrl}
                  download="MIDHUN_V_.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-center text-sm inline-block shadow-md shadow-blue-600/20"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
