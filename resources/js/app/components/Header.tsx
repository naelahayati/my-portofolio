import { Menu, X, Sparkles, Terminal } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from '../context/LanguageContext';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  const menuItems = [
    { id: 'home', label: t('header.home') },
    { id: 'about', label: t('header.about') },
    { id: 'skills', label: t('header.skills') },
    { id: 'projects', label: t('header.projects') },
    { id: 'modeling', label: t('header.modeling') },
    { id: 'certificates', label: t('header.certificates') },
    { id: 'contact', label: t('header.contact') },
  ];

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    menuItems.forEach(item => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false);

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
      setActiveSection(id);
    }
  };

  return (
    <motion.header
      className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 md:px-6"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className={`relative flex items-center justify-between gap-3 p-2 rounded-full border transition-all duration-500 max-w-5xl w-full ${
          scrolled
            ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl border-secondary/20 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)]'
            : 'bg-white/50 dark:bg-slate-900/40 backdrop-blur-md border-white/40 dark:border-white/10 shadow-sm'
        }`}
      >
        {/* Cute Brand / Logo */}
        <a
          href="#home"
          onClick={(e) => scrollToSection('home', e)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-secondary/10 transition-colors group"
        >
          <motion.div
            className="w-8 h-8 rounded-full bg-gradient-to-tr from-secondary via-primary to-accent flex items-center justify-center text-white font-black text-xs shadow-md"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            NH
          </motion.div>
          <span className="font-extrabold text-sm tracking-tight hidden sm:inline-block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Naela Hayati
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(item.id, e)}
              className={`relative px-4 py-2 rounded-full text-xs lg:text-sm font-bold transition-all duration-300 outline-none group ${
                activeSection === item.id
                  ? 'text-primary dark:text-sky-400'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeGlowPill"
                  className="absolute inset-0 bg-white dark:bg-slate-800 shadow-md border border-secondary/15 dark:border-white/10 rounded-full -z-10"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 28
                  }}
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-secondary/10 via-accent/10 to-primary/10 opacity-70" />
                </motion.div>
              )}
              <span className="flex items-center gap-1.5">
                {item.label}
                {activeSection === item.id && (
                  <motion.span
                    layoutId="activeDot"
                    className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"
                  />
                )}
              </span>
            </a>
          ))}
        </nav>

        {/* Right Action Tools (Theme Toggle + Language Toggle + Mobile Menu Toggle) */}
        <div className="flex items-center gap-2 pr-1">
          <LanguageToggle />
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white shadow-md"
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle Navigation Menu"
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            className="absolute top-full mt-3 w-[calc(100%-2rem)] max-w-sm bg-white/95 dark:bg-slate-900/95 border border-secondary/20 dark:border-white/10 rounded-3xl p-4 shadow-2xl backdrop-blur-2xl md:hidden z-50"
          >
            <div className="flex flex-col gap-1">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(item.id, e)}
                  className={`w-full text-left px-5 py-3 rounded-2xl text-sm font-bold transition-all flex items-center justify-between ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md'
                      : 'hover:bg-secondary/10 dark:hover:bg-white/5 text-muted-foreground'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Terminal size={14} className={activeSection === item.id ? 'text-white' : 'text-accent'} />
                    {item.label}
                  </span>
                  {activeSection === item.id && <Sparkles size={14} className="text-accent" />}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
