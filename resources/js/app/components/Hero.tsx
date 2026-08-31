import { motion } from 'motion/react';
import {
  Github, Linkedin, Mail, Sparkles, Code2, Database, MessageCircle,
  Terminal, Download, Cpu, Layers, Palette, ArrowRight, Heart, Eye, ShieldCheck
} from 'lucide-react';
import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../context/LanguageContext';

function TypingText({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayText(text.substring(0, i));
      i++;
      if (i > text.length) i = 0;
    }, 120);

    return () => clearInterval(timer);
  }, [text]);

  return <span>{displayText}</span>;
}

export function Hero() {
  const { t } = useLanguage();
  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#38BDF8', '#F472B6', '#6366F1', '#3B82F6']
    });
  };

  const techStack = [
    { name: 'System Analysis', icon: Database, color: 'text-sky-500' },
    { name: 'UML & ERD', icon: Layers, color: 'text-indigo-500' },
    { name: 'Laravel & PHP', icon: Code2, color: 'text-rose-500' },
    { name: 'React & Vite', icon: Cpu, color: 'text-cyan-400' },
    { name: 'UI/UX & Figma', icon: Palette, color: 'text-pink-500' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-4 md:px-6 pt-32 pb-16 overflow-hidden">
      {/* Dynamic Futuristic Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-secondary/20 via-primary/10 to-accent/20 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [-30, 30, -30],
            y: [-20, 20, -20],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-gradient-to-br from-accent/20 via-secondary/15 to-indigo-500/10 rounded-full blur-[90px]"
          animate={{
            scale: [1, 1.25, 1],
            x: [30, -30, 30],
            y: [20, -20, 20],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10 w-full">
        {/* Cute Tech Terminal Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 dark:bg-slate-900/95 text-white text-xs md:text-sm font-mono border border-secondary/30 shadow-xl mb-8 group hover:border-accent/50 transition-colors"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-sky-400 font-bold flex items-center gap-1">
            <Terminal size={14} /> sys.status
          </span>
          <span className="text-slate-600">|</span>
          <span className="bg-gradient-to-r from-sky-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent font-medium">
            {t('hero.status')}
          </span>
        </motion.div>

        {/* Main Typing Banner */}
        <motion.div
          className="mb-8 min-h-[90px] md:min-h-[110px] flex items-center justify-center px-2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent inline-block drop-shadow-sm">
              <TypingText text={t('hero.typing')} />
            </span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-1.5 h-8 md:h-12 bg-accent ml-2 align-middle shadow-[0_0_12px_rgba(244,114,182,0.8)]"
            />
          </h2>
        </motion.div>

        {/* Avatar Container with Cute Floating Tech Badges */}
        <motion.div
          className="mb-10 relative inline-block"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            className="relative w-44 h-44 md:w-52 md:h-52 mx-auto cursor-pointer"
            onClick={triggerConfetti}
            whileHover={{ scale: 1.05 }}
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Outer Cyber Glow Ring */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-sky-400 via-indigo-500 to-pink-500 rounded-full blur-xl opacity-70 animate-pulse" />

            {/* Profile Avatar Frame */}
            <div className="relative w-full h-full rounded-full p-1.5 bg-gradient-to-br from-primary via-secondary to-accent shadow-2xl overflow-hidden group">
              <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center overflow-hidden border-4 border-white/80 dark:border-slate-800 relative">
                <img
                  src="/profil.png"
                  alt="Naela Hayati - UI/UX Designer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                  <span className="text-[11px] bg-black/70 text-white px-2.5 py-1 rounded-full font-bold backdrop-blur-md flex items-center gap-1">
                    <Sparkles size={12} className="text-pink-400" /> {t('hero.click_magic')}
                  </span>
                </div>
              </div>
            </div>

            {/* Cute Floating Badge Left */}
            <motion.div
              className="absolute -top-2 -left-6 bg-white dark:bg-slate-800 text-slate-800 dark:text-white px-3 py-1.5 rounded-2xl shadow-xl border border-secondary/20 flex items-center gap-1.5 text-xs font-bold"
              animate={{ rotate: [-3, 3, -3], y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Palette size={14} className="text-pink-500" />
              <span>UI/UX</span>
            </motion.div>

            {/* Cute Floating Badge Right - QA */}
            <motion.div
              className="absolute -top-1 -right-8 bg-white dark:bg-slate-800 text-slate-800 dark:text-white px-3 py-1.5 rounded-2xl shadow-xl border border-emerald-500/30 flex items-center gap-1.5 text-xs font-bold"
              animate={{ rotate: [3, -3, 3], y: [0, -5, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ShieldCheck size={14} className="text-emerald-500" />
              <span>QA</span>
            </motion.div>

            {/* Cute Floating Badge Bottom Right - System Analysis */}
            <motion.div
              className="absolute bottom-6 -right-12 md:-right-16 bg-white dark:bg-slate-800 text-slate-800 dark:text-white px-3 py-1.5 rounded-2xl shadow-xl border border-sky-500/30 flex items-center gap-1.5 text-xs font-bold"
              animate={{ rotate: [-2, 2, -2], x: [0, 4, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Database size={14} className="text-sky-500" />
              <span className="hidden sm:inline">System Analysis</span>
              <span className="sm:hidden">Sys. Analis</span>
            </motion.div>

            {/* Cute Floating Badge Bottom */}
            
          </motion.div>
        </motion.div>

        {/* Intro Subheadings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-3"
        >
          <p className="text-lg md:text-xl text-muted-foreground font-light">
            {t('hero.greeting')} <span className="font-bold text-foreground">Naela Hayati</span> 👋
          </p>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">
            {t('hero.role')} <span className="bg-gradient-to-r from-secondary via-indigo-500 to-accent bg-clip-text text-transparent">{t('hero.role_highlight')}</span>
          </h1>
        </motion.div>

        {/* Bio summary */}
        <motion.p
          className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mt-4 mb-8 leading-relaxed font-normal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {t('hero.bio')}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center items-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.a
            href="mailto:naelahayatii@gmail.com"
            onClick={(e) => {
              e.preventDefault();
              triggerConfetti();
              window.location.href = "mailto:naelahayatii@gmail.com";
            }}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-primary via-secondary to-accent text-white rounded-full font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-accent/40 transition-all cursor-pointer"
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={18} />
            <span>{t('hero.contact_me')}</span>
            <Sparkles size={16} className="text-yellow-300" />
          </motion.a>

          <motion.a
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white dark:bg-slate-800 text-foreground border-2 border-secondary/30 dark:border-white/10 rounded-full font-bold shadow-md hover:border-secondary hover:bg-secondary/10 transition-all"
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>{t('hero.view_projects')}</span>
            <ArrowRight size={18} className="text-secondary" />
          </motion.a>

          <motion.a
            href="/cv_naela_hayati.pdf" // Placeholder link to CV
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-muted/50 text-foreground border-2 border-border dark:border-white/10 rounded-full font-bold shadow-sm hover:border-primary hover:text-primary transition-all cursor-pointer"
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Eye size={18} />
            <span>{t('hero.view_cv')}</span>
          </motion.a>
        </motion.div>

        {/* Social Quick Links */}
        <motion.div
          className="flex gap-4 justify-center items-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <motion.a
            href="https://github.com/naelahayati"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
            className="w-11 h-11 flex items-center justify-center rounded-full bg-card border border-border text-muted-foreground hover:text-primary dark:hover:text-white hover:border-primary hover:shadow-lg transition-all"
            whileHover={{ scale: 1.15, rotate: 8 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github size={20} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/naela-hayati-684265288"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
            className="w-11 h-11 flex items-center justify-center rounded-full bg-card border border-border text-muted-foreground hover:text-sky-500 hover:border-sky-500 hover:shadow-lg transition-all"
            whileHover={{ scale: 1.15, rotate: -8 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin size={20} />
          </motion.a>
          <motion.a
            href="https://wa.me/6283116322755"
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp Contact"
            className="w-11 h-11 flex items-center justify-center rounded-full bg-card border border-border text-muted-foreground hover:text-emerald-500 hover:border-emerald-500 hover:shadow-lg transition-all"
            whileHover={{ scale: 1.15, rotate: 8 }}
            whileTap={{ scale: 0.9 }}
          >
            <MessageCircle size={20} />
          </motion.a>
        </motion.div>

        {/* Tech Stack Ticker Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="pt-8 border-t border-border/60 max-w-4xl mx-auto"
        >
          <p className="text-xs uppercase font-extrabold tracking-widest text-muted-foreground mb-4">
            {t('hero.ecosystem')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-secondary/20 dark:border-white/10 shadow-md text-xs font-bold text-foreground hover:border-secondary hover:shadow-lg hover:shadow-secondary/20 transition-all cursor-default"
                whileHover={{ scale: 1.08, y: -3 }}
              >
                <tech.icon size={15} className={tech.color} />
                <span>{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
