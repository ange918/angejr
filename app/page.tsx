"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageSquare, ArrowUp, Github, Linkedin, ExternalLink } from "lucide-react";
import HeroScene from "./components/HeroScene";
import Link from "next/link";

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

export default function Home() {
  return (
    <main className="min-h-screen bg-navy text-white selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 overflow-hidden pt-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(6,182,212,0.1),transparent)] pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 z-10"
        >
          <div className="mb-6 inline-block">
             <span className="text-cyan-400 font-bold tracking-widest text-xs uppercase bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">Portfolio 2026</span>
          </div>
          <h2 className="text-xl font-medium mb-2 opacity-80">Ange Akonde</h2>
          <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tighter glow-text">BigSixteen</h1>
          <h3 className="text-xl md:text-2xl text-cyan-400 mb-6">Développeur Web Full-Stack | Software Engineer</h3>
          <p className="text-lg text-gray-300 mb-8 max-w-lg leading-relaxed">
            "Je conçois des applications web modernes, performantes et orientées expérience utilisateur."
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projets" className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 transition-colors rounded-full font-bold text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(6,182,212,0.4)]">
              Voir mes projets
            </a>
            <a href="#contact" className="px-8 py-3 border border-cyan-500/50 hover:bg-cyan-500/10 transition-colors rounded-full font-bold text-sm uppercase tracking-wider">
              Me contacter
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 mt-12 md:mt-0"
        >
          <HeroScene />
        </motion.div>
      </section>

      {/* À Propos Section */}
      <section id="about" className="py-24 px-6 md:px-20 bg-slate-900/30">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
            className="w-full md:w-3/5"
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
              <span className="h-px w-12 bg-cyan-500"></span> À PROPOS
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              "Développeur Full-Stack passionné par l’innovation numérique, je conçois
              des applications web modernes, évolutives et performantes. Maîtrisant
              l’ensemble de la stack technique, je développe des solutions complètes
              en plaçant l’expérience utilisateur et la qualité du code au cœur
              de chaque projet."
            </p>
            <Link href="/a-propos" className="inline-flex items-center gap-2 text-cyan-400 font-bold hover:text-cyan-300 transition-colors group">
              En savoir plus <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          <motion.div 
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            viewport={{ once: true }}
            className="w-full md:w-2/5 flex justify-center"
          >
            <div className="relative w-64 h-64 rounded-2xl overflow-hidden border-2 border-cyan-500/30 p-2">
               <div className="w-full h-full bg-slate-800 flex items-center justify-center text-cyan-500/50">
                 <p className="text-xs uppercase tracking-widest font-bold">Photo Profil</p>
               </div>
               <div className="absolute inset-0 bg-cyan-500/10 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projets Section */}
      <section id="projets" className="py-24 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">PROJETS RÉALISÉS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div 
                key={project.name}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-slate-900/50 border border-cyan-500/20 p-8 rounded-2xl hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all group"
              >
                <div className="flex justify-between items-start mb-4">
                   <div className={`px-3 py-1 text-[10px] font-bold rounded-full border ${project.status.includes('En cours') ? 'border-yellow-500/50 text-yellow-500' : 'border-cyan-500/50 text-cyan-500'}`}>
                    {project.status}
                   </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">{project.name}</h3>
                <div className="h-1 w-12 bg-cyan-500/30 rounded-full group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compétences Section */}
      <section id="skills" className="py-24 px-6 md:px-20 bg-slate-900/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">COMPÉTENCES</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {skills.map((skill, i) => (
              <motion.div
                key={skill}
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="px-8 py-4 bg-navy border border-cyan-500/20 rounded-xl flex items-center gap-3 hover:border-cyan-500 transition-colors shadow-lg"
              >
                <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_#06b6d4]" />
                <span className="font-bold text-gray-200">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">ME CONTACTER</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30 group-hover:border-cyan-500 group-hover:bg-cyan-500/20 transition-all">
                  <Phone className="text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-widest">Téléphone</p>
                  <p className="text-lg font-bold">+229 01 41 48 37 15</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30 group-hover:border-cyan-500 group-hover:bg-cyan-500/20 transition-all">
                  <MessageSquare className="text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-widest">WhatsApp</p>
                  <p className="text-lg font-bold">+229 01 44 71 14 50</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30 group-hover:border-cyan-500 group-hover:bg-cyan-500/20 transition-all">
                  <Mail className="text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-widest">Email</p>
                  <p className="text-lg font-bold">akondejunior18@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30 group-hover:border-cyan-500 group-hover:bg-cyan-500/20 transition-all">
                  <MapPin className="text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-widest">Localisation</p>
                  <p className="text-lg font-bold">Abomey-Calavi, Bénin</p>
                </div>
              </div>
            </div>

            <form className="space-y-6">
              <div className="space-y-2">
                <input type="text" placeholder="Nom complet" className="w-full bg-slate-900/50 border border-cyan-500/20 rounded-xl px-6 py-4 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all" />
              </div>
              <div className="space-y-2">
                <input type="email" placeholder="Email" className="w-full bg-slate-900/50 border border-cyan-500/20 rounded-xl px-6 py-4 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all" />
              </div>
              <div className="space-y-2">
                <textarea rows={5} placeholder="Votre message" className="w-full bg-slate-900/50 border border-cyan-500/20 rounded-xl px-6 py-4 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"></textarea>
              </div>
              <button className="w-full py-4 bg-cyan-600 hover:bg-cyan-500 transition-all rounded-xl font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-20 border-t border-cyan-500/10 flex flex-col items-center gap-8">
        <div className="flex items-center gap-4 text-cyan-400">
           <a href="#" className="hover:text-white transition-colors"><Github /></a>
           <a href="#" className="hover:text-white transition-colors"><Linkedin /></a>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500">Ange Akonde | BigSixteen</p>
          <p className="text-xs text-gray-600 mt-2">© 2026 Tous droits réservés.</p>
        </div>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-12 h-12 rounded-full border border-cyan-500/30 flex items-center justify-center hover:bg-cyan-500/10 transition-colors">
          <ArrowUp size={20} className="text-cyan-400" />
        </button>
      </footer>
    </main>
  );
}
