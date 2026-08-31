import { motion } from 'motion/react';
import { GraduationCap, Code, Lightbulb, Rocket, Target, Zap, CheckCircle2, ShieldCheck, Heart, Sparkles, Cpu, Layers, ExternalLink, Briefcase } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function About() {
  const { t } = useLanguage();

  const education = [
    {
      institution: 'Politeknik Negeri Subang',
      url: 'https://www.instagram.com/politekniknegerisubang/',
      degree: 'D3 Sistem Informasi (2024 - Sekarang)',
      description: 'Mendalami analisis kebutuhan bisnis, pemodelan sistem (UML/ERD), manajemen basis data, serta pengembangan aplikasi berbasis web. Aktif mengembangkan solusi perangkat lunak yang solutif.',
      gradient: 'from-blue-600 to-indigo-500',
      badge: 'Perguruan Tinggi Vokasi',
      icon: GraduationCap,
      delay: 0.1,
    },
    {
      institution: 'SMA Negeri 4 Subang',
      url: 'https://www.instagram.com/sman4subang_official/',
      degree: 'Jurusan MIPA (Matematika & IPA)',
      description: 'Membangun pemikiran analitis, pemecahan masalah secara terstruktur, dan disiplin eksakta sebagai fondasi logika dalam dunia rekayasa sistem informasi.',
      gradient: 'from-pink-500 to-rose-400',
      badge: 'Pendidikan Menengah',
      icon: GraduationCap,
      delay: 0.2,
    },
  ];

  const experience = [
    {
      company: 'PT Indihealth',
      url: 'https://www.instagram.com/indihealth/',
      role: 'Quality Assurance (QA) Intern',
      period: 'Sekarang',
      description: 'Bertanggung jawab dalam merancang dan mengeksekusi skenario pengujian perangkat lunak, mendeteksi bug, memastikan fungsionalitas sistem berjalan sesuai spesifikasi (SRS), dan menjaga standar kualitas UI/UX sebelum tahap rilis.',
      gradient: 'from-emerald-500 to-teal-500',
      badge: 'Internship (Magang)',
      icon: Briefcase,
      delay: 0.1,
    }
  ];

  const workflowSteps = [
    {
      num: '01',
      title: 'Analisis & Identifikasi',
      desc: 'Menganalisis kebutuhan pengguna, memetakan proses bisnis, dan menyusun spesifikasi kebutuhan sistem (SRS).',
      icon: Target,
      color: 'text-sky-500 border-sky-500/30 bg-sky-500/10',
    },
    {
      num: '02',
      title: 'Pemodelan Logis',
      desc: 'Merancang alur logika sistem melalui Flowchart, ERD database, dan Use Case Diagram yang terstruktur.',
      icon: Layers,
      color: 'text-indigo-500 border-indigo-500/30 bg-indigo-500/10',
    },
    {
      num: '03',
      title: 'UI/UX Prototyping',
      desc: 'Mendesain wireframe & prototype interaktif berbasis Figma dengan hierarki visual modern dan ramah pengguna.',
      icon: Lightbulb,
      color: 'text-pink-500 border-pink-500/30 bg-pink-500/10',
    },
    {
      num: '04',
      title: 'Implementasi System',
      desc: 'Mengembangkan sistem menggunakan skema clean code (Laravel, React, MySQL) serta pengujian fungsionalitas.',
      icon: Cpu,
      color: 'text-emerald-500 border-emerald-500/30 bg-emerald-500/10',
    },
  ];

  const stats = [
    { icon: Rocket, label: t('about.stats.projects'), value: '3+', color: 'text-sky-500' },
    { icon: Target, label: t('about.stats.accuracy'), value: '98%', color: 'text-indigo-500' },
    { icon: Zap, label: t('about.stats.tools'), value: '12+', color: 'text-pink-500' },
    { icon: ShieldCheck, label: t('about.stats.quality'), value: '100%', color: 'text-emerald-500' },
  ];

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center px-4 md:px-6 py-24 overflow-hidden">
      {/* Decorative Glow Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase font-extrabold tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20 inline-flex items-center gap-1.5 mb-3">
            <Sparkles size={12} /> {t('about.subtitle')}
          </span>
          <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            {t('about.title')}
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-secondary to-accent mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Modern Glass Bio Card */}
        <motion.div
          className="relative rounded-3xl p-[1px] mb-16 overflow-hidden group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Animated Gradient Border Wrap */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-30 group-hover:opacity-70 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent blur-[10px] opacity-20 group-hover:opacity-50 transition-opacity duration-500" />
          <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />

          {/* Inner Content Card */}
          <div className="relative bg-white/40 dark:bg-slate-900/60 backdrop-blur-2xl rounded-[23px] p-8 md:p-12 shadow-2xl overflow-hidden border border-white/50 dark:border-white/10 z-10 w-full h-full">
            
            {/* Ambient inner glows */}
            <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-accent/10 rounded-full blur-[80px]" />

          <div className="max-w-4xl mx-auto relative z-10">
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg text-center font-normal mb-10">
              {t('about.bio')}
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-border/40">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 rounded-2xl bg-white/60 dark:bg-slate-800/40 backdrop-blur-md border border-white/60 dark:border-white/10 hover:border-white hover:bg-white/80 dark:hover:bg-slate-800/60 transition-all shadow-sm hover:shadow-md"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                >
                  <div className={`${stat.color} mb-2 flex justify-center`}>
                    <stat.icon size={26} />
                  </div>
                  <div className="font-extrabold text-2xl text-foreground">{stat.value}</div>
                  <div className="text-muted-foreground text-[11px] font-bold uppercase tracking-wider mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
          </div>
        </motion.div>

        {/* Education Timeline Cards */}
        <div className="mb-20">
          <h3 className="text-xl md:text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2">
            <GraduationCap className="text-secondary" size={24} />
            <span>{t('about.education')}</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: edu.delay }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="bg-card border border-border rounded-3xl p-8 shadow-lg hover:shadow-xl hover:shadow-secondary/15 transition-all relative overflow-hidden group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${edu.gradient} rounded-2xl flex items-center justify-center shadow-md text-white`}>
                      <edu.icon size={24} />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20">
                      {edu.badge}
                    </span>
                  </div>
                  <a 
                    href={edu.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link block w-fit"
                  >
                    <h4 className="text-xl font-bold mb-1 text-foreground group-hover/link:text-primary transition-colors flex items-center gap-2">
                      {edu.institution}
                      <ExternalLink size={16} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-primary" />
                    </h4>
                  </a>
                  <p className="text-sm font-semibold text-secondary mb-4">{edu.degree}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience Timeline Cards */}
        <div className="mb-20">
          <h3 className="text-xl md:text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2">
            <Briefcase className="text-emerald-500" size={24} />
            <span>{t('about.experience')}</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: exp.delay }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="bg-card border border-border rounded-3xl p-8 shadow-lg hover:shadow-xl hover:shadow-emerald-500/15 transition-all relative overflow-hidden group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${exp.gradient} rounded-2xl flex items-center justify-center shadow-md text-white`}>
                      <exp.icon size={24} />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      {exp.badge}
                    </span>
                  </div>
                  <a 
                    href={exp.url}
                    target={exp.url !== '#' ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group/link block w-fit"
                  >
                    <h4 className="text-xl font-bold mb-1 text-foreground group-hover/link:text-primary transition-colors flex items-center gap-2">
                      {exp.company}
                      {exp.url !== '#' && (
                        <ExternalLink size={16} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-primary" />
                      )}
                    </h4>
                  </a>
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">{exp.role}</p>
                    <span className="text-xs font-bold px-2 py-1 bg-muted/60 rounded-md text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Work Methodology / Process Pipeline */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-xl md:text-2xl font-bold text-foreground flex items-center justify-center gap-2">
              <Sparkles className="text-accent" size={24} />
              <span>{t('about.workflow')}</span>
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              {t('about.workflow_desc')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="bg-card border border-border rounded-3xl p-6 shadow-md hover:shadow-xl transition-all relative group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-muted-foreground/40 group-hover:text-secondary transition-colors">
                    {step.num}
                  </span>
                  <div className={`w-10 h-10 rounded-2xl border flex items-center justify-center ${step.color}`}>
                    <step.icon size={20} />
                  </div>
                </div>
                <h4 className="font-bold text-base mb-2 text-foreground">{step.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
