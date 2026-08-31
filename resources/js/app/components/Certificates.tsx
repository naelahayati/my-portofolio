import { motion, AnimatePresence } from 'motion/react';
import { Award, Expand, X, Sparkles } from 'lucide-react';
import { useState } from 'react';

export function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);

  const certificates = [
    {
      id: 1,
      title: 'Dicoding: Belajar Dasar Pemrograman Web',
      issuer: 'Dicoding Indonesia',
      date: '2023',
      image: '/sertifikat_1.png', // Placeholder URL
      gradient: 'from-blue-500 to-indigo-600',
    },
    {
      id: 2,
      title: 'Sertifikasi Analisis Sistem Basic',
      issuer: 'LSP',
      date: '2024',
      image: '/sertifikat_2.png', // Placeholder URL
      gradient: 'from-emerald-500 to-teal-600',
    },
    {
      id: 3,
      title: 'UI/UX Design Bootcamp',
      issuer: 'Skillvul',
      date: '2024',
      image: '/sertifikat_3.png', // Placeholder URL
      gradient: 'from-pink-500 to-rose-600',
    },
  ];

  const openLightbox = (cert: any) => {
    setSelectedCertificate(cert);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedCertificate(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="certificates" className="relative min-h-screen flex items-center justify-center px-4 md:px-6 py-24 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-10 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]"
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]"
          animate={{ y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase font-extrabold tracking-widest text-amber-500 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 inline-flex items-center gap-1.5 mb-3">
            <Award size={12} /> Achievements
          </span>
          <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Sertifikasi & Lisensi
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-secondary to-accent mx-auto mt-4 rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm md:text-base">
            Bukti kompetensi profesional dari berbagai institusi untuk mendukung keahlian pengembangan perangkat lunak.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative bg-white/40 dark:bg-slate-900/60 backdrop-blur-2xl border border-white/50 dark:border-white/10 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all cursor-pointer flex flex-col"
              onClick={() => openLightbox(cert)}
            >
              {/* Image Preview */}
              <div className="relative h-48 sm:h-56 overflow-hidden bg-slate-900 flex items-center justify-center p-4">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100 placeholder-image"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNlMGUwZTAiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjAiIGZpbGw9IiM2NjY2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5HYW1iYXIgU2VydGlmaWthdCB4PC90ZXh0Pjwvc3ZnPg=='; // fallback SVG
                  }}
                />
                
                {/* Expand Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="flex items-center gap-2 px-5 py-2.5 bg-white text-slate-900 font-extrabold text-xs rounded-full shadow-2xl">
                    <Expand size={14} /> Lihat Detail
                  </span>
                </div>
                
                {/* Icon Badge */}
                <div className={`absolute top-4 right-4 p-2.5 rounded-2xl bg-gradient-to-br ${cert.gradient} text-white shadow-lg`}>
                  <Award size={18} />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-base md:text-lg mb-2 text-foreground group-hover:text-amber-500 transition-colors line-clamp-2">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-4">
                    <span className="px-3 py-1 bg-white/70 dark:bg-slate-800/80 backdrop-blur-md text-foreground border border-secondary/20 dark:border-white/10 text-[10px] font-extrabold rounded-full flex items-center gap-1">
                      <Sparkles size={10} className="text-amber-500" />
                      {cert.issuer}
                    </span>
                    <span className="px-3 py-1 bg-muted/50 text-muted-foreground text-[10px] font-extrabold rounded-full">
                      {cert.date}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-xl"
            onClick={closeLightbox}
          >
            <motion.button
              className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-10"
              onClick={closeLightbox}
              whileHover={{ rotate: 90 }}
            >
              <X size={22} />
            </motion.button>

            <motion.div 
              className="relative w-full max-w-5xl h-[70vh] md:h-[80vh] flex flex-col items-center justify-center"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl border border-white/10"
                onError={(e) => {
                   (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNlMGUwZTAiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjAiIGZpbGw9IiM2NjY2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5HYW1iYXIgU2VydGlmaWthdCB4PC90ZXh0Pjwvc3ZnPg=='; // fallback SVG
                }}
              />
              <div className="mt-6 text-center">
                <h3 className="text-white font-black text-xl mb-1">{selectedCertificate.title}</h3>
                <p className="text-white/70 font-semibold">{selectedCertificate.issuer} ({selectedCertificate.date})</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
