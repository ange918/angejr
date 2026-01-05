"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageSquare, ArrowUp, Github, Linkedin, ExternalLink, Menu, X } from "lucide-react";
import { FlipWords } from "./components/ui/flip-words";
import Link from "next/link";
import { useState, useEffect } from "react";

const projects = [
  { name: "Model Academy Management", status: "Terminé", link: "#" },
  { name: "Portfolio – Ore Gauthier", status: "Terminé", link: "#" },
  { name: "Portfolio – Merveille Susuni", status: "Terminé", link: "#" },
  { name: "Site officiel – Axel Merryl", status: "Terminé", link: "#" },
  { name: "Code Capital", status: "Terminé", link: "#" },
  { name: "FASHLINK", status: "En cours (20%)", link: "#" },
  { name: "DAHOMEY TECH", status: "En cours (20%)", link: "#" },
  { name: "FOODMOOD", status: "En cours (20%)", link: "#" },
];

const skills = [
  "JavaScript", "React", "Node.js", "Full-Stack Development", "Architectures web modernes"
];

const titles = ["Développeur Web Full-Stack", "Software Engineer", "Créateur Digital", "Expert Next.js"];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-navy text-white selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Header */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 md:px-20 py-4 ${
          isScrolled ? "bg-navy/80 backdrop-blur-lg border-b border-cyan-500/10 py-3" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-tighter text-cyan-400 group">
            Big<span className="text-white group-hover:text-cyan-400 transition-colors">Sixteen</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {["À Propos", "Projets", "Compétences", "Contact"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace("à ", "").replace("é", "e")}`}
                className="text-sm font-medium text-gray-400 hover:text-cyan-400 transition-colors uppercase tracking-widest"
              >
                {item}
              </a>
            ))}
            <a 
              href="#contact" 
              className="px-6 py-2 bg-cyan-600/10 border border-cyan-500/50 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-cyan-600 hover:text-white transition-all shadow-[0_0_15px_rgba(6,182,212,0.2)]"
            >
              Recrutez-moi
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-navy border-b border-cyan-500/10 p-6 flex flex-col gap-6 md:hidden"
          >
            {["À Propos", "Projets", "Compétences", "Contact"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace("à ", "").replace("é", "e")}`}
                className="text-lg font-bold text-gray-300 hover:text-cyan-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-20 overflow-hidden text-center">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent)] pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 max-w-4xl"
        >
          <div className="mb-8 inline-block">
             <span className="text-cyan-400 font-bold tracking-widest text-xs uppercase bg-cyan-400/10 px-4 py-1.5 rounded-full border border-cyan-400/20">Portfolio 2026</span>
          </div>
          <h2 className="text-xl md:text-2xl font-medium mb-4 opacity-80 text-gray-400">Ange Akonde</h2>
          <h1 className="text-7xl md:text-9xl font-bold mb-8 tracking-tighter glow-text leading-none">BigSixteen</h1>
          <div className="text-2xl md:text-4xl text-gray-400 mb-10 h-16 flex items-center justify-center">
            Je suis <FlipWords words={titles} className="text-cyan-400 font-bold" />
          </div>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            "Je conçois des applications web modernes, performantes et orientées expérience utilisateur."
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#projets" className="px-10 py-4 bg-cyan-600 hover:bg-cyan-500 transition-all rounded-full font-bold text-sm uppercase tracking-widest shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:scale-105 active:scale-95">
              Voir mes projets
            </a>
            <a href="#contact" className="px-10 py-4 border border-cyan-500/50 hover:bg-cyan-500/10 transition-all rounded-full font-bold text-sm uppercase tracking-widest hover:scale-105 active:scale-95">
              Me contacter
            </a>
          </div>
        </motion.div>

        {/* Background Decoration */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent shadow-[0_0_20px_rgba(6,182,212,0.5)]" />
      </section>

      {/* À Propos Section */}
      <section id="propos" className="py-32 px-6 md:px-20 bg-slate-900/30">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
            className="w-full md:w-3/5"
          >
            <h2 className="text-3xl font-bold mb-10 flex items-center gap-4">
              <span className="h-px w-12 bg-cyan-500"></span> À PROPOS
            </h2>
            <p className="text-2xl text-gray-300 leading-relaxed mb-10 font-light">
              "Développeur Full-Stack passionné par l’innovation numérique, je conçois
              des applications web modernes, évolutives et performantes. Maîtrisant
              l’ensemble de la stack technique, je développe des solutions complètes
              en plaçant l’expérience utilisateur et la qualité du code au cœur
              de chaque projet."
            </p>
            <Link href="/a-propos" className="inline-flex items-center gap-3 text-cyan-400 font-bold hover:text-cyan-300 transition-colors group text-lg">
              En savoir plus <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
          <motion.div 
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            viewport={{ once: true }}
            className="w-full md:w-2/5 flex justify-center"
          >
            <div className="relative w-80 h-80 rounded-3xl overflow-hidden border-2 border-cyan-500/30 p-2 group">
               <div className="w-full h-full bg-slate-800 flex items-center justify-center text-cyan-500/50 group-hover:scale-110 transition-transform duration-500">
                 <p className="text-xs uppercase tracking-widest font-bold">Photo Profil</p>
               </div>
               <div className="absolute inset-0 bg-cyan-500/10 pointer-events-none group-hover:bg-cyan-500/0 transition-all" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projets Section */}
      <section id="projets" className="py-32 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-20 text-center tracking-tight">PROJETS RÉALISÉS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, i) => (
              <motion.div 
                key={project.name}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -12 }}
                className="bg-slate-900/50 border border-cyan-500/20 p-10 rounded-3xl hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink size={20} className="text-cyan-400" />
                </div>
                <div className="flex justify-between items-start mb-6">
                   <div className={`px-4 py-1 text-xs font-bold rounded-full border ${project.status.includes('En cours') ? 'border-yellow-500/50 text-yellow-500' : 'border-cyan-500/50 text-cyan-500'}`}>
                    {project.status}
                   </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-cyan-400 transition-colors leading-tight">{project.name}</h3>
                <div className="h-1 w-16 bg-cyan-500/30 rounded-full group-hover:w-full transition-all duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compétences Section */}
      <section id="competences" className="py-32 px-6 md:px-20 bg-slate-900/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-20 text-center tracking-tight">COMPÉTENCES</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {skills.map((skill, i) => (
              <motion.div
                key={skill}
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="px-10 py-6 bg-navy border border-cyan-500/20 rounded-2xl flex items-center gap-4 hover:border-cyan-500 transition-all hover:shadow-[0_0_25px_rgba(6,182,212,0.1)] group"
              >
                <div className="w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_12px_#06b6d4] group-hover:scale-125 transition-transform" />
                <span className="font-bold text-xl text-gray-200">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-20 text-center tracking-tight">ME CONTACTER</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="space-y-10">
              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30 group-hover:border-cyan-500 group-hover:bg-cyan-500/20 transition-all group-hover:rotate-6">
                  <Phone className="text-cyan-400" size={28} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-widest font-bold mb-1">Téléphone</p>
                  <p className="text-xl font-bold">+229 01 41 48 37 15</p>
                </div>
              </div>
              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30 group-hover:border-cyan-500 group-hover:bg-cyan-500/20 transition-all group-hover:rotate-6">
                  <MessageSquare className="text-cyan-400" size={28} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-widest font-bold mb-1">WhatsApp</p>
                  <p className="text-xl font-bold">+229 01 44 71 14 50</p>
                </div>
              </div>
              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30 group-hover:border-cyan-500 group-hover:bg-cyan-500/20 transition-all group-hover:rotate-6">
                  <Mail className="text-cyan-400" size={28} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-widest font-bold mb-1">Email</p>
                  <p className="text-xl font-bold">akondejunior18@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30 group-hover:border-cyan-500 group-hover:bg-cyan-500/20 transition-all group-hover:rotate-6">
                  <MapPin className="text-cyan-400" size={28} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-widest font-bold mb-1">Localisation</p>
                  <p className="text-xl font-bold">Abomey-Calavi, Bénin</p>
                </div>
              </div>
            </div>

            <form className="space-y-8 bg-slate-900/40 p-10 rounded-3xl border border-cyan-500/10">
              <div className="space-y-3">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-400">Nom complet</label>
                <input type="text" placeholder="John Doe" className="w-full bg-navy/50 border border-cyan-500/20 rounded-2xl px-6 py-4 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all" />
              </div>
              <div className="space-y-3">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-400">Email</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-navy/50 border border-cyan-500/20 rounded-2xl px-6 py-4 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all" />
              </div>
              <div className="space-y-3">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-400">Votre message</label>
                <textarea rows={5} placeholder="Discutons de votre projet..." className="w-full bg-navy/50 border border-cyan-500/20 rounded-2xl px-6 py-4 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"></textarea>
              </div>
              <button className="w-full py-5 bg-cyan-600 hover:bg-cyan-500 transition-all rounded-2xl font-bold uppercase tracking-widest shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:scale-[1.02] active:scale-[0.98]">
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 md:px-20 border-t border-cyan-500/10 flex flex-col items-center gap-10">
        <div className="flex items-center gap-8 text-cyan-400">
           <a href="#" className="hover:text-white transition-all hover:scale-125"><Github size={28} /></a>
           <a href="#" className="hover:text-white transition-all hover:scale-125"><Linkedin size={28} /></a>
        </div>
        <div className="text-center">
          <p className="text-lg font-bold text-white tracking-tighter mb-2">Ange Akonde | BigSixteen</p>
          <p className="text-sm text-gray-500 uppercase tracking-widest">Architecte Digital & Développeur Full-Stack</p>
          <p className="text-xs text-gray-600 mt-6 font-medium">© 2026 Tous droits réservés.</p>
        </div>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          className="w-14 h-14 rounded-full border border-cyan-500/30 flex items-center justify-center hover:bg-cyan-500 hover:text-white transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] group"
        >
          <ArrowUp size={24} className="text-cyan-400 group-hover:text-white transition-colors" />
        </button>
      </footer>
    </main>
  );
}
