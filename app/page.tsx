"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, MessageSquare, ArrowUp, Github, Linkedin, ExternalLink, Menu, X, Quote, Copy, Check, Facebook, Instagram } from "lucide-react";
import { FlipWords } from "@/components/ui/flip-words";
import { ExpandableCardDemo } from "./components/ExpandableCard";
import Link from "next/link";
import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const projects = [
  { 
    name: "Model Academy Management", 
    category: "Web", 
    status: "Terminé", 
    stack: ["Next.js", "PostgreSQL", "Tailwind"], 
    image: "/images/modelacademy_1767704999756.jpeg",
    description: "Une plateforme complète de gestion pour les académies de mannequins, incluant le suivi des inscriptions, la gestion des plannings et les profils des talents.",
    link: "https://model-academy.example.com"
  },
  { 
    name: "Portfolio – Ore Gauthier", 
    category: "Web", 
    status: "Terminé", 
    stack: ["React", "Framer Motion", "Three.js"], 
    image: "/images/ore_1767704999754.jpeg",
    description: "Un portfolio immersif pour un architecte, utilisant des éléments 3D et des animations fluides pour mettre en valeur ses réalisations.",
    link: "https://oregauthier.com"
  },
  { 
    name: "Portfolio – Merveille Susuni", 
    category: "Web", 
    status: "Terminé", 
    stack: ["Web", "GSAP", "Tailwind"], 
    image: "/images/merveille_1767704999752.jpeg",
    description: "Design minimaliste et animations sophistiquées pour cette vitrine personnelle d'entrepreneure.",
    link: "https://merveillesusuni.com"
  },
  { 
    name: "Site officiel – Axel Merryl", 
    category: "Web", 
    status: "Terminé", 
    stack: ["PHP", "Laravel", "MySQL"], 
    image: "/images/axel_1767704999746.jpeg",
    description: "Plateforme officielle de l'artiste Axel Merryl, centralisant ses actualités, ses clips et ses dates de tournée.",
    link: "https://axelmerryl.com"
  },
  { 
    name: "Code Capital", 
    category: "Progiciel", 
    status: "Terminé", 
    stack: ["React", "Node.js", "MongoDB"], 
    image: "/images/codecapital_1767704999750.jpeg",
    description: "Solution SaaS de gestion financière et d'investissement pour les startups.",
    link: "https://codecapital.net"
  },
  { 
    name: "FASHLINK", 
    category: "Web", 
    status: "En cours", 
    stack: ["Next.js", "Prisma", "Tailwind"], 
    image: "/images/faslink_1767704999743.jpeg",
    description: "Réseau social dédié à l'industrie de la mode connectant créateurs et acheteurs.",
    link: "#"
  },
  { 
    name: "DAHOMEY TECH", 
    category: "Mobile", 
    status: "En cours", 
    stack: ["React", "Firebase", "Styled Components"],
    description: "Application mobile de veille technologique et d'actualités tech au Bénin.",
    link: "#"
  },
  { 
    name: "FOODMOOD", 
    category: "Mobile", 
    status: "En cours", 
    stack: ["Next.js", "Supabase", "Tailwind"],
    description: "Application de recommandation de restaurants basée sur votre humeur du moment.",
    link: "#"
  },
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
  { name: "Git", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" },
  { name: "MongoDB", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" },
  { name: "WordPress", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/wordpress/wordpress-plain.svg" },
];

const learningSkills = [
  { name: "Python", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
  { name: "Java", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" },
  { name: "C", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" },
  { name: "C++", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" },
  { name: "Go", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original-wordmark.svg" },
  { name: "Rust", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/rust/rust-original.svg" },
  { name: "Kotlin", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/kotlin/kotlin-original.svg" },
  { name: "Swift", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original.svg" },
];

const titles = ["Développeur Full-Stack", "Ingénieur Logiciel", "Créateur Digital"];


const carouselData = [
  {
    category: "Solutions Web",
    title: "Sites E-commerce",
    src: "/assets/generated/modern_e-commerce_website_interface_mockup.png",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Boutiques en ligne modernes et performantes.
          </span>{" "}
          Optimisées pour la vente et l'expérience client. Intégration de paiements sécurisés et gestion simplifiée des stocks.
        </p>
        <Image
          src="/assets/generated/modern_e-commerce_website_interface_mockup.png"
          alt="E-commerce mockup"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-10"
        />
      </div>
    ),
  },
  {
    category: "Présence Digitale",
    title: "Portfolios & Vitrines",
    src: "/assets/generated/minimalist_portfolio_website_design_mockup.png",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Capturer l'identité de votre marque.
          </span>{" "}
          Sites vitrines élégants pour professionnels et entreprises. Des designs uniques qui mettent en valeur votre savoir-faire.
        </p>
        <Image
          src="/assets/generated/minimalist_portfolio_website_design_mockup.png"
          alt="Portfolio mockup"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-10"
        />
      </div>
    ),
  },
  {
    category: "Outils Métiers",
    title: "SaaS & Dashboards",
    src: "/assets/generated/modern_saas_dashboard_interface_mockup.png",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Automatisation et gestion de données.
          </span>{" "}
          Logiciels en tant que service (SaaS) et tableaux de bord complexes pour le suivi d'activité et l'optimisation de vos processus.
        </p>
        <Image
          src="/assets/generated/modern_saas_dashboard_interface_mockup.png"
          alt="SaaS mockup"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-10"
        />
      </div>
    ),
  },
  {
    category: "Services Mobiles",
    title: "Applications Mobiles",
    src: "/assets/generated/sleek_mobile_app_interface_mockup.png",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Expérience fluide sur iOS et Android.
          </span>{" "}
          Applications natives et hybrides offrant des fonctionnalités avancées et une interface utilisateur soignée.
        </p>
        <Image
          src="/assets/generated/sleek_mobile_app_interface_mockup.png"
          alt="Mobile app mockup"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-10"
        />
      </div>
    ),
  },
  {
    category: "Networking",
    title: "Réseaux Sociaux & Annuaires",
    src: "/assets/generated/social_networking_platform_interface_mockup.png",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Connecter les talents et opportunités.
          </span>{" "}
          Plateformes de mise en relation et réseaux sociaux thématiques pour favoriser les synergies professionnelles.
        </p>
        <Image
          src="/assets/generated/social_networking_platform_interface_mockup.png"
          alt="Networking mockup"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-10"
        />
      </div>
    ),
  },
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

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
        style={{ backgroundImage: "url('/images/WhatsApp_Image_2026-01-05_at_22.04.42_1767647805935.jpeg')" }}
      />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-navy via-transparent to-navy pointer-events-none" />

      {/* Header */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 md:px-12 py-4 ${
          isScrolled ? "bg-navy/80 backdrop-blur-md border-b border-cyan-500/5 py-3" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/images/jrc_logo.jpg" 
              alt="JRC Digit Logo" 
              width={40} 
              height={40} 
              className="rounded-full"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {["À Propos", "Projets", "Compétences", "Contact"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace("à ", "").replace("é", "e")}`}
                className="text-[10px] font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-widest"
              >
                {item}
              </a>
            ))}
          </nav>

          <button 
            className="md:hidden text-gray-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.nav 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-navy border-b border-cyan-500/5 p-6 flex flex-col gap-4 md:hidden backdrop-blur-xl"
          >
            {["À Propos", "Projets", "Compétences", "Contact"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace("à ", "").replace("é", "e")}`}
                className="text-base font-medium text-gray-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.nav>
        )}
      </header>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 text-center overflow-hidden z-10"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-cyan-500/60 mb-4 font-sans">Ange Akonde</h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter leading-none">
            <span className="text-white">B</span><span className="text-white lowercase">ig</span><span className="text-[#06b6d4]">S</span><span className="text-[#06b6d4] lowercase">ixteen</span>
          </h1>
          <div className="text-lg md:text-2xl text-gray-400 mb-8 h-10 flex items-center justify-center font-light">
            <FlipWords words={titles} className="text-white font-medium" />
          </div>
          <p className="text-sm md:text-base text-gray-400 mb-10 max-w-lg mx-auto leading-relaxed font-light">
            Concevoir des applications web modernes, performantes et orientées expérience utilisateur.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#projets" className="text-[10px] font-bold uppercase tracking-widest text-white border-b border-cyan-500 pb-1 hover:border-white transition-all">
              Voir mes projets
            </a>
            <a href="#contact" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-all">
              Me contacter
            </a>
          </div>
        </motion.div>
      </motion.section>

      {/* Realizations Section (Carousel) - Moved here */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-12 px-6 z-10 relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-[14px] md:text-[18px] font-bold tracking-[0.3em] text-cyan-500/60 uppercase">Les choses que je réalise</h2>
        </div>
        
        <Marquee gradient={false} speed={50} pauseOnHover={true}>
          {carouselData.map((item, index) => (
            <motion.div
              key={index}
              className="mx-4 w-[280px] md:w-[400px] group cursor-pointer"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-white/5 border border-white/10 mb-4">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
                  <p className="text-cyan-400 text-xs font-bold tracking-widest uppercase mb-2">{item.category}</p>
                  <h3 className="text-white text-xl md:text-2xl font-bold">{item.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
          {/* Duplicate to ensure continuous loop if items are few */}
          {carouselData.map((item, index) => (
            <motion.div
              key={`dup-${index}`}
              className="mx-4 w-[280px] md:w-[400px] group cursor-pointer"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-white/5 border border-white/10 mb-4">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
                  <p className="text-cyan-400 text-xs font-bold tracking-widest uppercase mb-2">{item.category}</p>
                  <h3 className="text-white text-xl md:text-2xl font-bold">{item.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </Marquee>
      </motion.section>

      {/* About Section */}
      <motion.section 
        id="propos" 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-24 px-6 z-10 relative"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <h2 className="text-[14px] md:text-[18px] font-bold tracking-[0.3em] text-cyan-500/60 mb-10 uppercase">À Propos</h2>
              <div className="space-y-5 text-lg md:text-xl text-gray-200 leading-relaxed font-light">
                <p>
                  Je suis <span className="text-white font-medium">Ange AKONDE</span>, développeur FullStack passionné par les nouvelles technologies et l'innovation numérique. Après avoir suivi une formation intensive en développement web, je crée des applications modernes, performantes et élégantes.
                </p>
                <p>
                  Ma spécialité couvre l'ensemble de la stack technique : de l'interface utilisateur intuitive au backend robuste. Je maîtrise JavaScript, React, Node.js, et les architectures modernes pour délivrer des solutions complètes et durables.
                </p>
              </div>
              <Link href="/a-propos" className="inline-block mt-8 text-[10px] font-bold text-cyan-400 hover:text-white transition-colors border-b border-cyan-500/20 pb-1 uppercase tracking-widest">
                Lire la suite
              </Link>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 md:order-2 relative aspect-square max-w-sm mx-auto md:max-w-none w-full"
            >
              <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full" />
              <div className="relative h-full w-full rounded-2xl overflow-hidden border border-white/10 group">
                <Image 
                  src="/images/WhatsApp_Image_2026-01-05_at_22.04.42_1767647805935.jpeg" 
                  alt="Ange Akonde" 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Education & Freelance Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-12 px-6 z-10 relative bg-white/[0.01]"
      >
        <div className="max-w-3xl mx-auto space-y-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="border-l-2 border-cyan-500/30 pl-8"
          >
            <h3 className="text-[10px] font-bold tracking-[0.3em] text-cyan-500/60 mb-4 uppercase font-sans">Formation</h3>
            <p className="text-xl md:text-2xl text-white font-light leading-relaxed">
              Actuellement en <span className="text-cyan-400 font-medium">deuxième année</span> de formation à <span className="text-white font-medium">Futurcraft Institut</span>, où je perfectionne mes compétences en ingénierie logicielle.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="border-r-2 border-cyan-500/30 pr-8 text-right"
          >
            <h3 className="text-[10px] font-bold tracking-[0.3em] text-cyan-500/60 mb-4 uppercase font-sans">Freelance</h3>
            <p className="text-xl md:text-2xl text-white font-light leading-relaxed">
              Je suis <span className="text-cyan-400 font-medium">prêt à travailler en freelance</span> sur vos projets, apportant mon expertise partout à travers <span className="text-white font-medium">le monde</span>.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center pt-8 border-t border-white/5"
          >
            <h3 className="text-[10px] font-bold tracking-[0.3em] text-cyan-500/60 mb-4 uppercase font-sans">Futur Proche</h3>
            <p className="text-xl md:text-2xl text-white font-light leading-relaxed">
              Je compte créer ma propre boîte, <span className="text-cyan-400 font-medium italic">JRC Digit</span> (en cours de création), dès la fin de ma formation pour donner vie à de nouveaux standards numériques.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        id="projets" 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-24 px-6 bg-white/[0.01] z-10 relative"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col mb-16 gap-8">
            <div className="text-left w-full overflow-hidden">
              <h2 className="text-4xl md:text-9xl font-bold tracking-tighter text-cyan-500 uppercase opacity-20 leading-none min-h-[1.2em] flex items-center">
                <FlipWords words={["Portfolio", "Réalisations", "Projets"]} className="text-cyan-500" />
              </h2>
            </div>
            
            <div className="flex flex-wrap gap-4">
              {["Tous", "Mobile", "Progiciel", "Web"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all border ${
                    activeCategory === cat 
                      ? "bg-cyan-500 border-cyan-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]" 
                      : "bg-white/5 border-white/10 text-gray-400 hover:border-cyan-500/50 hover:text-cyan-400"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="popLayout">
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {projects
                .filter(p => p.image && (activeCategory === "Tous" || p.category === activeCategory))
                .map((project, i) => (
                  <motion.div
                    key={project.name}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    onClick={() => setSelectedProject(project)}
                    className="relative rounded-3xl overflow-hidden group border border-white/5 cursor-pointer aspect-video md:aspect-auto md:h-[300px]"
                  >
                    <Image 
                      src={project.image!} 
                      alt={project.name} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 flex flex-col justify-end">
                      <p className="text-cyan-400 text-[10px] font-bold tracking-widest uppercase mb-2">{project.category}</p>
                      <h4 className="text-white text-xl font-bold mb-2">{project.name}</h4>
                      <div className="flex gap-2 flex-wrap">
                        {project.stack.map(s => (
                          <span key={s} className="text-[8px] px-2 py-1 bg-white/10 rounded-md text-gray-300 uppercase tracking-widest">{s}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-navy/90 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-navy border border-white/10 rounded-[2.5rem] overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white/70 hover:text-white transition-all backdrop-blur-md border border-white/5"
              >
                <X size={20} />
              </button>

              <div className="w-full md:w-1/2 relative aspect-square md:aspect-auto">
                <Image 
                  src={selectedProject.image!} 
                  alt={selectedProject.name} 
                  fill 
                  className="object-cover"
                />
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center overflow-y-auto">
                <p className="text-cyan-500 text-xs font-bold tracking-[0.3em] uppercase mb-4">{selectedProject.category}</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">{selectedProject.name}</h2>
                <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed mb-8">
                  {selectedProject.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-10">
                  {selectedProject.stack.map(s => (
                    <span key={s} className="text-[10px] px-3 py-1.5 bg-white/5 rounded-full text-gray-400 border border-white/5 uppercase tracking-widest font-medium">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={selectedProject.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-white rounded-2xl font-bold uppercase tracking-widest text-[10px] text-center transition-all flex items-center justify-center gap-2 group shadow-lg shadow-cyan-500/20"
                  >
                    Visiter le projet <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="flex-1 px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl font-bold uppercase tracking-widest text-[10px] text-center transition-all"
                  >
                    Retour
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expertise Section */}
      <motion.section 
        id="competences" 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-24 px-6 z-10 relative"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[14px] md:text-[18px] font-bold tracking-[0.3em] text-cyan-500/60 mb-12 uppercase">Expertise</h2>
          
          <div className="mb-16">
            <h3 className="text-[8px] font-bold tracking-[0.2em] text-gray-500 mb-8 uppercase italic">Langages & Outils maîtrisés</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-11 gap-6 items-center justify-items-center">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 360,
                    transition: { duration: 0.8, ease: "easeInOut" }
                  }}
                  className="flex flex-col items-center gap-2 group cursor-pointer"
                >
                  <motion.div 
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
                    className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center p-1.5 rounded-lg bg-white/[0.02] border border-white/5 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/5 transition-all shadow-lg shadow-transparent group-hover:shadow-cyan-500/10"
                  >
                    <Image src={skill.logo} alt={skill.name} width={48} height={48} className="w-full h-full object-contain transition-all duration-300" />
                  </motion.div>
                  <span className="text-[8px] md:text-[9px] font-medium text-gray-500 uppercase tracking-widest group-hover:text-cyan-400 transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-24">
            <h3 className="text-[8px] font-bold tracking-[0.2em] text-cyan-500/40 mb-8 uppercase italic">En cours d'apprentissage</h3>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-6 items-center justify-items-center">
              {learningSkills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center gap-2 group cursor-pointer"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center p-1.5 rounded-lg bg-white/[0.01] border border-white/5 transition-all">
                    <Image src={skill.logo} alt={skill.name} width={40} height={40} className="w-full h-full object-contain" />
                  </div>
                  <span className="text-[7px] md:text-[8px] font-medium text-gray-600 uppercase tracking-widest group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-24 bg-white/[0.01] overflow-hidden z-10 relative"
      >
        <div className="max-w-4xl mx-auto px-6 mb-12 text-center">
          <h2 className="text-[14px] md:text-[18px] font-bold tracking-[0.3em] text-cyan-500/60 uppercase">Témoignages</h2>
        </div>
        <Marquee gradient={false} speed={30} pauseOnHover={true}>
          {testimonials.map((t, i) => (
            <div key={i} className="mx-6 bg-white/[0.03] border border-white/5 p-6 rounded-xl w-[300px] md:w-[380px]">
              <Quote className="text-cyan-500/40 mb-4" size={20} />
              <p className="text-gray-300 mb-6 font-light italic leading-relaxed text-sm">"{t.content}"</p>
              <div>
                <p className="text-white font-bold text-xs">{t.name}</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-0.5">{t.role}</p>
              </div>
            </div>
          ))}
        </Marquee>
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-24 px-6 z-10 relative"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[14px] md:text-[18px] font-bold tracking-[0.3em] text-cyan-500/60 mb-16 uppercase text-center">Foire Aux Questions</h2>
          <div className="space-y-4">
            {[
              { q: "Quels types de projets réalisez-vous ?", a: "Je réalise principalement des applications web complexes (SaaS, dashboards), des sites e-commerce performants et des portfolios haut de gamme avec des animations fluides." },
              { q: "Quelles technologies utilisez-vous ?", a: "Ma stack principale inclut Next.js, React, Node.js, PHP/Laravel et des bases de données comme PostgreSQL ou MongoDB." },
              { q: "Êtes-vous disponible pour du freelance ?", a: "Oui, je suis actuellement ouvert aux opportunités en freelance pour des projets partout dans le monde." },
              { q: "Comment se déroule une collaboration ?", a: "Nous commençons par une phase d'échange pour comprendre vos besoins, suivie d'une proposition technique, du design, du développement et enfin de la mise en ligne." }
            ].map((faq, i) => {
              const [isOpen, setIsOpen] = useState(false);
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl bg-white/[0.02] border border-white/5 overflow-hidden hover:border-cyan-500/20 transition-all"
                >
                  <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full p-6 text-left flex justify-between items-center group"
                  >
                    <h3 className="text-white font-medium flex items-center gap-3">
                      <span className="text-cyan-500 font-bold">0{i+1}.</span> {faq.q}
                    </h3>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      className="text-cyan-500/60 group-hover:text-cyan-500"
                    >
                      <ArrowUp className="rotate-180" size={18} />
                    </motion.div>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-400 text-sm font-light leading-relaxed pl-14">
                      {faq.a}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact" 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-24 px-6 z-10 relative"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-[14px] md:text-[18px] font-bold tracking-[0.3em] text-cyan-500/60 mb-10 uppercase">Contact</h2>
              <p className="text-xl font-light text-gray-300 mb-10">Construisons quelque chose de remarquable ensemble.</p>
              <div className="space-y-5">
                <p className="text-[10px] text-gray-500 tracking-widest uppercase font-bold">Email</p>
                <div className="flex items-center gap-3 group">
                  <a href="mailto:akondejunior18@gmail.com" className="text-lg font-medium block hover:text-cyan-400 transition-colors">
                    akondejunior18@gmail.com
                  </a>
                  <button 
                    onClick={copyEmail}
                    className="p-1.5 hover:bg-white/5 rounded-lg transition-colors text-gray-500 hover:text-cyan-400"
                    title="Copier l'email"
                  >
                    {emailCopied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                  </button>
                </div>
              </div>
            </div>
            <form className="space-y-6">
              <input type="text" placeholder="Nom" className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-cyan-500 transition-all font-light text-sm text-white placeholder:text-gray-600" />
              <input type="email" placeholder="Email" className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-cyan-500 transition-all font-light text-sm text-white placeholder:text-gray-600" />
              <textarea rows={3} placeholder="Message" className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-cyan-500 transition-all font-light text-sm resize-none text-white placeholder:text-gray-600"></textarea>
              <button className="text-[10px] font-bold uppercase tracking-widest border border-white/20 px-8 py-3 hover:bg-white hover:text-navy transition-all">
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-24 px-6 border-t border-white/5 z-10 relative bg-navy/50 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image src="/images/jrc_logo.jpg" alt="JRC Digit Logo" width={50} height={50} className="rounded-full" />
              <span className="text-xl font-bold tracking-tighter">BigSixteen</span>
            </Link>
            <p className="text-gray-400 font-light leading-relaxed max-w-sm">
              Développeur FullStack passionné par la création d'expériences numériques d'exception. Transformons vos idées en réalité.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-[0.2em] mb-6">Liens Rapides</h4>
            <ul className="space-y-4">
              {["À Propos", "Projets", "Compétences", "Contact"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace("à ", "").replace("é", "e")}`}
                    className="text-gray-500 hover:text-cyan-400 transition-colors text-sm font-light"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-[0.2em] mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:akondejunior18@gmail.com" className="text-gray-500 hover:text-cyan-400 transition-colors text-sm font-light">
                  akondejunior18@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/2290165291352" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-cyan-400 transition-colors text-sm font-light flex items-center gap-2">
                  WhatsApp: +229 01 65 29 13 52
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-gray-600 tracking-widest uppercase italic">
            © 2026 JRC Digit. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-gray-500">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors"><Facebook size={18} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors"><Instagram size={18} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors"><Linkedin size={18} /></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors"><Github size={18} /></a>
          </div>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-cyan-400 hover:border-cyan-400/50 transition-all"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </footer>
    </motion.main>
  );
}
