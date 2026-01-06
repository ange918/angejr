"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

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
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
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
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-navy border border-white/10 sm:rounded-3xl overflow-hidden"
            >
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
      <ul className="max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-white/[0.03] rounded-xl cursor-pointer border border-white/5 transition-colors"
          >
            <div className="flex gap-4 flex-col md:flex-row items-center">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-white text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-gray-500 text-center md:text-left text-xs"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-xs rounded-full font-bold bg-white/5 text-white mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
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
    description: "Expertise en développement Next.js & PostgreSQL",
    title: "Model Academy Management",
    src: "/images/modelacademy_1767704999756.jpeg",
    ctaText: "Voir plus",
    ctaLink: "#",
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
    ctaText: "Voir plus",
    ctaLink: "#",
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
    ctaText: "Voir plus",
    ctaLink: "#",
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
    ctaText: "Voir plus",
    ctaLink: "#",
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
    ctaText: "Voir plus",
    ctaLink: "#",
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
    ctaText: "Voir plus",
    ctaLink: "#",
    content: () => {
      return (
        <p>
          Réseau social professionnel dédié à l'industrie de la mode en Afrique, 
          permettant la mise en relation entre talents et recruteurs.
        </p>
      );
    },
  },
];
