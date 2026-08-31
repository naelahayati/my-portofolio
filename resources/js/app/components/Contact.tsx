import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle, Sparkles, Heart, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import confetti from 'canvas-confetti';

export function Contact() {
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [isSent, setIsSent] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email Official',
      value: 'naelahayatii@gmail.com',
      href: 'mailto:naelahayatii@gmail.com',
      gradient: 'from-sky-500 to-blue-600',
    },
    {
      icon: Phone,
      label: 'WhatsApp Quick Connect',
      value: '+62 831-1632-2755',
      href: 'https://wa.me/6283116322755',
      gradient: 'from-emerald-500 to-teal-600',
    },
    {
      icon: MapPin,
      label: 'Lokasi & Domisili',
      value: 'Subang, Jawa Barat, Indonesia',
      href: 'https://maps.google.com/?q=Subang',
      gradient: 'from-pink-500 to-rose-600',
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject') || 'Diskusi Proyek';
    const message = formData.get('message');

    confetti({
      particleCount: 90,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#38BDF8', '#EC4899', '#6366F1', '#10B981']
    });

    const mailtoUrl = `mailto:naelahayatii@gmail.com?subject=${encodeURIComponent(`[Portfolio Contact] ${subject} - ${name}`)}&body=${encodeURIComponent(`Nama: ${name}\nEmail: ${email}\nTopik: ${subject}\n\nPesan:\n${message}`)}`;

    window.open(mailtoUrl, '_blank');
    setIsSent(true);
    setTimeout(() => setIsSent(false), 5000);
  };

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center px-4 md:px-6 py-24 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-secondary/15 to-accent/15 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-primary/15 to-secondary/15 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.25, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
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
          <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 inline-flex items-center gap-1.5 mb-3">
            <MessageCircle size={12} /> Let's Connect
          </span>
          <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Kontak & Kolaborasi
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-secondary to-accent mx-auto mt-4 rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm md:text-base">
            Tertarik untuk mendiskusikan peluang proyek, is sistem, atau sekadar bertukar ide? Silakan hubungi saya!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-transparent border-l-4 border-primary rounded-r-3xl p-6 relative overflow-hidden mb-8">
              <h3 className="text-lg font-black mb-2 text-foreground flex items-center gap-2">
                <Sparkles size={20} className="text-accent" />
                Informasi Kontak Direct
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Saya selalu terbuka untuk diskusi profesional seputar is kebutuhan sistem, pembuatan wireframe/UI design, maupun pengembangan web.
              </p>
            </div>

            <div className="pt-2 pb-4 flex flex-col gap-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-6 group cursor-pointer relative"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${info.gradient} rounded-full flex items-center justify-center text-white shadow-lg shadow-${info.gradient.split('-')[1]}/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 z-10 shrink-0`}>
                    <info.icon size={24} />
                  </div>

                  {/* Subtle connecting line for visual flow */}
                  {index !== contactInfo.length - 1 && (
                    <div className="absolute left-7 top-14 bottom-[-32px] w-[2px] bg-gradient-to-b from-border to-transparent -translate-x-1/2 z-0 opacity-50" />
                  )}

                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-muted-foreground font-bold mb-1 group-hover:text-foreground transition-colors">{info.label}</h4>
                    <p className="text-base md:text-lg font-black text-foreground group-hover:text-primary transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Quick WhatsApp Action Card */}
            <div className="mt-8 bg-white/60 dark:bg-slate-900/50 backdrop-blur-md border border-emerald-500/30 rounded-3xl p-5 flex flex-wrap items-center justify-between gap-4 shadow-sm hover:shadow-md transition-shadow">
              <div>
                <h4 className="font-bold text-sm text-foreground">Respon Cepat via WhatsApp</h4>
                <p className="text-xs text-muted-foreground">Kirim pesan langsung ke nomor HP saya</p>
              </div>
              <a
                href="https://wa.me/6283116322755"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full font-bold text-xs shadow-md transition-colors flex items-center gap-1.5 shrink-0"
              >
                <MessageCircle size={14} /> Chat WA
              </a>
            </div>
          </motion.div>

          {/* Form Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative rounded-3xl p-[1px] overflow-hidden group shadow-2xl"
          >
            {/* Animated Gradient Border Wrap */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-30 group-hover:opacity-70 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent blur-[12px] opacity-20 group-hover:opacity-50 transition-opacity duration-500" />
            <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/30 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1200ms] ease-in-out" />

            {/* Inner Content Card */}
            <div className="relative bg-white/70 dark:bg-slate-900/80 backdrop-blur-3xl rounded-[23px] p-8 md:p-10 overflow-hidden border border-white/40 dark:border-white/10 z-10 w-full h-full">

              {/* Subtle inner glows */}
              <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-accent/15 rounded-full blur-[80px]" />
              <div className="absolute bottom-[-10%] left-[-20%] w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />

            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              {isSent && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-emerald-500/15 border border-emerald-500/30 rounded-2xl text-emerald-600 dark:text-emerald-400 text-xs font-bold flex items-center gap-2"
                >
                  <CheckCircle2 size={16} /> Pesan berhasil disiapkan! Mengarahkan ke email client...
                </motion.div>
              )}

              <div>
                <label htmlFor="name" className="block text-[13px] font-bold text-foreground mb-2 ml-1">Nama Lengkap</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-5 py-3.5 bg-white/60 dark:bg-slate-950/50 backdrop-blur-md border border-border/80 dark:border-white/10 rounded-2xl text-sm font-medium focus:outline-none focus:border-sky-500 dark:focus:border-sky-400 focus:ring-4 focus:ring-sky-500/20 dark:focus:ring-sky-400/20 transition-all shadow-sm hover:border-sky-500/50"
                  placeholder="Masukkan nama Anda"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[13px] font-bold text-foreground mb-2 ml-1">Alamat Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-5 py-3.5 bg-white/60 dark:bg-slate-950/50 backdrop-blur-md border border-border/80 dark:border-white/10 rounded-2xl text-sm font-medium focus:outline-none focus:border-secondary dark:focus:border-pink-400 focus:ring-4 focus:ring-secondary/20 dark:focus:ring-pink-400/20 transition-all shadow-sm hover:border-secondary/50"
                  placeholder="nama@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-[13px] font-bold text-foreground mb-2 ml-1">Topik Diskusi</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-5 py-3.5 bg-white/60 dark:bg-slate-950/50 backdrop-blur-md border border-border/80 dark:border-white/10 rounded-2xl text-sm font-medium focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/20 dark:focus:ring-emerald-400/20 transition-all shadow-sm hover:border-emerald-500/50"
                  placeholder="Misal: Proyek Sistem..."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[13px] font-bold text-foreground mb-2 ml-1">Pesan Utama</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-5 py-4 bg-white/60 dark:bg-slate-950/50 backdrop-blur-md border border-border/80 dark:border-white/10 rounded-2xl text-sm font-medium focus:outline-none focus:border-primary dark:focus:border-indigo-400 focus:ring-4 focus:ring-primary/20 dark:focus:ring-indigo-400/20 transition-all resize-none shadow-sm hover:shadow-md hover:border-primary/50"
                  placeholder="Gambarkan lebih lanjut apa yang ingin Anda diskusikan..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full py-4 mt-2 bg-gradient-to-r from-primary via-secondary to-accent text-white font-black text-sm rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-accent/30 transition-all flex items-center justify-center gap-2 cursor-pointer border border-white/20"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={18} className="-translate-y-0.5" />
                <span>Kirim Pesan Sekarang</span>
                <Sparkles size={16} className="text-yellow-300" />
              </motion.button>
            </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
