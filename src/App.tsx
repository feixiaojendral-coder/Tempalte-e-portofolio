import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { 
  ArrowUpRight, 
  Mail, 
  Instagram, 
  ChevronUp, 
  Menu, 
  X, 
  ExternalLink,
  Code,
  Layout,
  Zap
} from 'lucide-react';

const showcaseData = [
  {
    title: "Modul Ajar Berdiferensiasi",
    meta: "Perencanaan",
    summary: "Rancangan pembelajaran yang menyatukan tujuan, aktivitas, dan asesmen dalam alur yang lebih rapi dan mudah dipresentasikan.",
    bullets: [
      "Struktur belajar jelas dari awal sampai penutup.",
      "Visual isi karya terasa lebih profesional.",
      "Cocok dipakai untuk portfolio, presentasi, atau lampiran tugas."
    ],
    image: "https://images.unsplash.com/photo-1454165833762-010214946022?auto=format&fit=crop&q=80&w=800",
    accent: "rgba(203, 255, 156, 0.22)"
  },
  {
    title: "Media Interaktif Kontekstual",
    meta: "Media",
    summary: "Karya media yang bisa ditampilkan sebagai sorotan utama dengan spotlight card yang lebih hidup dan modern.",
    bullets: [
      "Preview berganti secara interaktif saat item dipilih.",
      "Cocok menampilkan poster, media ajar, atau infografik.",
      "Memberi kesan portfolio yang aktif, bukan sekadar statis."
    ],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
    accent: "rgba(142, 255, 231, 0.22)"
  },
  {
    title: "Asesmen Diagnostik dan Formatif",
    meta: "Asesmen",
    summary: "Dokumen evaluasi dan rubrik dapat ditampilkan dengan gaya showcase sehingga pembaca langsung paham nilai utamanya.",
    bullets: [
      "Menonjolkan kualitas berpikir dan perencanaan.",
      "Tetap bersih walau isi kontennya formal.",
      "Cocok untuk bukti profesional yang lebih meyakinkan."
    ],
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800",
    accent: "rgba(255, 211, 120, 0.2)"
  },
  {
    title: "Paket Refleksi dan Tindak Lanjut",
    meta: "Refleksi",
    summary: "Bagian refleksi dibuat lebih menarik dengan perpaduan visual, narasi, dan bullet insight yang singkat tapi terasa kuat.",
    bullets: [
      "Mudah dipakai untuk menampilkan growth mindset.",
      "Membantu portfolio terasa lebih personal.",
      "Menjadi penutup yang kuat untuk keseluruhan cerita."
    ],
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800",
    accent: "rgba(255, 174, 221, 0.2)"
  }
];

const Counter = ({ target }: { target: number }) => {
  return <span>{target}</span>;
};

export default function App() {
  const [activeShowcase, setActiveShowcase] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const revealVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="relative min-h-screen custom-scrollbar">
      {/* Diagnostic - will show if App renders at all */}
      <div className="sr-only">App Loaded</div>
      
      <div className="page-grid" />
      
      {/* Scroll Progress */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* Header */}
      <header className="sticky top-0 z-50 py-6 px-4 md:px-8 bg-[#131c91]/30 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center gap-4">
            <div className="grid gap-1">
              <div className="w-5 h-1 bg-gradient-to-r from-accent-strong to-white rounded-full" />
              <div className="w-3.5 h-1 bg-gradient-to-r from-accent-strong to-white rounded-full" />
              <div className="w-2.5 h-1 bg-gradient-to-r from-accent-strong to-white rounded-full" />
            </div>
            <div>
              <strong className="block text-sm font-bold tracking-tight">E-Portfolio</strong>
              <small className="text-[10px] text-muted uppercase tracking-widest">Creative Profile 2026</small>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            {['Beranda', 'Profil', 'Perjalanan', 'Karya', 'Kontak'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="px-5 py-2 rounded-full text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all"
              >
                {item}
              </a>
            ))}
          </nav>

          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-24 z-40 bg-[#0d1264] border border-white/10 p-4 rounded-[2rem] shadow-2xl md:hidden"
          >
            {['Beranda', 'Profil', 'Perjalanan', 'Karya', 'Kontak'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block p-4 rounded-xl text-lg font-medium hover:bg-white/10 transition-all text-center"
              >
                {item}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section id="beranda" className="relative pt-20 pb-32 px-4 md:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
            >
              <p className="section-kicker mb-6">PPG PRAJABATAN | PORTFOLIO DIGITAL</p>
              <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter mb-8">
                Selamat Datang <br />
                <span className="block">di E-Portfolio</span>
                <span className="text-accent underline decoration-accent/30">Kenzo Elvano</span>
              </h1>
              <p className="text-muted text-lg max-w-xl mb-10 leading-relaxed">
                Portofolio ini merangkum perjalanan belajar, karya pilihan, dan refleksi profesional dalam satu tampilan yang modern, dinamis, dan mudah dipresentasikan.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <a href="#karya" className="button-primary">Lihat Karya</a>
                <a href="#kontak" className="button-ghost">Hubungi Saya</a>
              </div>
              <div className="flex gap-4">
                {['Visual Modern', 'Animasi Interaktif', 'Responsive Layout'].map(tag => (
                  <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs text-white/60">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-square md:aspect-auto md:h-[600px]"
            >
              <div className="absolute inset-0 bg-accent/90 rounded-[3rem] rotate-6 scale-95" />
              <div className="absolute inset-x-8 inset-y-12 bg-blue-500/20 rounded-[3rem] rotate-3 scale-105" />
              
              <div className="glass-card absolute top-20 left-0 md:-left-12 p-6 rounded-3xl max-w-[240px] z-20">
                <p className="text-[10px] font-mono text-white/50 mb-2 uppercase tracking-widest">Current Focus</p>
                <strong className="block text-xl mb-2">Creative Teaching Portfolio</strong>
                <p className="text-xs text-muted leading-snug">Interactive, clean, and presentation-ready.</p>
              </div>

              <div className="glass-card relative h-full rounded-[3rem] p-4 overflow-hidden z-10 flex items-end justify-center">
                <img 
                  src="https://i.imgur.com/F8itKiF.jpg" 
                  alt="Kenzo Elvano"
                  className="w-full h-[90%] object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700" 
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto glass-card rounded-[2.5rem] p-10 md:p-16 grid md:grid-cols-3 gap-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px]" />
            {[
              { label: "Section Utama", value: 6, desc: "alur portfolio yang jelas dan mudah diikuti" },
              { label: "Karya Pilihan", value: 4, desc: "showcase interaktif untuk karya unggulan" },
              { label: "Nilai Profesional", value: 3, desc: "fokus tumbuh, reflektif, dan berdampak" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                variants={revealVariants}
                className="relative z-10"
              >
                <p className="section-kicker mb-4">{stat.label}</p>
                <h3 className="text-7xl font-bold mb-4">
                  <Counter target={stat.value} />
                </h3>
                <p className="text-muted text-sm max-w-[200px] mx-auto">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Profil Section */}
        <section id="profil" className="py-32 px-4 md:px-8">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              variants={revealVariants}
              className="glass-card p-12 rounded-[2.5rem]"
            >
              <p className="font-mono text-accent text-xs uppercase tracking-widest mb-6">Profil Singkat</p>
              <h2 className="text-4xl font-bold mb-4">Kenzo Elvano</h2>
              <p className="text-accent/80 text-sm font-medium mb-8">Calon Guru Profesional | Portfolio Showcase</p>
              <p className="text-muted text-lg leading-relaxed mb-10">
                Saya percaya bahwa portfolio bukan cuma tempat menaruh dokumen, tapi ruang untuk menunjukkan karakter, proses belajar, dan kualitas karya secara utuh.
              </p>
              <blockquote className="border-t border-white/20 pt-8 italic text-xl">
                "Belajar, berkarya, lalu menunjukkan prosesnya dengan cara yang elegan."
              </blockquote>
            </motion.div>

            <div className="grid gap-6">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                variants={revealVariants}
                className="glass-card p-10 rounded-[2.5rem]"
              >
                <h3 className="text-2xl font-bold mb-4">Gaya Kerja Saya</h3>
                <p className="text-muted">Rapi dalam menyusun ide, adaptif saat eksekusi, dan selalu berusaha membuat pengalaman belajar terasa lebih hidup dan relevan.</p>
              </motion.div>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: <Layout />, title: "Desain Visual", color: "text-blue-400" },
                  { icon: <Code />, title: "Struktur Jelas", color: "text-accent" },
                  { icon: <Zap />, title: "Interaktif", color: "text-purple-400" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial="hidden"
                    whileInView="visible"
                    variants={revealVariants}
                    className="glass-card p-6 rounded-3xl"
                  >
                    <div className={`${item.color} mb-4`}>{item.icon}</div>
                    <h4 className="font-bold text-sm mb-2">{item.title}</h4>
                    <p className="text-[10px] text-muted uppercase tracking-tighter">Professional Focus</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Perjalanan Section */}
        <section id="perjalanan" className="py-32 px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="section-kicker mb-6 text-accent">Perjalanan</p>
            <h2 className="text-5xl font-bold leading-[1.1] tracking-tight">
              Alur perkembangan ditampilkan dalam timeline yang clean dan mudah dipahami.
            </h2>
          </div>
          
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 relative">
             <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2" />
             {[
               { step: "Tahap 01", title: "Orientasi dan pemetaan awal", desc: "Mengenali kekuatan, kebutuhan belajar, dan arah pengembangan yang paling relevan." },
               { step: "Tahap 02", title: "Perancangan karya dan perangkat ajar", desc: "Menyusun materi, media, dan dokumentasi yang siap ditampilkan secara profesional." },
               { step: "Tahap 03", title: "Implementasi dan dokumentasi", desc: "Menampilkan proses nyata, hasil praktik, serta bukti kerja yang bisa dipertanggungjawabkan." },
               { step: "Tahap 04", title: "Refleksi dan penyempurnaan", desc: "Mengubah pengalaman menjadi insight yang membantu pengembangan profesional berikutnya." }
             ].map((item, i) => (
               <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                variants={revealVariants}
                className="glass-card p-10 rounded-[2.5rem] relative"
               >
                 <span className="text-accent font-mono text-xs mb-4 block">{item.step}</span>
                 <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                 <p className="text-muted text-sm">{item.desc}</p>
               </motion.div>
             ))}
          </div>
        </section>

        {/* Karya Section */}
        <section id="karya" className="py-32 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <p className="section-kicker mb-6">Karya Pilihan</p>
              <h2 className="text-5xl font-bold max-w-2xl leading-[1.1]">Bagian ini interaktif: pilih item untuk melihat detail karya.</h2>
            </div>

            <div className="grid lg:grid-cols-[400px_1fr] gap-8">
              <div className="flex flex-col gap-4">
                {showcaseData.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveShowcase(i)}
                    className={`text-left p-8 rounded-[2rem] border transition-all ${
                      activeShowcase === i 
                        ? 'bg-white/10 border-white/20' 
                        : 'bg-transparent border-transparent hover:bg-white/5'
                    }`}
                  >
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-2 block">{item.meta}</span>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-xs text-muted truncate">{item.summary}</p>
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeShowcase}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="glass-card p-8 rounded-[3rem] grid md:grid-cols-2 gap-12 h-fit"
                >
                  <div className="aspect-video rounded-3xl overflow-hidden bg-slate-800">
                    <img 
                      src={showcaseData[activeShowcase].image} 
                      alt={showcaseData[activeShowcase].title}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div>
                    <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-xs font-mono text-accent mb-6 uppercase tracking-widest">
                      {showcaseData[activeShowcase].meta}
                    </span>
                    <h3 className="text-3xl font-bold mb-6">{showcaseData[activeShowcase].title}</h3>
                    <p className="text-muted mb-8 leading-relaxed">{showcaseData[activeShowcase].summary}</p>
                    <ul className="space-y-4">
                      {showcaseData[activeShowcase].bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-4 items-start text-sm text-muted">
                           <ArrowUpRight size={16} className="text-accent shrink-0 mt-1" />
                           {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="kontak" className="py-32 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              variants={revealVariants}
              className="glass-card rounded-[3rem] p-12 md:p-24 grid lg:grid-cols-2 gap-16 items-center"
            >
              <div>
                <p className="section-kicker mb-8">Hubungan Kita</p>
                <h2 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tighter mb-8">
                  Mari Memulai <br />
                  <span className="text-accent">Sesuatu yang Baru.</span>
                </h2>
                <p className="text-muted text-xl leading-relaxed mb-10 max-w-md">
                  Portfolio ini siap dipersonalisasi. Mari terhubung untuk mendiskusikan kolaborasi pendidikan atau proyek kreatif lainnya.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <a 
                  href="mailto:kenzo@example.com" 
                  className="group flex flex-col gap-2 p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/10 transition-all hover:-translate-y-2"
                >
                  <Mail className="group-hover:text-accent transition-colors" size={32} />
                  <span className="text-xs uppercase font-mono tracking-widest mt-4">Email</span>
                  <strong className="text-2xl">kenzo@example.com</strong>
                </a>
                <a 
                  href="#" 
                  className="group flex flex-col gap-2 p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/10 transition-all hover:-translate-y-2"
                >
                  <Instagram className="group-hover:text-accent transition-colors" size={32} />
                  <span className="text-xs uppercase font-mono tracking-widest mt-4">Instagram</span>
                  <strong className="text-2xl">@kenzoelvano</strong>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-white/10 bg-[#0c105c]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-white/40 text-sm font-medium">Kenzo Elvano - E-Portfolio Interaktif 2026</p>
          <div className="flex items-center gap-6">
            <a href="#beranda" className="flex items-center gap-2 text-white/40 hover:text-white transition-all text-sm group">
              Back to top
              <ChevronUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
