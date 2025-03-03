import React, { useState, useEffect } from 'react';
import { Menu, X, Building2 } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center">
            <Building2 className={`h-8 w-8 ${isScrolled ? 'text-blue-600' : 'text-white'}`} />
            <span className={`ml-2 text-xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              Vivacivils
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className={`font-medium ${isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-200'} transition duration-300`}>
              Home
            </a>
            <a href="#about" className={`font-medium ${isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-200'} transition duration-300`}>
              About
            </a>
            <a href="#services" className={`font-medium ${isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-200'} transition duration-300`}>
              Services
            </a>
            <a href="#projects" className={`font-medium ${isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-200'} transition duration-300`}>
              Projects
            </a>
            <a href="#contact" className={`font-medium ${isScrolled ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'} hover:bg-blue-700 hover:text-white py-2 px-4 rounded-md transition duration-300`}>
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`${isScrolled ? 'text-gray-800' : 'text-white'} focus:outline-none`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="#" 
                className="font-medium text-gray-800 hover:text-blue-600 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="font-medium text-gray-800 hover:text-blue-600 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a 
                href="#services" 
                className="font-medium text-gray-800 hover:text-blue-600 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
              <a 
                href="#projects" 
                className="font-medium text-gray-800 hover:text-blue-600 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="font-medium bg-blue-600 text-white hover:bg-blue-700 py-2 px-4 rounded-md transition duration-300 text-center"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;