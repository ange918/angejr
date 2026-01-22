"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/images/axel_1767704999746.jpeg",
  "/images/merveille_1767704999752.jpeg",
  "/images/ore_1767704999754.jpeg",
  "/images/codecapital_1767704999750.jpeg",
  "/images/faslink_1767704999743.jpeg",
];

export function TiltedPhotoCarousel() {
  return (
    <div className="relative w-full overflow-hidden py-10">
      <motion.div
        animate={{
          x: [0, -1000],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex gap-8 w-max"
      >
        {[...images, ...images, ...images].map((src, index) => (
          <motion.div
            key={index}
            style={{ rotate: index % 2 === 0 ? 5 : -5 }}
            whileHover={{ rotate: 0, scale: 1.05, zIndex: 10 }}
            className="relative w-48 h-64 md:w-64 md:h-80 flex-shrink-0 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl bg-navy/50"
          >
            <Image
              src={src}
              alt={`Photo ${index}`}
              fill
              className="object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
