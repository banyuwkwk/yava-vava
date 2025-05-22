import React from "react";
import { ArrowDown } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-cream-50 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/api/placeholder/120/40" 
            alt="YAVA Logo" 
            className="h-10"
          />
        </div>
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#" className="text-gray-700 hover:text-orange-500">Lantar Sugan</a>
          <div className="relative group">
            <a href="#" className="text-gray-700 hover:text-orange-500 flex items-center">
              Our Foods
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
          <a href="#" className="text-gray-700 hover:text-orange-500">Ingredients</a>
          <a href="#" className="text-orange-500 font-medium">Company</a>
          <a href="#" className="text-gray-700 hover:text-orange-500">YAYAKataKereka</a>
          <a href="#" className="text-gray-700 hover:text-orange-500">News & Event</a>
          <a href="#" className="text-gray-700 hover:text-orange-500 flex items-center">
            ID
            <span className="ml-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-500 rounded-full">EN</span>
          </a>
        </div>
        <div className="md:hidden">
          <button className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;