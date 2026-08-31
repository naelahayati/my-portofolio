import { Sun, Moon, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark') || 
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-secondary/10 dark:bg-white/10 hover:bg-secondary/20 dark:hover:bg-white/20 border border-secondary/20 text-foreground transition-all duration-300 flex items-center justify-center group"
      whileHover={{ scale: 1.15, rotate: 15 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
      title={isDark ? "Switch to Tech Light Mode" : "Switch to Cyber Dark Mode"}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
      >
        {isDark ? (
          <Sun size={18} className="text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
        ) : (
          <Moon size={18} className="text-indigo-600 dark:text-sky-400 drop-shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
        )}
      </motion.div>
      <motion.div
        className="absolute -top-1 -right-1 text-accent opacity-0 group-hover:opacity-100 transition-opacity"
        animate={{ scale: [0.8, 1.2, 0.8] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <Sparkles size={10} />
      </motion.div>
    </motion.button>
  );
}
