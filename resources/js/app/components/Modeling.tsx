import { motion, AnimatePresence } from 'motion/react';
import { 
  Database, GitGraph, Users, Expand, X, ChevronLeft, ChevronRight, 
  Sparkles, Layers, ShieldCheck, FileCode, CheckCircle2, ExternalLink
} from 'lucide-react';
import { useState } from 'react';

export function Modeling() {
  const [selectedModel, setSelectedModel] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const models = [
    {
      id: 'erd',
      title: 'Entity Relationship Diagram (ERD)',
      category: 'Database Architecture',
      description: 'Perancangan struktur basis data terelasi yang optimal untuk menjamin integritas data, efisiensi query SQL, serta pencegahan redundansi data melalui normalisasi logis.',
      image: ['/images/modeling/erd.png', '/images/modeling/erd2.jpeg'],
      icon: Database,
      gradient: 'from-sky-500 to-indigo-600',
      specs: [
        'Relasi 1:N & N:M antar Entitas',
        'Kunci Utama (PK) & Kunci Asing (FK)',
        'Integritas Data Transaksional',
        'Normalisasi Database Form (1NF-3NF)'
      ],
      tags: ['Database Design', 'Relational Mapping', 'SQL Integrity']
    },
    {
      id: 'flowchart',
      title: 'System Flowchart & Alur Logika',
      category: 'Process Logic Mapping',
      description: 'Pemetaan alur kerja sistem secara detail untuk memvisualisasikan proses bisnis dari input data, validasi logika, pengolahan sistem, hingga pembentukan laporan akhir.',
      image: [
        '/images/modeling/flowchart.png', '/images/modeling/flowchart2.png', 
        '/images/modeling/flowchart3.png', '/images/modeling/flowchart4.png'
      ],
      icon: GitGraph,
      gradient: 'from-amber-500 to-rose-600',
      specs: [
        'Alur Logika Transaksi POS & Marketplace',
        'Percabangan Keputusan System Logic',
        'Input Data & Output Laporan',
        'Pengelolaan Status User & Admin'
      ],
      tags: ['Process Mapping', 'Logic Flow', 'Business Rules']
    },
    {
      id: 'usecase',
      title: 'Use Case Diagram',
      category: 'Functional Specification',
      description: 'Definisi interaksi antara aktor (Pengguna, Admin, Kasir) dengan sistem untuk mendokumentasikan batasan fungsionalitas utama yang wajib disediakan aplikasi.',
      image: ['/images/modeling/usecase.png'],
      icon: Users,
      gradient: 'from-purple-500 to-pink-500',
      specs: [
        'Pemetaan Peran Aktor & Hak Akses',
        'Definisi Batasan Fungsional Sistem',
        'Relasi Include & Extend Use Case',
        'Dokumentasi Spesifikasi SRS'
      ],
      tags: ['Actor Interaction', 'Requirement Analysis', 'System Scope']
    },
  ];

  const openLightbox = (model: any) => {
    setSelectedModel(model);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedModel(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedModel) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedModel.image.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedModel) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedModel.image.length) % selectedModel.image.length);
    }
  };

  return (
    <section id="modeling" className="relative min-h-screen flex items-center justify-center px-4 md:px-6 py-24 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
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
          <span className="text-xs uppercase font-extrabold tracking-widest text-indigo-500 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20 inline-flex items-center gap-1.5 mb-3">
            <Layers size={12} /> System Engineering Specs
          </span>
          <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Pemodelan & Analisis Sistem
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-secondary to-accent mx-auto mt-4 rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm md:text-base mb-6">
            Dokumentasi diagram perancangan terstruktur untuk memastikan keandalan alur sistem informasi.
          </p>

          <a
            href="https://drive.google.com" // Placeholder for Google Drive URL
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 border border-secondary/20 dark:border-white/10 hover:border-sky-500 hover:dark:border-sky-400 rounded-full text-sm font-bold shadow-md hover:shadow-xl hover:shadow-sky-500/10 hover:-translate-y-1 transition-all text-foreground hover:text-sky-500 hover:dark:text-sky-400"
          >
            <Database size={18} /> Folder Google Drive (Dokumen Lengkap) <ExternalLink size={16} />
          </a>
        </motion.div>

        {/* Modeling Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative bg-card border border-border rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-primary/15 transition-all flex flex-col justify-between cursor-pointer"
              onClick={() => openLightbox(model)}
            >
              {/* Top Banner & Diagram Preview */}
              <div className="relative h-60 overflow-hidden bg-slate-900">
                <img 
                  src={model.image[0]} 
                  alt={model.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                
                {/* Category Badge Top Left */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold rounded-full border border-white/20">
                  {model.category}
                </div>

                {/* Icon Badge Top Right */}
                <div className={`absolute top-4 right-4 p-2.5 rounded-2xl bg-gradient-to-br ${model.gradient} text-white shadow-lg`}>
                  <model.icon size={18} />
                </div>

                {/* Expand Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="flex items-center gap-2 px-5 py-2.5 bg-white text-slate-900 font-extrabold text-xs rounded-full shadow-2xl">
                    <Expand size={14} /> Lihat Diagram ({model.image.length})
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                    {model.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-4 line-clamp-3">
                    {model.description}
                  </p>

                  {/* Technical Specs List */}
                  <div className="space-y-1.5 mb-6 bg-muted/40 p-3 rounded-2xl border border-border/50">
                    <span className="text-[10px] uppercase font-bold text-secondary tracking-wider block mb-1">Spesifikasi Logis</span>
                    {model.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[11px] text-foreground font-medium">
                        <CheckCircle2 size={12} className="text-emerald-500 shrink-0" />
                        <span className="truncate">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {model.tags.map((tag, tIndex) => (
                    <span 
                      key={tIndex} 
                      className="px-3 py-1 rounded-full text-[11px] font-bold text-foreground bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-secondary/20 dark:border-white/10 flex items-center gap-1.5 shadow-xs hover:border-sky-400 transition-colors"
                    >
                      <Sparkles size={10} className="text-sky-400" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedModel && (
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

            <div className="relative w-full max-w-5xl max-h-[90vh] flex flex-col items-center justify-center">
              <motion.div 
                className="relative w-full h-[60vh] md:h-[65vh] flex items-center justify-center"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                onClick={(e) => e.stopPropagation()}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={selectedModel.image[currentImageIndex]}
                    alt={selectedModel.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                    className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl border border-white/10 bg-slate-950 p-2"
                  />
                </AnimatePresence>

                {selectedModel.image.length > 1 && (
                  <>
                    <button
                      className="absolute left-2 md:left-4 p-3 bg-black/60 hover:bg-black/80 text-white rounded-full transition-colors border border-white/20 backdrop-blur-md"
                      onClick={prevImage}
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      className="absolute right-2 md:right-4 p-3 bg-black/60 hover:bg-black/80 text-white rounded-full transition-colors border border-white/20 backdrop-blur-md"
                      onClick={nextImage}
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}
              </motion.div>

              <motion.div 
                className="mt-4 text-center text-white max-w-2xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="font-extrabold text-base md:text-lg text-white mb-1">
                  {selectedModel.title} ({currentImageIndex + 1} / {selectedModel.image.length})
                </h3>
                {selectedModel.image.length > 1 && (
                  <div className="flex gap-2 justify-center mt-2">
                    {selectedModel.image.map((_: any, i: number) => (
                      <button
                        key={i}
                        onClick={() => setCurrentImageIndex(i)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                          i === currentImageIndex ? 'w-8 bg-sky-400' : 'bg-white/30'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
