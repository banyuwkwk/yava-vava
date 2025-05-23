import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const AnakKardiaKidsSection = () => {
  const [anakKardiaImageIndex, setAnakKardiaImageIndex] = useState(0);
  const anakKardiaImages = [
    "/images/an1.png",
    "/images/an2.png",
    "/images/an3.png",
    "/images/an4.png",
    "/images/an5.png",
    "/images/an6.png",
    "/images/an7.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnakKardiaImageIndex(
        (prevIndex) => (prevIndex + 1) % anakKardiaImages.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [anakKardiaImages.length]);

  return (
    <section className={`${inter.className} bg-[#FFF6E9] px-4 sm:px-12 lg:px-24 py-16`}>
      <div className="max-w-7xl mx-auto">
        <div className="mt-24 flex flex-col md:flex-row items-center gap-12">
          {/* Gambar anak-anak */}
          <div className="relative">
            {/* Tanda Petik Merah */}
            <div className="absolute -top-10 -left-10 z-10">
              <Image src="/images/quote.png" alt="Quote" width={100} height={100} className="rotate-12" />
            </div>

            <div className="transform rotate-2 shadow-lg rounded-md overflow-hidden w-[300px] md:w-[360px]">
              <Image
                key={anakKardiaImages[anakKardiaImageIndex]}
                src={anakKardiaImages[anakKardiaImageIndex]}
                alt="AnakKardia Kids"
                width={360}
                height={320}
                className="w-full h-auto transition-opacity duration-1000 ease-in-out"
              />
            </div>
          </div>

          {/* Deskripsi */}
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold mb-4">
              <span className="wildwords text-[#4B1A1B]">ANAKARDIA </span>
              <span className="wildwords bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                KIDS
              </span>
            </h2>
            <p className="text-sm text-gray-700 mb-4">
              AnakKardia Kids is located in our factory and hosts over 55 children daily.
              Its unique name comes from the Latin word for the cashew tree, Anacardium
              occidentale, and the Indonesian word for 'child.'
            </p>
            <p className="text-sm text-gray-700">
              AnakKardia Kids provides children in Desa Ban with a safe, healthy, and
              enriching learning environment, giving them a strong start in life. We take
              pride in offering opportunities for children in our community to grow
              alongside us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnakKardiaKidsSection;
