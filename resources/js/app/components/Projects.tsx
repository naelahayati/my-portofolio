import { motion, AnimatePresence } from 'motion/react';
import { 
  ExternalLink, Github, ShoppingCart, GraduationCap, CheckSquare, 
  Sparkles, Expand, X, ChevronLeft, ChevronRight, Heart, Code2, Layers 
} from 'lucide-react';
import { useState } from 'react';
import confetti from 'canvas-confetti';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [likedProjects, setLikedProjects] = useState<Record<number, boolean>>({});

  const base = import.meta.env.BASE_URL;

  const projects = [
    {
      id: 1,
      title: 'Sistem Layanan Terpadu & Marketplace Naz Hidrofarm',
      category: 'Web App & E-Commerce',
      description: 'Platform digital satu pintu yang memudahkan operasional bisnis melalui otomatisasi transaksi dan manajemen stok akurat. Dilengkapi fitur reservasi layanan terintegrasi yang dirancang untuk memberikan kemudahan akses bagi pengguna dan efisiensi kerja bagi admin.',
      highlights: [
        'Integrasi Payment Gateway Midtrans',
        'Manajemen Stok Hidroponik Real-time',
        'Modul Reservasi & Konsultasi Layanan',
        'Laporan Transaksi & Analytics Admin'
      ],
      tags: ['PHP', 'Laravel', 'Bootstrap', 'JavaScript', 'MySQL', 'Midtrans'],
      image: [
        `${base}images/projects/3/1.png`, `${base}images/projects/3/2.png`, `${base}images/projects/3/3.png`, 
        `${base}images/projects/3/4.png`, `${base}images/projects/3/5.png`, `${base}images/projects/3/6.png`, 
        `${base}images/projects/3/7.png`, `${base}images/projects/3/8.png`
      ],
      gradient: 'from-emerald-500 to-teal-700',
      icon: Sparkles,
      githubUrl: 'https://github.com/naelahayati',
      liveUrl: 'https://nazfarm.vercel.app', // Placeholder, user will adjust if needed
    },
    {
      id: 2,
      title: 'Sistem Penjualan & Manajemen Stok Kebab Aba Zaid',
      category: 'POS & Inventory System',
      description: 'Platform digital yang memudahkan operasional harian melalui manajemen stok bahan baku yang terintegrasi. Sistem ini menyederhanakan rantai pasok dan mempercepat proses transaksi menggunakan modul kasir (POS) yang responsif untuk hasil laporan penjualan yang lebih akurat.',
      highlights: [
        'Modul Kasir (POS) Transaksi Cepat',
        'Pencatatan Rantai Pasok Bahan Baku',
        'Laporan Harian, Mingguan & Bulanan',
        'Antarmuka Responsif & User Friendly'
      ],
      tags: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'CSS', 'HTML'],
      image: [
        `${base}images/projects/2/a1.png`, `${base}images/projects/2/a2.png`, `${base}images/projects/2/a3.png`, 
        `${base}images/projects/2/a4.png`, `${base}images/projects/2/a5.png`, `${base}images/projects/2/a6.png`, 
        `${base}images/projects/2/a7.png`, `${base}images/projects/2/a8.png`
      ],
      gradient: 'from-amber-500 to-red-600',
      icon: ShoppingCart,
      githubUrl: 'https://github.com/naelahayati',
    },
    {
      id: 3,
      title: 'Sistem Pencatatan Stok & Keuntungan Usaha Berbasis VBA',
      category: 'Business Automation & Analytics',
      description: 'Sistem pencatatan stok otomatis berbasis VBA Excel yang dirancang untuk mendigitalisasi seluruh alur manajemen transaksi dan persediaan barang secara real-time. Solusi ini menggantikan pencatatan manual yang rawan kesalahan menjadi proses terstruktur.',
      highlights: [
        'Otomatisasi Input & Output Stok VBA',
        'Kalkulasi Keuntungan Usaha Otomatis',
        'Dashboard Ringkasan Transaksi',
        'Export Laporan Spreadsheet Rapi'
      ],
      tags: ['VBA Excel', 'Data Analysis', 'Automation', 'Spreadsheet'],
      image: [
        `${base}images/projects/1/11.png`, `${base}images/projects/1/00.png`, `${base}images/projects/1/22.png`, 
        `${base}images/projects/1/33.png`, `${base}images/projects/1/44.png`, `${base}images/projects/1/55.png`, 
        `${base}images/projects/1/66.png`, `${base}images/projects/1/77.png`, `${base}images/projects/1/88.png`, 
        `${base}images/projects/1/99.png`, `${base}images/projects/1/a11.png`, `${base}images/projects/1/a22.png`
      ],
      gradient: 'from-indigo-600 to-purple-600',
      icon: CheckSquare,
      githubUrl: 'https://github.com/naelahayati',
    },
  ];

  const triggerLikeConfetti = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setLikedProjects(prev => ({ ...prev, [id]: !prev[id] }));
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#EC4899', '#F472B6', '#38BDF8']
    });
  };

  const openLightbox = (project: any) => {
    if (project.image && project.image.length > 0) {
      setSelectedProject(project);
      setCurrentImageIndex(0);
      document.body.style.overflow = 'hidden';
    }
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.image.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.image.length) % selectedProject.image.length);
    }
  };

  return (
    <section id="projects" className="relative min-h-screen flex items-center justify-center px-4 md:px-6 py-24 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[120px]"
          animate={{ y: [0, 80, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[120px]"
          animate={{ y: [0, -80, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
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
          <span className="text-xs uppercase font-extrabold tracking-widest text-pink-500 bg-pink-500/10 px-3 py-1 rounded-full border border-pink-500/20 inline-flex items-center gap-1.5 mb-3">
            <Sparkles size={12} /> Showcased Works
          </span>
          <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Proyek Unggulan
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-secondary to-accent mx-auto mt-4 rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm md:text-base">
            Hasil karya rekayasa sistem dan aplikasi web yang telah dibangun dengan standar kualitas profesional.
          </p>
        </motion.div>

        {/* Projects Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative bg-card border border-border rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-secondary/20 transition-all flex flex-col justify-between cursor-pointer"
              onClick={() => openLightbox(project)}
            >
              {/* Image Preview Banner */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image[0]} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* Category Badge Top Left */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold rounded-full border border-white/20">
                  {project.category}
                </div>

                {/* Icon Badge Top Right */}
                <div className={`absolute top-4 right-4 p-2.5 rounded-2xl bg-gradient-to-br ${project.gradient} text-white shadow-lg`}>
                  <project.icon size={18} />
                </div>

                {/* Expand Overlay Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="flex items-center gap-2 px-5 py-2.5 bg-white text-slate-900 font-extrabold text-xs rounded-full shadow-2xl">
                    <Expand size={14} /> Preview Gallery ({project.image.length})
                  </span>
                </div>
              </div>

              {/* Card Body Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-lg mb-2 text-foreground group-hover:text-secondary transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Key Highlights Bullet points */}
                  <div className="space-y-1 mb-6">
                    {project.highlights.slice(0, 2).map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] text-foreground font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Tags & Footer */}
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        className="px-3 py-1.5 rounded-full bg-white/70 dark:bg-slate-800/80 backdrop-blur-md text-foreground border border-secondary/20 dark:border-white/10 text-[11px] font-extrabold flex items-center gap-1 hover:border-pink-400 hover:text-pink-500 transition-colors shadow-xs"
                        whileHover={{ scale: 1.06, y: -2 }}
                      >
                        <Sparkles size={10} className="text-pink-400" />
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border/60" onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github size={14} /> Repositori
                      </a>
                      
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all"
                        >
                          <ExternalLink size={14} /> Web Nazfarm
                        </a>
                      )}
                    </div>

                    {/* Cute Like Button */}
                    <button
                      type="button"
                      onClick={(e) => triggerLikeConfetti(e, project.id)}
                      className={`p-2 rounded-full border transition-all flex items-center gap-1 text-xs font-bold ${
                        likedProjects[project.id]
                          ? 'bg-pink-500/10 text-pink-500 border-pink-500/30'
                          : 'bg-card text-muted-foreground border-border hover:border-pink-400'
                      }`}
                    >
                      <Heart size={14} className={likedProjects[project.id] ? 'fill-pink-500 text-pink-500' : ''} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedProject && (
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
              {/* Image Carousel Container */}
              <motion.div 
                className="relative w-full h-[60vh] md:h-[65vh] flex items-center justify-center"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                onClick={(e) => e.stopPropagation()}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={selectedProject.image[currentImageIndex]}
                    alt={selectedProject.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                    className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl border border-white/10"
                  />
                </AnimatePresence>

                {/* Arrow Controls */}
                {selectedProject.image.length > 1 && (
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

              {/* Bottom Thumbnail Bar & Info */}
              <motion.div 
                className="mt-4 text-center text-white max-w-2xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="font-extrabold text-base md:text-lg text-white mb-1">
                  {selectedProject.title} ({currentImageIndex + 1} / {selectedProject.image.length})
                </h3>

                {/* Thumbnail dots */}
                <div className="flex gap-1.5 justify-center items-center mt-3 max-w-full overflow-x-auto py-2">
                  {selectedProject.image.map((img: string, i: number) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImageIndex(i)}
                      className={`w-10 h-10 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                        i === currentImageIndex ? 'border-sky-400 scale-110' : 'border-white/20 opacity-50'
                      }`}
                    >
                      <img src={img} alt="thumb" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
