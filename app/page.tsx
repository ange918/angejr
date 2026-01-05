"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageSquare, ArrowUp, Github, Linkedin, ExternalLink, Menu, X, Quote } from "lucide-react";
import { FlipWords } from "./components/ui/flip-words";
import Link from "next/link";
import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";

const projects = [
  { name: "Model Academy Management", status: "Terminé" },
  { name: "Portfolio – Ore Gauthier", status: "Terminé" },
  { name: "Portfolio – Merveille Susuni", status: "Terminé" },
  { name: "Site officiel – Axel Merryl", status: "Terminé" },
  { name: "Code Capital", status: "Terminé" },
  { name: "FASHLINK", status: "En cours" },
  { name: "DAHOMEY TECH", status: "En cours" },
  { name: "FOODMOOD", status: "En cours" },
];

const testimonials = [
  {
    name: "Axel Merryl",
    role: "Artist & Content Creator",
    content: "Une collaboration exceptionnelle. Ange a su transformer ma vision en une plateforme web élégante et performante.",
  },
  {
    name: "Gauthier O.",
    role: "Architect",
    content: "Le souci du détail et la qualité du code d'Ange sont impressionnants. Mon portfolio dépasse mes attentes.",
  },
  {
    name: "Merveille S.",
    role: "Entrepreneur",
    content: "Un développeur à l'écoute, réactif et force de proposition. Je recommande vivement son expertise Full-Stack.",
  },
  {
    name: "Code Capital Team",
    role: "Fintech Startup",
    content: "Ange a été un atout majeur pour notre architecture web. Efficace, moderne et rigoureux.",
  }
];

const skills = [
  "JavaScript", "React", "Node.js", "Full-Stack Development", "Web Architecture"
];

const titles = ["Full-Stack Developer", "Software Engineer", "Digital Creator"];

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
        className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 md:px-12 py-6 ${
          isScrolled ? "bg-navy/80 backdrop-blur-md border-b border-cyan-500/5 py-4" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold tracking-tighter text-white">
            Big<span className="text-cyan-400">Sixteen</span>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {["About", "Projects", "Skills", "Contact"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
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
            {["About", "Projects", "Skills", "Contact"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
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
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 max-w-3xl"
        >
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-cyan-500/60 mb-6">Ange Akonde</h2>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter leading-none">BigSixteen</h1>
          <div className="text-xl md:text-3xl text-gray-400 mb-10 h-12 flex items-center justify-center font-light">
            <FlipWords words={titles} className="text-white font-medium" />
          </div>
          <p className="text-base md:text-lg text-gray-400 mb-12 max-w-xl mx-auto leading-relaxed font-light">
            Crafting modern, high-performance web applications with a focus on user experience.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <a href="#projects" className="text-xs font-bold uppercase tracking-widest text-white border-b border-cyan-500 pb-1 hover:border-white transition-all">
              View Work
            </a>
            <a href="#contact" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-all">
              Get in touch
            </a>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs font-bold tracking-[0.3em] text-cyan-500/60 mb-12 uppercase">About</h2>
            <p className="text-2xl md:text-3xl text-gray-200 leading-tight mb-10 font-light">
              Full-Stack Developer focused on digital innovation. I build scalable, performance-driven applications where user experience and code quality meet.
            </p>
            <Link href="/a-propos" className="text-sm font-bold text-cyan-400 hover:text-white transition-colors border-b border-cyan-500/20 pb-1">
              Read full story
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xs font-bold tracking-[0.3em] text-cyan-500/60 mb-20 uppercase text-center">Selected Works</h2>
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

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xs font-bold tracking-[0.3em] text-cyan-500/60 mb-16 uppercase">Expertise</h2>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
            {skills.map((skill) => (
              <span key={skill} className="text-xl md:text-2xl font-light text-gray-300 hover:text-white transition-colors cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-white/[0.02] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 mb-16 text-center">
          <h2 className="text-xs font-bold tracking-[0.3em] text-cyan-500/60 uppercase">Feedback</h2>
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
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-xs font-bold tracking-[0.3em] text-cyan-500/60 mb-12 uppercase">Contact</h2>
              <p className="text-2xl font-light text-gray-300 mb-12">Let's build something remarkable together.</p>
              <div className="space-y-6">
                <p className="text-sm text-gray-500 tracking-widest uppercase font-bold">Email</p>
                <a href="mailto:akondejunior18@gmail.com" className="text-xl font-medium block hover:text-cyan-400 transition-colors">akondejunior18@gmail.com</a>
              </div>
            </div>
            <form className="space-y-8">
              <input type="text" placeholder="Name" className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-cyan-500 transition-all font-light" />
              <input type="email" placeholder="Email" className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-cyan-500 transition-all font-light" />
              <textarea rows={4} placeholder="Message" className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-cyan-500 transition-all font-light resize-none"></textarea>
              <button className="text-xs font-bold uppercase tracking-widest border border-white/20 px-10 py-4 hover:bg-white hover:text-navy transition-all">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5">
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
    </main>
  );
}
