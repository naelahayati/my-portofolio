import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, Database, Sparkles, Star, Layers, Palette, Terminal, 
  CheckCircle2, Cpu, Wrench, ShieldAlert
} from 'lucide-react';
import { useState } from 'react';

export function Skills() {
  const [activeTab, setActiveTab] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Semua Keahlian' },
    { id: 'analysis', label: 'Analisis Sistem' },
    { id: 'web', label: 'Pengembangan Web' },
    { id: 'design', label: 'Desain UI/UX & Tools' },
  ];

  const skillData = [
    {
      category: 'analysis',
      name: 'UML (Use Case, Sequence, Activity)',
      level: 92,
      badge: 'Expert',
      icon: Layers,
      color: 'from-sky-500 to-blue-600',
      description: 'Pemodelan dokumentasi fungsionalitas & interaksi komponen sistem.',
    },
    {
      category: 'analysis',
      name: 'Flowchart & Business Process',
      level: 95,
      badge: 'Master',
      icon: Terminal,
      color: 'from-blue-600 to-indigo-600',
      description: 'Perancangan alur kerja bisnis secara menyeluruh dan akurat.',
    },
    {
      category: 'analysis',
      name: 'ERD & Database Modeling',
      level: 90,
      badge: 'Expert',
      icon: Database,
      color: 'from-indigo-500 to-purple-600',
      description: 'Perancangan skema relasi antar entitas & normalisasi database.',
    },
    {
      category: 'analysis',
      name: 'StarUML & Draw.io',
      level: 88,
      badge: 'Advanced',
      icon: Wrench,
      color: 'from-cyan-500 to-sky-600',
      description: 'Alat perancangan diagram teknis dan dokumentasi perangkat lunak.',
    },
    {
      category: 'web',
      name: 'Laravel Framework',
      level: 88,
      badge: 'Advanced',
      icon: Code2,
      color: 'from-rose-500 to-red-600',
      description: 'Pengembangan arsitektur backend MVC, Eloquent ORM & RESTful API.',
    },
    {
      category: 'web',
      name: 'PHP & MySQL',
      level: 90,
      badge: 'Expert',
      icon: Database,
      color: 'from-indigo-500 to-sky-600',
      description: 'Pemrograman backend server-side & manipulasi query basis data.',
    },
    {
      category: 'web',
      name: 'Tailwind CSS & Bootstrap',
      level: 86,
      badge: 'Advanced',
      icon: Palette,
      color: 'from-sky-400 to-indigo-500',
      description: 'Perancangan layout antarmuka yang responsif, elegan & fluid.',
    },
    {
      category: 'web',
      name: 'VBA Excel Automation',
      level: 85,
      badge: 'Advanced',
      icon: Cpu,
      color: 'from-emerald-500 to-teal-600',
      description: 'Otomatisasi pemrosesan data & pelaporan bisnis berbasis spreadsheet.',
    },
    {
      category: 'design',
      name: 'Figma Prototyping',
      level: 92,
      badge: 'Expert',
      icon: Sparkles,
      color: 'from-pink-500 to-rose-500',
      description: 'Perancangan wireframe high-fidelity & desain sistem interaktif.',
    },
    {
      category: 'design',
      name: 'UI/UX & User Centric Design',
      level: 90,
      badge: 'Expert',
      icon: Palette,
      color: 'from-purple-500 to-pink-500',
      description: 'Penerapan konsistensi visual, aksesibilitas, & kemudahan interaksi.',
    },
    {
      category: 'design',
      name: 'Visual Hierarchy & Layout',
      level: 85,
      badge: 'Advanced',
      icon: Layers,
      color: 'from-violet-500 to-indigo-500',
      description: 'Penataan elemen visual yang estetik, rapi, dan mudah dibaca.',
    },
  ];

  const softSkills = [
    'Analisis Masalah Logis',
    'Komunikasi Teknis',
    'Kolaborasi Tim Agile',
    'Manajemen Waktu & Target',
    'Ketelitian Data & Detail',
    'Adaptabilitas Teknologi Baru'
  ];

  const filteredSkills = activeTab === 'all' 
    ? skillData 
    : skillData.filter(s => s.category === activeTab);

  return (
    <section id="skills" className="relative min-h-screen flex items-center justify-center px-4 md:px-6 py-24 overflow-hidden">
      {/* Background Dot Grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #38BDF8 1px, transparent 1px)',
          backgroundSize: '36px 36px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs uppercase font-extrabold tracking-widest text-sky-500 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20 inline-flex items-center gap-1.5 mb-3">
            <Cpu size={12} /> Tech Stack & Tools
          </span>
          <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Keahlian & Kemahiran
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-secondary to-accent mx-auto mt-4 rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm md:text-base">
            Kombinasi kemampuan rekayasa sistem, pengembangan web, serta keahlian desain UI/UX.
          </p>
        </motion.div>

        {/* Ultra-Modern Segmented Glass Tab Control */}
        <div className="flex justify-center mb-14 px-2">
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-2 rounded-full bg-slate-900/10 dark:bg-slate-900/80 backdrop-blur-xl border border-secondary/20 dark:border-white/10 shadow-xl">
            {categories.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-5 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 flex items-center gap-2 outline-none group cursor-pointer ${
                    isActive
                      ? 'text-white'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary/10 dark:hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSkillSegment"
                      className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full shadow-lg shadow-secondary/25 -z-10"
                      transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                    >
                      <div className="absolute inset-0 rounded-full bg-white/20 blur-xs" />
                    </motion.div>
                  )}
                  {tab.id === 'all' && <Sparkles size={14} className={isActive ? 'text-yellow-300' : 'text-pink-400'} />}
                  {tab.id === 'analysis' && <Layers size={14} className={isActive ? 'text-white' : 'text-sky-400'} />}
                  {tab.id === 'web' && <Code2 size={14} className={isActive ? 'text-white' : 'text-indigo-400'} />}
                  {tab.id === 'design' && <Palette size={14} className={isActive ? 'text-white' : 'text-pink-400'} />}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="bg-card border border-border rounded-3xl p-6 shadow-md hover:shadow-xl hover:shadow-secondary/15 transition-all relative overflow-hidden group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className={`w-11 h-11 bg-gradient-to-br ${skill.color} rounded-2xl flex items-center justify-center text-white shadow-md`}>
                      <skill.icon size={22} />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-secondary/10 text-secondary border border-secondary/20">
                      {skill.badge}
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-foreground mb-1">{skill.name}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                    {skill.description}
                  </p>
                </div>

                {/* Progress bar */}
                <div>
                  <div className="flex justify-between items-center text-xs font-bold mb-1.5">
                    <span className="text-muted-foreground">Kemahiran</span>
                    <span className="text-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden p-0.5">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Soft Skills Pill Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-3xl p-8 text-center shadow-lg"
        >
          <h3 className="text-lg font-bold mb-4 flex items-center justify-center gap-2">
            <CheckCircle2 size={20} className="text-emerald-500" />
            <span>Kompetensi & Nilai Tambah</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((soft, i) => (
              <span 
                key={i}
                className="px-4 py-2 rounded-full bg-muted/60 text-foreground text-xs font-bold border border-border/80 flex items-center gap-1.5 hover:border-accent/40 transition-colors"
              >
                <Sparkles size={12} className="text-pink-400" />
                {soft}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
