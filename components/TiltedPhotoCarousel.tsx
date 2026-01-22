"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/images/album_1.jpg",
  "/images/album_2.jpg",
  "/images/album_3.jpg",
  "/images/album_4.jpg",
  "/images/album_5.jpg",
  "/images/album_6.jpg",
  "/images/album_7.jpg",
];

export function TiltedPhotoCarousel() {
  return (
    <div className="relative w-full overflow-hidden py-10">
      <motion.div
        animate={{
          x: [0, -1400],
        }}
        transition={{
          duration: 35,
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
              sizes="(max-width: 768px) 192px, 256px"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
