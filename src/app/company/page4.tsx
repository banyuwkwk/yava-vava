import React, { useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const highlightImages = [
  "/images/kids1.png",
  "/images/kids2.png",
  "/images/kids3.png",
];

const Highlight = () => {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  const handleNext = () => {
    const nextIndex = (index + 1) % highlightImages.length;
    setPrevIndex(index);
    setIndex(nextIndex);
  };

  const getDirection = () => {
    if (index === 0 && prevIndex === highlightImages.length - 1) return "up";
    return "down";
  };

  const direction = getDirection();

  return (
    <section className={`${inter.className} mt-24`}>
      <section className="bg-[#FFFFFF] px-4 sm:px-12 lg:px-24 py-16">
        <div>
          <div className="text-center mb-4">
            <h2 className="text-3xl font-bold wildwords text-[#5A2C21]">
              ANAKARDIA KIDS
            </h2>
            <h2 className="text-3xl font-bold wildwords bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              HIGHLIGHT
            </h2>
          </div>

          <div
            className="w-full max-w-3xl mx-auto cursor-pointer overflow-hidden bg-white rounded-none"
            onClick={handleNext}
          >
            <div className="relative h-[250px]">
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={highlightImages[index]}
                  initial={{ y: direction === "down" ? 300 : -300, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: direction === "down" ? -300 : 300, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute top-0 left-0 w-full h-full"
                >
                  <Image
                    src={highlightImages[index]}
                    alt={`Highlight Anakardia ${index + 1}`}
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

export default Highlight;
