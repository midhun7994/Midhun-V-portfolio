import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'motion/react';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="p-2.5 rounded-full border border-white/10 dark:border-white/10 light:border-black/10 bg-white/5 dark:bg-white/5 light:bg-black/5 text-slate-200 dark:text-slate-200 light:text-slate-800 hover:border-blue-500/50 transition-colors flex items-center justify-center"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 text-amber-400" />
      ) : (
        <Moon className="w-4 h-4 text-blue-600" />
      )}
    </motion.button>
  );
};
