"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageSquare, ArrowUp, Github, Linkedin, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-navy text-white selection:bg-cyan-500/30 selection:text-cyan-200">
      <nav className="fixed top-0 w-full z-50 px-6 md:px-20 py-6 flex justify-between items-center backdrop-blur-md bg-navy/50 border-b border-cyan-500/10">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-cyan-400">
          BigSixteen
        </Link>
        <Link href="/" className="px-6 py-2 border border-cyan-500/30 rounded-full hover:bg-cyan-500/10 transition-colors">
          Retour
        </Link>
      </nav>

      <section className="pt-32 pb-24 px-6 md:px-20 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-12 tracking-tighter">À PROPOS D'ANGE</h1>
          
          <div className="space-y-12 text-lg text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-4">
                <span className="h-px w-8 bg-cyan-500"></span> BIOGRAPHIE
              </h2>
              <p>
                Développeur Full-Stack passionné par l’innovation numérique, je conçois des applications web modernes, évolutives et performantes. Maîtrisant l’ensemble de la stack technique, je développe des solutions complètes en plaçant l’expérience utilisateur et la qualité du code au cœur de chaque projet.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-4">
                <span className="h-px w-8 bg-cyan-500"></span> PARCOURS & VISION
              </h2>
              <p>
                Mon parcours est marqué par une quête constante de perfectionnement technique. J'aborde chaque projet comme une opportunité de repousser les limites du possible sur le web, en utilisant les technologies les plus récentes pour créer des expériences mémorables.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-4">
                <span className="h-px w-8 bg-cyan-500"></span> OBJECTIFS
              </h2>
              <p>
                Mon objectif principal est de transformer des idées complexes en interfaces fluides et intuitives. Je m'efforce de bâtir des systèmes robustes capables de soutenir la croissance de demain tout en offrant une esthétique futuriste et soignée aujourd'hui.
              </p>
            </section>
          </div>
        </motion.div>
      </section>

      <footer className="py-12 px-6 md:px-20 border-t border-cyan-500/10 flex flex-col items-center gap-8">
        <p className="text-sm text-gray-500">Ange Akonde | BigSixteen</p>
        <Link href="/" className="w-12 h-12 rounded-full border border-cyan-500/30 flex items-center justify-center hover:bg-cyan-500/10 transition-colors">
          <ArrowUp size={20} className="text-cyan-400" />
        </Link>
      </footer>
    </main>
  );
}
