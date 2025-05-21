  // components/MissionSection.tsx
  import React from 'react';
  import Image from 'next/image';
  import Navbar from '../navbar';
  import { Download } from 'lucide-react';
  import Breadcrumb from '../breadcrumb';
  import { useState, useEffect } from 'react';


  const MissionSection: React.FC = () => {
    return (
      <>
        <Navbar />

        <section className="bg-[#FFF6E9] px-4 sm:px-12 lg:px-24 py-16">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb */}
          <Breadcrumb
            paths={[
              { label: 'Home', href: '/' },
              { label: 'Company', href: '/company' },
            ]}
          />

            {/* Mission Content */}
            <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
              {/* Left Text Area */}
              <div className="flex-1 max-w-xl order-2 md:order-1">
                <h1 className="text-4xl font-bold mb-4 font-wildwordslower">
                  <span className="text-[#5A2C21]">OUR </span>
                  <span className="text-orange-500">MISSION</span>
                </h1>
                <p className="text-base leading-relaxed mb-6 text-black font-poppins">
                  YAVA fosters healthier villages in Eastern Indonesia by creating fair markets and job opportunities for small farmers. Empowering women is key to building village resilience. We take on this challenge with passion and commitment, tracking our impact along the way. Stay connected and follow our progress!
                </p>

                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full text-sm flex items-center gap-2">
                  <Download size={16} /> Our Mission Report
                </button>
              </div>

              {/* Right Image Area */}
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

            {/* OUR MISSION IN NUMBERS */}
            <div className="mt-20">
              <h2 className="text-3xl font-bold text-center mb-4">
                <span className="text-[#5A2C21]">OUR MISSION </span>
                <span className="text-orange-500">IN NUMBERS</span>
              </h2>
              <p className="text-center text-gray-600 text-sm mb-10">
                In 2023, at our production facilities in Desa Ban, Bali, and Oka, Flores:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10 max-w-5xl mx-auto text-center mt-10">
  {/* Top Row - 3 Items */}
  <div>
    <h3 className="text-2xl font-bold text-[#5A2C21]">2,138 Tons</h3>
    <p className="text-sm text-gray-600">Total raw materials sourced from Eastern Indonesia.</p>
  </div>
  <div>
    <h3 className="text-2xl font-bold text-[#5A2C21]">471 Employees</h3>
    <p className="text-sm text-gray-600">The number of workers involved in our production process.</p>
  </div>
  <div>
    <h3 className="text-2xl font-bold text-[#5A2C21]">53.7% Leaders</h3>
    <p className="text-sm text-gray-600">Percentage of female leaders in our workforce.</p>
  </div>
</div>

{/* Bottom Row - 2 Items Centered */}
<div className="flex flex-col sm:flex-row justify-center gap-10 mt-10 text-center">
  <div>
    <h3 className="text-2xl font-bold text-[#5A2C21]">65.6% Workers</h3>
    <p className="text-sm text-gray-600">Percentage of female employees in our total workforce.</p>
  </div>
  <div>
    <h3 className="text-2xl font-bold text-[#5A2C21]">52 Glycemic Index</h3>
    <p className="text-sm text-gray-600">Replacing white sugar with low-GI palm sugar.</p>
  </div>
</div>


            {/* ANAKARDIA KIDS Section */}
            <div className="mt-24 flex flex-col md:flex-row items-center gap-12">
              {/* Image */}
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

              {/* Text */}
              <div className="max-w-xl">
                <h2 className="text-3xl font-bold mb-4">
                  <span className="text-[#5A2C21]">ANAKARDIA </span>
                  <span className="text-orange-500">KIDS</span>
                </h2>
                <p className="text-sm text-gray-700 mb-4">
                  AnakKardia Kids is located in our factory and hosts over 55 children daily. Its unique name comes from the Latin word for the cashew tree, Anacardium occidentale, and the Indonesian word for 'child.'
                </p>
                <p className="text-sm text-gray-700">
                  AnakKardia Kids provides children in Desa Ban with a safe, healthy, and enriching learning environment, giving them a strong start in life. We take pride in offering opportunities for children in our community to grow alongside us.
                </p>
              </div>
            </div>

            {/* ANAKARDIA KIDS HIGHLIGHT SECTION */}
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

            {/* FARMER DEVELOPMENT */}
            <div className="flex flex-col md:flex-row items-center gap-12 mt-24">
              {/* LEFT: Text */}
              <div className="flex-1">
                <h2 className="text-4xl font-bold mb-4">
                  <span className="text-[#5A2C21]">FARMER </span>
                  <span className="text-orange-500">DEVELOPMENT</span>
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed text-sm md:text-base">
                  YAVA is committed to farmers' livelihoods and responsible land use. Our initiatives include training in
                  sustainable farming techniques, establishing Village Drying Centers, and improving cashew trees through
                  seedling distribution programs.
                </p>
                <p className="text-gray-700 mb-4 text-sm md:text-base">
                  We partner with local farmers for the long term in two ways:
                </p>
                <ol className="list-decimal pl-5 text-sm md:text-base text-gray-700 space-y-2">
                  <li>
                    Providing essential knowledge on sustainable practices like mulching, pruning, and using locally
                    available fertilizers.
                  </li>
                  <li>
                    Collaborating to enhance or create new economic opportunities for crops.
                  </li>
                </ol>
              </div>

              {/* Right Image Area */}
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

            {/* PROJECT HIGHLIGHT SECTION */}
            <div className="mt-24">
              <h2 className="text-3xl font-bold text-center mb-4">
                <span className="text-[#5A2C21]">PROJECT </span>
                <span className="text-orange-500">HIGHLIGHT</span>
              </h2>
             
             
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

  export default MissionSection;