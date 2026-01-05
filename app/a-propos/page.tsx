"use client";

import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-navy text-white selection:bg-cyan-500/30 selection:text-cyan-200">
      <nav className="fixed top-0 w-full z-50 px-6 md:px-12 py-6 flex justify-between items-center backdrop-blur-md bg-navy/50 border-b border-white/5">
        <Link href="/" className="text-xl font-bold tracking-tighter text-white">
          Big<span className="text-cyan-400">Sixteen</span>
        </Link>
        <Link href="/" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
          Back
        </Link>
      </nav>

      <section className="pt-40 pb-24 px-6 md:px-12 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-bold tracking-[0.3em] text-cyan-500/60 mb-12 uppercase">About</h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-16 tracking-tighter leading-tight">Je suis Ange AKONDE.</h1>
          
          <div className="space-y-12 text-lg md:text-xl text-gray-400 leading-relaxed font-light">
            <p>
              Je suis Ange AKONDE, développeur FullStack passionné par les nouvelles technologies et l'innovation numérique. Après avoir suivi une formation intensive en développement web, je crée des applications modernes, performantes et élégantes.
            </p>

            <p>
              Ma spécialité couvre l'ensemble de la stack technique : de l'interface utilisateur intuitive au backend robuste. Je maîtrise JavaScript, React, Node.js, et les architectures modernes pour délivrer des solutions complètes et durables.
            </p>

            <p>
              Grâce à ma formation approfondie, j'ai acquis une expertise solide qui me permet de partager mes connaissances et d'accompagner d'autres développeurs dans leur apprentissage. Mon objectif : contribuer au développement technologique en transmettant mon savoir-faire.
            </p>

            <p>
              Chaque projet est une opportunité de créer quelque chose d'exceptionnel, en plaçant l'expérience utilisateur et la qualité du code au cœur de mes priorités.
            </p>
          </div>
        </motion.div>
      </section>

      <footer className="py-20 px-6 border-t border-white/5 flex flex-col items-center gap-10">
        <div className="flex gap-8 text-gray-500">
           <a href="#" className="hover:text-white transition-colors"><Github size={20} /></a>
           <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
        </div>
        <p className="text-xs text-gray-600 tracking-widest uppercase">© 2026 Ange Akonde</p>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          className="text-gray-500 hover:text-white transition-colors"
        >
          <ArrowUp size={20} />
        </button>
      </footer>
    </main>
  );
}
