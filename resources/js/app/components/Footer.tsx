import { Heart, Sparkles, Github, Linkedin, MessageCircle, ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-border bg-card/60 backdrop-blur-md relative z-10">
      <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <span className="font-black text-lg tracking-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Naela Hayati
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-secondary/15 text-secondary font-bold">
              UI/UX
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Naela Hayati. {t('footer.rights')}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/naelahayati"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/20 transition-colors"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/naela-hayati-684265288"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-sky-500 hover:bg-sky-500/20 transition-colors"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="https://wa.me/6283116322755"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-emerald-500 hover:bg-emerald-500/20 transition-colors"
          >
            <MessageCircle size={16} />
          </a>

          <motion.button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-gradient-to-r from-primary to-secondary text-white flex items-center justify-center shadow-md ml-2"
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.9 }}
            title={t('footer.back_to_top')}
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
