import React from 'react';
import { motion } from 'motion/react';
import { Search } from 'lucide-react';
import { AppleLogo } from './Primitives';

const menuItems = ['File', 'Edit', 'View', 'Go', 'Window', 'Help'];

export const MacOSMenuBar: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.9, ease: 'easeOut' }}
      className="h-10 bg-black/40 backdrop-blur-md border-t border-b border-white/10 relative z-20"
    >
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between text-xs text-white/70">
        {/* Left menu items */}
        <div className="flex items-center gap-4">
          <AppleLogo className="w-3.5 h-3.5 text-white" />
          <span className="font-bold text-white">Aura</span>
          <div className="flex items-center gap-4">
            {menuItems.map((item, index) => {
              let visibilityClass = '';
              if (index > 3) {
                visibilityClass = 'hidden md:inline';
              } else if (index > 2) {
                visibilityClass = 'hidden sm:inline';
              }
              return (
                <span key={item} className={`hover:text-white cursor-default ${visibilityClass}`}>
                  {item}
                </span>
              );
            })}
          </div>
        </div>

        {/* Right date & search */}
        <div className="flex items-center gap-4">
          <Search className="w-3.5 h-3.5 text-white/60 hover:text-white cursor-pointer" />
          <span className="text-white/80 font-medium">Wed May 6 1:09 PM</span>
        </div>
      </div>
    </motion.div>
  );
};
