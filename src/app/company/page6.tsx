'use client';

import React, { useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const images = [
  "/images/h1.png",
  "/images/h2.png",
  "/images/h3.png",
];

const ProjectHighlight = () => {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  const handleNext = () => {
    const isLast = index === images.length - 1;
    const nextIndex = isLast ? 0 : index + 1;

    setPrevIndex(index);
    setIndex(nextIndex);
  };

  const getDirection = () => {
    if (index === 0 && prevIndex === images.length - 1) return "up";
    return "down";
  };

  const direction = getDirection();

  return (
    <section className={`${inter.className} mt-24`}>
      <section className="bg-[#FFFFFF] px-4 sm:px-12 lg:px-24 py-16">
        <div>
          <h2 className="text-3xl font-bold text-center mb-4">
            <span className="wildwords text-[#4B1A1B] block">PROJECT</span>
            <span className="wildwords bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent block">
              HIGHLIGHT
            </span>
          </h2>

          <div
            className="w-full max-w-3xl mx-auto cursor-pointer overflow-hidden rounded-none bg-white"
            onClick={handleNext}
          >
            <div className="relative h-[250px]">
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={images[index]}
                  initial={{ y: direction === "down" ? 300 : -300, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: direction === "down" ? -300 : 300, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute top-0 left-0 w-full h-full"
                >
                  <Image
                    src={images[index]}
                    alt={`Project ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="left"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ProjectHighlight;
