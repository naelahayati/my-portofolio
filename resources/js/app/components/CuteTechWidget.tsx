import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Heart, Coffee, X, Code2, Terminal } from 'lucide-react';
import { useState } from 'react';
import confetti from 'canvas-confetti';

export function CuteTechWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);

  const cuteQuotes = [
    "✨ Fun Fact: Analis sistem merubah requirement rumit menjadi ERD & UI yang rapi!",
    "💖 Solusi terbaik adalah kombinasi logika backend yang andal & UI/UX yang cute!",
    "🚀 Belajar tanpa henti: Laravel, React, Figma, dan terus bertransformasi!",
    "☕ Didukung oleh kopi, minat pada teknologi, dan semangat belajar tinggi!"
  ];

  const handleSparkle = () => {
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { x: 0.9, y: 0.9 },
      colors: ['#F472B6', '#38BDF8', '#A855F7', '#FBBF24']
    });
    setQuoteIndex((prev) => (prev + 1) % cuteQuotes.length);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-16 right-0 w-80 bg-white/95 dark:bg-slate-900/95 border border-pink-400/30 rounded-3xl p-5 shadow-2xl backdrop-blur-xl z-50 text-slate-800 dark:text-slate-100"
          >
            <div className="flex items-center justify-between border-b border-border pb-3 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-indigo-500 flex items-center justify-center text-white text-xs font-bold shadow-md">
                  ✨
                </span>
                <div>
                  <h4 className="font-extrabold text-xs">Naela's Tech Sparkle</h4>
                  <p className="text-[10px] text-muted-foreground">Interactive Portfolio Companion</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground p-1 rounded-full hover:bg-muted"
              >
                <X size={16} />
              </button>
            </div>

            <p className="text-xs leading-relaxed text-muted-foreground mb-4 min-h-[44px]">
              {cuteQuotes[quoteIndex]}
            </p>

            <div className="flex items-center justify-between pt-2 border-t border-border/60">
              <span className="text-[10px] font-bold text-accent flex items-center gap-1">
                <Heart size={12} className="fill-accent" /> Cute & Professional
              </span>
              <button
                onClick={handleSparkle}
                className="px-3 py-1.5 rounded-full bg-gradient-to-r from-pink-500 to-sky-400 text-white font-bold text-xs shadow-md hover:scale-105 transition-transform flex items-center gap-1"
              >
                <Sparkles size={12} /> Sparkle!
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-12 h-12 rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-sky-400 text-white shadow-xl shadow-pink-500/25 flex items-center justify-center border-2 border-white/60 dark:border-slate-800"
        whileHover={{ scale: 1.15, rotate: 12 }}
        whileTap={{ scale: 0.9 }}
        title="Cute Portfolio Assistant"
      >
        <Sparkles size={20} className="animate-spin-slow" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white dark:border-slate-900 animate-pulse" />
      </motion.button>
    </div>
  );
}
