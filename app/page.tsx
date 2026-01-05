"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageSquare, ArrowUp, Github, Linkedin, ExternalLink, Menu, X, Quote, Copy, Check } from "lucide-react";
import { FlipWords } from "./components/ui/flip-words";
import Link from "next/link";
import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";

const projects = [
  { name: "Model Academy Management", status: "Terminé", stack: ["Next.js", "PostgreSQL", "Tailwind"] },
  { name: "Portfolio – Ore Gauthier", status: "Terminé", stack: ["React", "Framer Motion", "Three.js"] },
  { name: "Portfolio – Merveille Susuni", status: "Terminé", stack: ["Next.js", "GSAP", "Tailwind"] },
  { name: "Site officiel – Axel Merryl", status: "Terminé", stack: ["PHP", "Laravel", "MySQL"] },
  { name: "Code Capital", status: "Terminé", stack: ["React", "Node.js", "MongoDB"] },
  { name: "FASHLINK", status: "En cours", stack: ["Next.js", "Prisma", "Tailwind"] },
  { name: "DAHOMEY TECH", status: "En cours", stack: ["React", "Firebase", "Styled Components"] },
  { name: "FOODMOOD", status: "En cours", stack: ["Next.js", "Supabase", "Tailwind"] },
];

const testimonials = [
  {
    name: "Axel Merryl",
    role: "Artiste & Créateur de Contenu",
    content: "Une collaboration exceptionnelle. Ange a su transformer ma vision en une plateforme web élégante et performante.",
  },
  {
    name: "Gauthier O.",
    role: "Architecte",
    content: "Le souci du détail et la qualité du code d'Ange sont impressionnants. Mon portfolio dépasse mes attentes.",
  },
  {
    name: "Merveille S.",
    role: "Entrepreneure",
    content: "Un développeur à l'écoute, réactif et force de proposition. Je recommande vivement son expertise Full-Stack.",
  },
  {
    name: "Code Capital Team",
    role: "Fintech Startup",
    content: "Ange a été un atout majeur pour notre architecture web. Efficace, moderne et rigoureux.",
  }
];

const skills = [
  { name: "JavaScript", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
  { name: "React", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
  { name: "Node.js", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
  { name: "PHP", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" },
  { name: "Laravel", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-original.svg" },
  { name: "HTML5", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" },
  { name: "CSS3", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" },
];

const titles = ["Développeur Full-Stack", "Ingénieur Logiciel", "Créateur Digital"];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("akondejunior18@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-navy text-white selection:bg-cyan-500/30 selection:text-cyan-200 relative"
    >
      {/* Background Image fixed for all sections */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-10 grayscale pointer-events-none"
        style={{ backgroundImage: "url('/assets/hero-bg.jpg')" }}
      />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-navy via-transparent to-navy pointer-events-none" />

      {/* Header */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 md:px-12 py-6 ${
          isScrolled ? "bg-navy/80 backdrop-blur-md border-b border-cyan-500/5 py-4" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold tracking-tighter text-white">
            Big<span className="text-cyan-400">Sixteen</span>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {["À Propos", "Projets", "Compétences", "Contact"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace("à ", "").replace("é", "e")}`}
                className="text-xs font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-widest"
              >
                {item}
              </a>
            ))}
          </nav>

          <button 
            className="md:hidden text-gray-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.nav 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-navy border-b border-cyan-500/5 p-8 flex flex-col gap-6 md:hidden backdrop-blur-xl"
          >
            {["À Propos", "Projets", "Compétences", "Contact"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace("à ", "").replace("é", "e")}`}
                className="text-lg font-medium text-gray-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-cyan-500/60 mb-6">Ange Akonde</h2>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter leading-none">BigSixteen</h1>
          <div className="text-xl md:text-3xl text-gray-400 mb-10 h-12 flex items-center justify-center font-light">
            <FlipWords words={titles} className="text-white font-medium" />
          </div>
          <p className="text-base md:text-lg text-gray-400 mb-12 max-w-xl mx-auto leading-relaxed font-light">
            Concevoir des applications web modernes, performantes et orientées expérience utilisateur.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <a href="#projets" className="text-xs font-bold uppercase tracking-widest text-white border-b border-cyan-500 pb-1 hover:border-white transition-all">
              Voir mes projets
            </a>
            <a href="#contact" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-all">
              Me contacter
            </a>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="propos" className="py-32 px-6 z-10 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs font-bold tracking-[0.3em] text-cyan-500/60 mb-12 uppercase">À Propos</h2>
            <div className="space-y-6 text-xl md:text-2xl text-gray-200 leading-relaxed font-light">
              <p>
                Je suis <span className="text-white font-medium">Ange AKONDE</span>, développeur FullStack passionné par les nouvelles technologies et l'innovation numérique. Après avoir suivi une formation intensive en développement web, je crée des applications modernes, performantes et élégantes.
              </p>
              <p>
                Ma spécialité couvre l'ensemble de la stack technique : de l'interface utilisateur intuitive au backend robuste. Je maîtrise JavaScript, React, Node.js, et les architectures modernes pour délivrer des solutions complètes et durables.
              </p>
            </div>
            <Link href="/a-propos" className="inline-block mt-10 text-sm font-bold text-cyan-400 hover:text-white transition-colors border-b border-cyan-500/20 pb-1">
              Lire la suite
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projets" className="py-32 px-6 bg-white/[0.01] z-10 relative">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xs font-bold tracking-[0.3em] text-cyan-500/60 mb-20 uppercase text-center">Projets Sélectionnés</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, i) => (
              <motion.div 
                key={project.name}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="aspect-video bg-white/[0.03] border border-white/5 rounded-lg mb-6 overflow-hidden relative">
                   <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <div className="flex gap-2">
                        {project.stack?.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-navy/80 backdrop-blur-sm border border-cyan-500/30 rounded-full text-[10px] font-bold text-cyan-400">
                            {tech}
                          </span>
                        ))}
                      </div>
                   </div>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{project.name}</h3>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">{project.status}</p>
                  </div>
                  <ExternalLink size={16} className="text-gray-600 group-hover:text-cyan-400 transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="competences" className="py-32 px-6 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xs font-bold tracking-[0.3em] text-cyan-500/60 mb-16 uppercase">Expertise</h2>
          <div className="grid grid-cols-3 md:grid-cols-7 gap-8 items-center justify-items-center">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.15,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
                }}
                className="flex flex-col items-center gap-3 group cursor-pointer"
              >
                <motion.div 
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
                  className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center p-2 rounded-xl bg-white/[0.02] border border-white/5 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/5 transition-all shadow-lg shadow-transparent group-hover:shadow-cyan-500/10"
                >
                  <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" />
                </motion.div>
                <span className="text-[10px] md:text-xs font-medium text-gray-500 uppercase tracking-widest group-hover:text-cyan-400 transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-white/[0.01] overflow-hidden z-10 relative">
        <div className="max-w-6xl mx-auto px-6 mb-16 text-center">
          <h2 className="text-xs font-bold tracking-[0.3em] text-cyan-500/60 uppercase">Témoignages</h2>
        </div>
        <Marquee gradient={false} speed={40} pauseOnHover={true}>
          {testimonials.map((t, i) => (
            <div key={i} className="mx-8 bg-white/[0.03] border border-white/5 p-8 rounded-2xl w-[350px] md:w-[450px]">
              <Quote className="text-cyan-500/40 mb-6" size={24} />
              <p className="text-gray-300 mb-8 font-light italic leading-relaxed">"{t.content}"</p>
              <div>
                <p className="text-white font-bold text-sm">{t.name}</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">{t.role}</p>
              </div>
            </div>
          ))}
        </Marquee>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 z-10 relative">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-xs font-bold tracking-[0.3em] text-cyan-500/60 mb-12 uppercase">Contact</h2>
              <p className="text-2xl font-light text-gray-300 mb-12">Construisons quelque chose de remarquable ensemble.</p>
              <div className="space-y-6">
                <p className="text-sm text-gray-500 tracking-widest uppercase font-bold">Email</p>
                <div className="flex items-center gap-4 group">
                  <a href="mailto:akondejunior18@gmail.com" className="text-xl font-medium block hover:text-cyan-400 transition-colors">
                    akondejunior18@gmail.com
                  </a>
                  <button 
                    onClick={copyEmail}
                    className="p-2 hover:bg-white/5 rounded-lg transition-colors text-gray-500 hover:text-cyan-400"
                    title="Copier l'email"
                  >
                    {emailCopied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                  </button>
                </div>
              </div>
            </div>
            <form className="space-y-8">
              <input type="text" placeholder="Nom" className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-cyan-500 transition-all font-light text-white placeholder:text-gray-600" />
              <input type="email" placeholder="Email" className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-cyan-500 transition-all font-light text-white placeholder:text-gray-600" />
              <textarea rows={4} placeholder="Message" className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-cyan-500 transition-all font-light resize-none text-white placeholder:text-gray-600"></textarea>
              <button className="text-xs font-bold uppercase tracking-widest border border-white/20 px-10 py-4 hover:bg-white hover:text-navy transition-all">
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5 z-10 relative">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <p className="text-sm font-bold mb-1">Ange Akonde</p>
            <p className="text-xs text-gray-600 tracking-widest uppercase">© 2026</p>
          </div>
          <div className="flex gap-8 text-gray-500">
             <a href="#" className="hover:text-white transition-colors"><Github size={20} /></a>
             <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
          </div>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="text-gray-500 hover:text-white transition-colors"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </footer>
    </motion.main>
  );
}
