'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from '@/components/Navbar';
import { Download } from "lucide-react";
import Breadcrumb from "../breadcrumb";


const LontarSugarStats = () => {
  const [tons, setTons] = useState<number>(0);
  const [employees, setEmployees] = useState<number>(0);
  const [leadersPercent, setLeadersPercent] = useState<number>(0);
  const [workersPercent, setWorkersPercent] = useState<number>(0);
  const [glycemicIndex, setGlycemicIndex] = useState<number>(0);

  useEffect(() => {
    const duration = 2000;
    const startTime = Date.now();

    const animateValues = () => {
      const progress = Math.min(1, (Date.now() - startTime) / duration);

      setTons(Math.floor(progress * 2138));
      setEmployees(Math.floor(progress * 471));
      setLeadersPercent(Number((progress * 53.7).toFixed(1)));
      setWorkersPercent(Number((progress * 65.6).toFixed(1)));
      setGlycemicIndex(Math.floor(progress * 52));

      if (progress < 1) {
        requestAnimationFrame(animateValues);
      }
    };

    animateValues();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      <div className="text-center">
        <div className="text-4xl font-bold text-orange-600 mb-1">
          {tons.toLocaleString()} <span className="text-xl">Tons</span>
        </div>
        <div className="text-gray-600 text-sm">
          Total raw materials sourced from Eastern Indonesia.
        </div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold text-orange-600 mb-1">
          {employees.toLocaleString()} <span className="text-xl">Employees</span>
        </div>
        <div className="text-gray-600 text-sm">
          The number of workers involved in our production process.
        </div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold text-orange-600 mb-1">
          {leadersPercent}% <span className="text-xl">Leaders</span>
        </div>
        <div className="text-gray-600 text-sm">
          Percentage of female leaders in our workforce.
        </div>
      </div>

      {/* Baris kedua, dua kolom ditengah */}
      <div className="md:col-start-2 text-center">
        <div className="text-4xl font-bold text-orange-600 mb-1">
          {workersPercent}% <span className="text-xl">Workers</span>
        </div>
        <div className="text-gray-600 text-sm">
          Percentage of female employees in our total workforce.
        </div>
      </div>
      <div className="md:col-start-3 text-center">
        <div className="text-4xl font-bold text-orange-600 mb-1">
          {glycemicIndex} <span className="text-xl">Glycemic Index</span>
        </div>
        <div className="text-gray-600 text-sm">
          Replacing white sugar with low-GI palm sugar.
        </div>
      </div>
    </div>
  );
};

const MissionSection: React.FC = () => {
  return (
    <>
      <Navbar />
      <section className="bg-[#FFF6E9] px-4 sm:px-12 lg:px-24 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
            <div className="flex-1 max-w-xl order-2 md:order-1">
              <h1 className="text-4xl font-bold mb-4 font-wildwordslower">
                <span className="text-[#5A2C21]">OUR </span>
                <span className="text-orange-500">MISSION</span>
              </h1>
              <p className="text-base leading-relaxed mb-6 text-black font-poppins">
                YAVA fosters healthier villages in Eastern Indonesia by creating fair
                markets and job opportunities for small farmers. Empowering women is key
                to building village resilience. We take on this challenge with passion
                and commitment, tracking our impact along the way. Stay connected and
                follow our progress!
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full text-sm flex items-center gap-2">
                <Download size={16} /> Our Mission Report
              </button>
            </div>

            <div className="flex-1 flex justify-center relative order-1 md:order-2">
              <div className="relative transform rotate-3 border-4 border-white shadow-lg rounded-md overflow-hidden">
                <Image
                  src="/images/pg2.png"
                  alt="Mission"
                  width={500}
                  height={350}
                  className="w-full h-auto"
                  priority
                />
              </div>
              <div className="absolute -top-3 -right-3 w-6 h-6 rotate-45">
                <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-red-600"></div>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-4">
              <span className="text-[#5A2C21]">OUR MISSION </span>
              <span className="text-orange-500">IN NUMBERS</span>
            </h2>
            <p className="text-center text-gray-600 text-sm mb-10">
              In 2023, at our production facilities in Desa Ban, Bali, and Oka, Flores:
            </p>
            <LontarSugarStats />
          </div>

          {/* AnakKardia Kids Section */}
          <div className="mt-24 flex flex-col md:flex-row items-center gap-12">
            <div className="relative">
              <div className="transform rotate-2 shadow-lg border-4 border-white rounded-md overflow-hidden w-[300px] md:w-[360px]">
                <Image
                  src="/images/an1.png"
                  alt="AnakKardia Kids"
                  width={360}
                  height={320}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-8 h-8">
                <div className="w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[24px] border-b-red-600 rotate-45"></div>
              </div>
            </div>
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-[#5A2C21]">ANAKARDIA </span>
                <span className="text-orange-500">KIDS</span>
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

          {/* Anakardia Highlight Section */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold text-center mb-4">
              <span className="text-[#5A2C21]">ANAKARDIA KIDS </span>
              <span className="text-orange-500">HIGHLIGHT</span>
            </h2>
            <div className="flex flex-col md:flex-row items-start gap-10 mt-10">
              <div className="w-full">
                <div className="rounded-lg overflow-hidden shadow-lg border-4 border-white">
                  <Image
                    src="/images/kids1.png"
                    alt="Highlight Anakardia"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Farmer Development */}
          <div className="flex flex-col md:flex-row items-center gap-12 mt-24">
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-[#5A2C21]">FARMER </span>
                <span className="text-orange-500">DEVELOPMENT</span>
              </h2>
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
            <div className="flex-1 flex justify-center relative">
              <div className="relative transform rotate-3 border-4 border-white shadow-lg rounded-md overflow-hidden">
                <Image
                  src="/images/f1.png"
                  alt="Farmer Development"
                  width={500}
                  height={350}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -top-3 -right-3 w-6 h-6 rotate-45">
                <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-red-600"></div>
              </div>
            </div>
          </div>

          {/* Project Highlight */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold text-center mb-4">
              <span className="text-[#5A2C21]">PROJECT </span>
              <span className="text-orange-500">HIGHLIGHT</span>
            </h2>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="rounded-lg overflow-hidden bg-white">
                <Image
                  src="/images/h1.png"
                  alt="Project Highlight"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};


export default function CompanyPage() {
}