import React from 'react';
import { Building2, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <Building2 className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold">Vivacivils</span>
            </div>
            <p className="text-gray-400 mb-6">
              Delivering innovative civil engineering solutions with precision, reliability, and excellence since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-blue-600 p-2 rounded-full transition duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-600 p-2 rounded-full transition duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-600 p-2 rounded-full transition duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-600 p-2 rounded-full transition duration-300">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition duration-300">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition duration-300">Services</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition duration-300">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition duration-300">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Structural Engineering</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Transportation Engineering</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Water Resource Management</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Geotechnical Engineering</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Construction Management</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-500 mr-3 mt-1" />
                <span className="text-gray-400">Corner House, Kisauni RD, Nairobi West</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-500 mr-3" />
                <span className="text-gray-400">+254 (0) 720 303 684</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-500 mr-3" />
                <span className="text-gray-400">info@vivacivils.co.ke</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Vivacivils Engineering Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition duration-300">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition duration-300">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;