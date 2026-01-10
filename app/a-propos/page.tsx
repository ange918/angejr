"use client";

import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-navy text-white selection:bg-cyan-500/30 selection:text-cyan-200 relative"
    >
      {/* Background Image fixed */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-10 grayscale pointer-events-none"
        style={{ backgroundImage: "url('/images/WhatsApp_Image_2026-01-05_at_22.04.42_1767647805935.jpeg')" }}
      />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-navy via-transparent to-navy pointer-events-none" />

      <nav className="fixed top-0 w-full z-50 px-6 md:px-12 py-4 flex justify-between items-center backdrop-blur-md bg-navy/50 border-b border-white/5">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/images/jrc_logo.jpg" 
            alt="JRC Digit Logo" 
            width={40} 
            height={40} 
            className="rounded-full"
          />
          <span className="text-lg font-bold tracking-tighter text-white">
            <span className="text-white">B</span>ig<span className="text-[#06b6d4]">Sixteen</span>
          </span>
        </Link>
        <Link href="/" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
          Retour
        </Link>
      </nav>

      <section className="pt-32 pb-20 px-6 md:px-12 max-w-2xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[10px] font-bold tracking-[0.3em] text-cyan-500/60 mb-10 uppercase font-sans">À Propos</h2>
          <h1 className="text-3xl md:text-5xl font-bold mb-12 tracking-tighter leading-tight text-white">Je suis Ange AKONDE.</h1>
          
          <div className="space-y-8 text-base md:text-lg text-gray-400 leading-relaxed font-light">
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

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16 space-y-12"
          >
            <div className="pt-12 border-t border-white/5">
              <h2 className="text-[10px] font-bold tracking-[0.3em] text-cyan-500/60 mb-6 uppercase">Ma Formation</h2>
              <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed">
                Je poursuis actuellement mon cursus académique à <span className="text-white font-medium">Futurcraft Institut</span>, où je suis en <span className="text-cyan-400 font-medium">deuxième année</span>. Cette formation me permet d'approfondir mes connaissances théoriques tout en les appliquant à des projets concrets et innovants.
              </p>
            </div>

            <div className="pt-12 border-t border-white/5">
              <h2 className="text-[10px] font-bold tracking-[0.3em] text-cyan-500/60 mb-6 uppercase">Collaboration Freelance</h2>
              <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed">
                Au-delà de mon parcours académique, je suis activement ouvert aux opportunités en <span className="text-cyan-400 font-medium">freelance</span>. Ma vision est sans frontières : je suis prêt à collaborer avec des clients et des entreprises <span className="text-white font-medium">partout à travers le monde</span> pour transformer des idées ambitieuses en réalités numériques.
              </p>
            </div>

            <div className="pt-12 border-t border-white/5">
              <h2 className="text-[10px] font-bold tracking-[0.3em] text-cyan-500/60 mb-6 uppercase">Entrepreneuriat</h2>
              <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed">
                Mon ambition ne s'arrête pas là. Je prépare activement le lancement de ma structure, <span className="text-cyan-400 font-medium italic">JRC Digit</span>. Ce projet, actuellement en cours de création, sera officiellement lancé juste après la fin de ma formation, avec pour mission d'accompagner la transformation digitale des entreprises.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <footer className="py-16 px-6 border-t border-white/5 flex flex-col items-center gap-8 z-10 relative">
        <div className="flex gap-6 text-gray-500">
           <a href="#" className="hover:text-white transition-colors"><Github size={18} /></a>
           <a href="#" className="hover:text-white transition-colors"><Linkedin size={18} /></a>
        </div>
        <p className="text-[10px] text-gray-600 tracking-widest uppercase">© 2026 Ange Akonde</p>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          className="text-gray-500 hover:text-white transition-colors"
        >
          <ArrowUp size={18} />
        </button>
      </footer>
    </motion.main>
  );
}
