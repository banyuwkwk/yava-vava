import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const farmerImages = [
  "/images/f1.png",
  "/images/f2.png",
  "/images/f3.png",
  "/images/f4.png",
  "/images/f5.png",
  "/images/f6.png",
];

const FarmerDevelopmentSection = () => {
  const [farmerImageIndex, setFarmerImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFarmerImageIndex((prevIndex) => (prevIndex + 1) % farmerImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={inter.className}>
      <section className="bg-[#FDF5E6] px-4 sm:px-8 lg:px-24 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-6 mt-12 md:mt-24">

            {/* TEKS */}
            <motion.div
              className="flex-1 text-center md:text-left md:pr-2"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
                <motion.div
                  className="wildwords text-[#4B1A1B]"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  FARMER
                </motion.div>
                <motion.div
                  className="wildwords inline-block bg-gradient-to-r from-[#FE8301] to-[#f31212] bg-clip-text text-transparent"
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                >
                  DEVELOPMENT
                </motion.div>
              </h1>

              <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                YAVA is committed to farmers' livelihoods and responsible land use. Our
                initiatives include training in sustainable farming techniques,
                establishing Village Drying Centers, and improving cashew trees through
                seedling distribution programs.
              </p>

              <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                We partner with local farmers for the long term in two ways:
              </p>

              <ol className="list-decimal pl-5 text-sm text-gray-700 space-y-2 text-left md:text-left">
                <li>
                  Providing essential knowledge on sustainable practices like mulching,
                  pruning, and using locally available fertilizers.
                </li>
                <li>
                  Collaborating to enhance or create new economic opportunities for crops.
                </li>
              </ol>
            </motion.div>

            {/* GAMBAR */}
            <motion.div
              className="flex-1 flex justify-center"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-[280px] md:w-[360px] h-[240px] md:h-[320px] rounded-md shadow-lg bg-white flex items-center justify-center">
                <Image
                  src={farmerImages[farmerImageIndex]}
                  alt="Farmer Development"
                  width={360}
                  height={320}
                  className="rounded-md object-contain transition duration-500 ease-in-out"
                />
                <motion.div
                  className="absolute top-[-40px] right-[-30px] md:top-[-50px] md:right-[-40px] z-20"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 120 }}
                >
                  <Image
                    src="/images/quote2.png"
                    alt="Quote"
                    width={80}
                    height={80}
                    className="rotate-12 drop-shadow-xl"
                  />
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default FarmerDevelopmentSection;
