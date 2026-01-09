"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { ExternalLink, CheckCircle2, X } from "lucide-react";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const id = useId();

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref as React.RefObject<HTMLDivElement>, () => setActive(null));

  const completedProjects = cards.filter(card => card.status === "Terminé");
  const ongoingProjects = cards.filter(card => card.status === "En cours");

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[200]">
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-navy border border-white/10 sm:rounded-3xl overflow-hidden relative z-[210]"
            >
              <motion.button
                key={`close-button-${active.title}-${id}`}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute top-20 right-4 md:top-4 md:right-4 z-[220] flex items-center justify-center bg-white/20 hover:bg-white/30 backdrop-blur-xl rounded-full h-12 w-12 text-white transition-all shadow-2xl border border-white/20"
                onClick={() => setActive(null)}
              >
                <X size={28} />
              </motion.button>
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={500}
                  height={500}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-white text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-gray-400 text-sm"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-cyan-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-gray-300 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto [mask-image:linear-gradient(to_bottom,transparent,white_20%,white_80%,transparent)]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      
      <div className="space-y-16">
        <div>
          <h3 className="text-[12px] md:text-[16px] font-bold tracking-[0.2em] text-white mb-8 uppercase border-l-2 border-cyan-500 pl-4">Projets Terminés</h3>
          <div className="relative group/carousel">
            <div 
              ref={carouselRef}
              className="flex flex-nowrap overflow-x-auto gap-6 max-w-7xl mx-auto px-4 pb-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden scroll-smooth"
            >
              {completedProjects.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setActive(card)}
                  className="group relative flex flex-col bg-navy border border-white/5 rounded-2xl overflow-hidden cursor-pointer hover:bg-white/[0.03] transition-colors h-[320px] w-[240px] md:h-[400px] md:w-[300px] flex-shrink-0"
                >
                  <div className="absolute inset-0 w-full h-full">
                    <Image
                      src={card.src}
                      alt={card.title}
                      fill
                      sizes="(max-width: 768px) 300px, 300px"
                      className="object-cover group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent opacity-80" />
                  </div>
                  
                  <div className="relative mt-auto p-6 flex flex-col gap-4">
                    <h3 className="font-bold text-white text-lg">{card.title}</h3>
                    <div className="flex gap-2">
                      {card.ctaLink && card.ctaLink !== "#" && (
                        <a 
                          href={card.ctaLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 text-center px-6 py-2.5 text-[10px] rounded-full font-bold bg-cyan-500 text-white hover:bg-cyan-400 transition duration-200 uppercase tracking-widest"
                        >
                          Visiter
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="flex justify-center gap-4 mt-4">
              <button 
                onClick={() => scroll('left')}
                className="p-2 rounded-full bg-navy/80 border border-white/10 text-white transition-all hover:bg-cyan-500/20 active:scale-95"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              </button>
              <button 
                onClick={() => scroll('right')}
                className="p-2 rounded-full bg-navy/80 border border-white/10 text-white transition-all hover:bg-cyan-500/20 active:scale-95"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </div>
          </div>
        </div>

                <div>
                  <h3 className="text-[12px] md:text-[16px] font-bold tracking-[0.2em] text-cyan-500/60 mb-8 uppercase border-l-2 border-cyan-500/20 pl-4">Projets en Cours</h3>
                  <ul className="max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                    {ongoingProjects.map((card, index) => (
                      <motion.div
                        layoutId={`card-${card.title}-${id}`}
                        key={`card-${card.title}-${id}`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        onClick={() => setActive(card)}
                        className="group flex flex-col bg-navy border border-white/5 rounded-2xl overflow-hidden cursor-pointer hover:bg-white/[0.03] transition-colors"
                      >
                        <div className="aspect-video relative overflow-hidden">
                          <Image
                            src={card.src}
                            alt={card.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover group-hover:scale-110 transition duration-500"
                          />
                        </div>
                        <div className="p-4 flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <motion.h3
                              layoutId={`title-${card.title}-${id}`}
                              className="font-bold text-white text-sm"
                            >
                              {card.title}
                            </motion.h3>
                          </div>
                          <div className="flex gap-2">
                            {card.ctaLink && card.ctaLink !== "#" && (
                              <a 
                                href={card.ctaLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="px-4 py-2 text-[10px] rounded-full font-bold bg-cyan-500 text-white opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition duration-200 uppercase tracking-widest"
                              >
                                Visiter
                              </a>
                            )}
                            <motion.button
                              layoutId={`button-${card.title}-${id}`}
                              className="px-4 py-2 text-[10px] rounded-full font-bold bg-white/10 text-white opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition duration-200 uppercase tracking-widest"
                            >
                              Détails
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </ul>
                </div>
      </div>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Développement Next.js & PostgreSQL",
    title: "Model Academy Management",
    src: "/images/modelacademy_1767704999756.jpeg",
    ctaText: "Visiter",
    ctaLink: "https://model-tau-one.vercel.app",
    status: "Terminé",
    content: () => {
      return (
        <p>
          Plateforme complète de gestion pour agence de mannequinat, incluant la gestion des profils, 
          le suivi des formations et l'administration des événements. Développé avec Next.js pour 
          la performance et PostgreSQL pour une gestion de données robuste.
        </p>
      );
    },
  },
  {
    description: "Design immersif avec Three.js",
    title: "Portfolio – Ore Gauthier",
    src: "/images/ore_1767704999754.jpeg",
    ctaText: "Visiter",
    ctaLink: "https://oregauthier-kuvg.vercel.app/",
    status: "Terminé",
    content: () => {
      return (
        <p>
          Un portfolio futuriste conçu pour un architecte, mettant en avant ses réalisations via 
          des animations 3D complexes et une expérience utilisateur fluide.
        </p>
      );
    },
  },
  {
    description: "Modernité et animations GSAP",
    title: "Portfolio – Merveille Susuni",
    src: "/images/merveille_1767704999752.jpeg",
    ctaText: "Visiter",
    ctaLink: "https://merveilsusuni-1zqz.vercel.app/",
    status: "Terminé",
    content: () => {
      return (
        <p>
          Site personnel pour une entrepreneure, axé sur le storytelling visuel et 
          l'élégance graphique, utilisant GSAP pour des transitions sur mesure.
        </p>
      );
    },
  },
  {
    description: "Écosystème Laravel puissant",
    title: "Site officiel – Axel Merryl",
    src: "/images/axel_1767704999746.jpeg",
    ctaText: "Visiter",
    ctaLink: "https://axelmerryl-jwy6.vercel.app",
    status: "Terminé",
    content: () => {
      return (
        <p>
          Le portail officiel d'un artiste international, regroupant actualités, 
          discographie et contact, optimisé pour un fort trafic.
        </p>
      );
    },
  },
  {
    description: "Architecture Fintech Moderne",
    title: "Code Capital",
    src: "/images/codecapital_1767704999750.jpeg",
    ctaText: "Visiter",
    ctaLink: "https://code-capital-4sjr.vercel.app",
    status: "Terminé",
    content: () => {
      return (
        <p>
          Interface de trading algorithmique et tableau de bord de performance financière, 
          développé avec une stack React/Node.js pour la réactivité en temps réel.
        </p>
      );
    },
  },
  {
    description: "Annuaire et réseau de talents",
    title: "FASHLINK",
    src: "/images/faslink_1767704999743.jpeg",
    ctaText: "Visiter",
    ctaLink: "https://flashlink-topaz.vercel.app",
    status: "En cours",
    content: () => {
      return (
        <p>
          Réseau social professionnel dédié à l'industrie de la mode en Afrique, 
          permettant la mise en relation entre talents et recruteurs.
        </p>
      );
    },
  },
  {
    description: "Expérience shopping fluide et moderne",
    title: "E-commerce – Président Djangoun",
    src: "/images/WhatsApp_Image_2026-01-05_at_22.04.43_1767648255135.jpeg",
    ctaText: "Voir plus",
    ctaLink: "#",
    status: "En cours",
    content: () => {
      return (
        <p>
          Une boutique en ligne haut de gamme conçue pour une expérience client optimale, 
          avec une gestion simplifiée du catalogue et un processus de paiement sécurisé.
        </p>
      );
    },
  },
  {
    description: "L'innovation technologique au service de l'Afrique",
    title: "DAHOMEY TECH",
    src: "/images/WhatsApp_Image_2026-01-05_at_22.04.43_1767649778080.jpeg",
    ctaText: "Voir plus",
    ctaLink: "#",
    status: "En cours",
    content: () => {
      return (
        <p>
          Une plateforme dédiée à la promotion des startups et des innovations technologiques, 
          mettant en lumière les talents et les solutions numériques locales.
        </p>
      );
    },
  },
  {
    description: "La gastronomie à portée de clic",
    title: "FOODMOOD",
    src: "/images/WhatsApp_Image_2026-01-05_at_22.04.43_1767647806079.jpeg",
    ctaText: "Voir plus",
    ctaLink: "#",
    status: "En cours",
    content: () => {
      return (
        <p>
          Une application moderne de commande et de livraison de repas, 
          offrant une sélection variée de restaurants pour satisfaire toutes les envies.
        </p>
      );
    },
  },
];
