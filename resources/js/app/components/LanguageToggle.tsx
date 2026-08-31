import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.button
      type="button"
      onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
      className="relative w-14 h-8 rounded-full bg-secondary/10 dark:bg-slate-800 border border-secondary/20 dark:border-white/10 flex items-center p-1 shadow-inner overflow-hidden outline-none"
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle Language"
    >
      <div className="w-full flex justify-between px-1.5 text-[10px] font-black z-0">
        <span className={`${language === 'en' ? 'text-primary' : 'text-muted-foreground/50'}`}>EN</span>
        <span className={`${language === 'id' ? 'text-secondary' : 'text-muted-foreground/50'}`}>ID</span>
      </div>
      
      <motion.div
        className="absolute w-6 h-6 rounded-full bg-white dark:bg-slate-700 shadow-md flex items-center justify-center border border-secondary/20 z-10"
        initial={false}
        animate={{ 
          left: language === 'id' ? 'calc(100% - 1.75rem)' : '0.25rem'
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        <span className="text-[10px] font-black text-foreground">
          {language.toUpperCase()}
        </span>
      </motion.div>
    </motion.button>
  );
}
