import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";

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
      <section className="bg-[#FFF6E9] px-4 sm:px-12 lg:px-24 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 mt-24">
            {/* Teks */}
            <div className="flex-1">
              <div className="mb-4">
                <h2 className="text-4xl font-bold wildwords text-[#4B1A1B]">
                  FARMER
                </h2>
                <h2 className="text-4xl font-bold wildwords bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  DEVELOPMENT
                </h2>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed text-sm md:text-base">
                YAVA is committed to farmers' livelihoods and responsible land use. Our
                initiatives include training in sustainable farming techniques,
                establishing Village Drying Centers, and improving cashew trees through
                seedling distribution programs.
              </p>
              <p className="text-gray-700 mb-4 text-sm md:text-base">
                We partner with local farmers for the long term in two ways:
              </p>
              <ol className="list-decimal pl-5 text-sm md:text-base text-gray-700 space-y-2">
                <li>
                  Providing essential knowledge on sustainable practices like mulching,
                  pruning, and using locally available fertilizers.
                </li>
                <li>
                  Collaborating to enhance or create new economic opportunities for crops.
                </li>
              </ol>
            </div>

            {/* Gambar + Tanda Petik */}
            <div className="flex-1 flex justify-center">
              <div className="relative w-[360px] h-[320px] rounded-md">
                {/* Gambar Petani */}
                <div className="relative w-full h-full rounded-md shadow-lg overflow-visible">
                  <Image
                    src={farmerImages[farmerImageIndex]}
                    alt="Farmer Development"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                  {/* Tanda Petik di Atas Gambar */}
                  <div className="absolute top-[-50px] right-[-40px] z-20">
                    <Image
                      src="/images/quote2.png"
                      alt="Quote"
                      width={90}
                      height={90}
                      className="rotate-12 drop-shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default FarmerDevelopmentSection;
