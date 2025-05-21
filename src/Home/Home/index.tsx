'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function CombinedSection() {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Navbar */}
      <nav
        className="bg-gradient-to-r from-orange-500 to-orange-400 text-white shadow-md flex items-center justify-between px-6"
        style={{ height: '70px' }}
      >
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-wider">
            YAVA
          </Link>
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="#" className="hover:underline text-sm md:text-base">Lontar Sugar</Link>
            <div className="relative">
              <button
                className="flex items-center gap-1 hover:underline text-sm md:text-base"
                onClick={() => setOpenDropdown(!openDropdown)}
              >
                Our Foods <ChevronDown size={16} />
              </button>
              {openDropdown && (
                <div className="absolute bg-white text-black mt-2 p-2 rounded shadow-lg z-10 w-40">
                  <Link href="#" className="block px-2 py-1 hover:bg-gray-100">Food 1</Link>
                  <Link href="#" className="block px-2 py-1 hover:bg-gray-100">Food 2</Link>
                </div>
              )}
            </div>
            <Link href="#" className="hover:underline text-sm md:text-base">Ingredients</Link>
            <Link href="#" className="hover:underline text-sm md:text-base">Company</Link>
            <Link href="#" className="hover:underline text-sm md:text-base">YAVAKataMereka</Link>
            <Link href="#" className="hover:underline text-sm md:text-base">News & Event</Link>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <span>ID</span>
            <span className="bg-red-600 text-white px-2 py-0.5 rounded-full">EN</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="bg-orange-500 text-white flex items-center justify-center px-6"
        style={{ height: 'calc(100vh - 70px - 65px)' }} // full viewport dikurangi navbar + footer
      >
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between h-full">
            <div className="w-full md:w-1/2 text-left">
              <h1 className="text-4xl sm:text-5xl font-bold leading-none mb-2">WELCOME</h1>
              <p className="text-4xl sm:text-5xl font-bold leading-none mb-4">TO YAVA</p>
              <div className="text-base sm:text-lg mb-6 space-y-1 max-w-lg">
                <p>Healthy CAN be delicious.</p>
                <p>At YAVA, we celebrate food that</p>
                <p>brings health, joy and freedom.</p>
              </div>
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Store Footer Section */}
      <section
        className="bg-[#FDF5E6] text-gray-800 flex items-center justify-between px-6 py-2"
        style={{ height: '65px' }}
      >
        <div>
          <p className="text-sm sm:text-base font-medium">Available in Your Favorite Stores</p>
        </div>
        <div className="flex space-x-4">
          <Image src="/images/blibli.svg" alt="Blibli" width={20} height={20} />
          <Image src="/images/lazada.svg" alt="Lazada" width={20} height={20} />
          <Image src="/images/shopee.svg" alt="Shopee" width={20} height={20} />
          <Image src="/images/tiktok-shop.svg" alt="TikTok Shop" width={20} height={20} />
          <Image src="/images/tokopedia.svg" alt="Tokopedia" width={20} height={20} />
        </div>
      </section>

{/* Lontar Sugar Section */}
<section
  className="bg-[#FDF5E6] flex items-center px-6"
  style={{ height: '100vh' }}
>
  <div className="container mx-auto">
    <div className="flex flex-col md:flex-row items-center justify-between h-full">
      {/* Left Side: Text Content */}
      <div className="w-full md:w-1/2 text-left mb-8 md:mb-0">
        <h2 className="text-4xl font-bold mb-2">
          <span className="text-black">LONTAR</span> <span className="text-red-600">SUGAR</span>
        </h2>
        <p className="text-xl font-medium mb-4">
          Pure • Natural • Sustainable
        </p>
        <p>Lontar Sugar gives you more steady blood sugar and helps</p>
           <p className='text-base mb-6'>keep you more healthy (and taste great!).</p>
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
          Learn More
        </button>
      </div>

      {/* Right Side: Illustration */}
      <div className="md:w-1/2 relative">
        <Image
          src="/images/lontar-sugar-illustration.png"
          alt="Lontar Sugar Illustration"
          width={600}
          height={400}
          className="w-full"
        />
      </div>
    </div>
  </div>
</section>

{/* Against Video Section */}
<section
  className="bg-white text-gray-900 flex flex-col items-center justify-center px-6"
  style={{ height: '100vh' }}
>
  <div className="container mx-auto">
    {/* Title and Navigation Arrows */}
    <div className="flex items-center justify-between mb-8">
      <h2 className="font-extrabold leading-tight" style={{ fontSize: '50px' }}>
        <span className="text-black">AGAINTS</span>{' '}
        <span className="text-red-600">VIDEO</span>
      </h2>
      <div className="flex space-x-2">
        <button className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L14 12z" />
          </svg>
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M8.59 16.59L10.5 18.5l6-6-6-6-1.41 1.41L10.5 12z" />
          </svg>
        </button>
      </div>
    </div>

    {/* Video Preview */}
    <div className="relative w-full max-w-[1200px] mb-8">
      <Image
        src="/images/against-video-preview.png"
        alt="Against Video Preview"
        width={1200}
        height={600}
        className="w-full"
      />
    </div>
  </div>
</section>

{/* Why Yava Granola Section */}
<section
  className="bg-[#FDF5E6] flex items-center px-6"
  style={{ height: '100vh' }}
>
  <div className="container mx-auto">
    <div className="flex flex-col md:flex-row items-center justify-between h-full">
      {/* Left Side: Text Content */}
      <div className="md:w-1/2 text-left mb-8 md:mb-0">
        <h2 className="text-4xl font-bold mb-2">
          <span className="text-black">WHY</span> <span className="text-red-600">YAVA GRANOLA?</span>
        </h2>
        <p className="text-xl font-medium mb-4">
          Delicious • Convenient • Healthy
        </p>
        <p>YAVA granola features the traditional rolled oats, combined</p>
        <p> with a Bali-centric combination of puffed red rice, cashews</p>
        <p> and various dried fruits (even chocolate!). Mixed and baked</p>
        <p className='text-base mb-6' > until perfectly crunchy.</p>
        
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
          Learn More
        </button>
      </div>

      {/* Right Side: Image */}
      <div className="md:w-1/2 relative">
        <Image
          src="/images/yava-granola-image.png" // Replace with your image path
          alt="Yava Granola Image"
          width={600}
          height={400}
          className="w-full"
        />
        {/* Additional Text Overlays */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-orange-600">
          <p className="text-lg font-bold">The perfect way to fuel your day!</p>
        </div>
        <div className="absolute bottom-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 text-orange-600">
          <p className="text-lg font-bold">Perfect for breakfast, great for snacking too!</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* OUR FOOD Section */}
<section className="bg-[#FDF5E6] py-20">
  <div className="container mx-auto px-6">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">OUR FOOD</h1>
    <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-red-600">FIND YOUR FAVORITE!</h2>

    {/* Kategori Produk */}
    <div className="flex justify-center flex-wrap gap-6 mb-12">
      {[
        { name: 'All', icon: '/images/icons/all.svg' },
        { name: 'Granola', icon: '/images/icons/granola.svg' },
        { name: 'Sugar', icon: '/images/icons/sugar.svg' },
        { name: 'Snacks', icon: '/images/icons/snacks.svg' }
      ].map((category) => (
        <button
          key={category.name}
          onClick={() => {}} // Temporarily empty click handler until state is implemented
          className={`text-center focus:outline-none ${
            "font-bold text-red-600"
          }`}
        >
          <div className="w-16 h-16 mx-auto relative">
            <Image
              src={category.icon}
              alt={category.name}
              fill
              className="object-contain"
            />
          </div>
          <p className="mt-2">{category.name}</p>
        </button>
      ))}
    </div>

    {/* Grid Produk */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {[].length > 0 ? (
        [].map((product: {
          id: string;
          image: string;
          name: string;
          description: string;
          price: string;
        }) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
            <div className="relative h-48 mb-4">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-md"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-red-600 font-bold">{product.price}</span>
              <button className="bg-red-600 text-white px-4 py-2 rounded-full text-sm">
                View Details
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="col-span-full text-center text-gray-500">No products found in this category.</p>
      )}
    </div>

    {/* Tombol See More menuju all foods*/}
    <div className="mt-12 flex justify-center">
      <button className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
        See More
      </button>
    </div>
  </div>
</section>
    </div>
  );
}