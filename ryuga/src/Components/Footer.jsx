import React from 'react';
import LogoWhite from '../Assets/logoWhite.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={LogoWhite} 
                alt="RYUGA Logo" 
                className="h-12 w-12 rounded-full object-cover"
              />
              <span className="text-2xl font-bold" style={{ fontFamily: 'Abhaya Libre, serif' }}>
                RYUGA
              </span>
            </div>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed max-w-md" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
              Dedicated caregiving education institute empowering individuals with the skills, 
              compassion, and confidence needed to provide high-quality care.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300">
                <span className="text-white text-lg">📘</span>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-400 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors duration-300">
                <span className="text-white text-lg">🐦</span>
              </a>
              <a href="#" className="w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center transition-colors duration-300">
                <span className="text-white text-lg">📷</span>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-700 hover:bg-blue-800 rounded-full flex items-center justify-center transition-colors duration-300">
                <span className="text-white text-lg">💼</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6" style={{ fontFamily: 'Abhaya Libre, serif' }}>
              Quick Links
            </h3>
            <ul className="space-y-3" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center space-x-2">
                  <span>🏠</span>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center space-x-2">
                  <span>🎯</span>
                  <span>Our Services</span>
                </a>
              </li>
              <li>
                <a href="#company" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center space-x-2">
                  <span>🏢</span>
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center space-x-2">
                  <span>📞</span>
                  <span>Contact</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center space-x-2">
                  <span>📚</span>
                  <span>Courses</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6" style={{ fontFamily: 'Abhaya Libre, serif' }}>
              Contact Info
            </h3>
            <div className="space-y-4" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
              <div className="flex items-start space-x-3">
                <span className="text-blue-400 text-lg">📍</span>
                <div>
                  <p className="text-gray-300">123 Care Street</p>
                  <p className="text-gray-300">Colombo, Sri Lanka</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-blue-400 text-lg">📞</span>
                <p className="text-gray-300">+94 11 123 4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-blue-400 text-lg">✉️</span>
                <p className="text-gray-300">info@ryuga.lk</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-blue-400 text-lg">🌐</span>
                <p className="text-gray-300">www.ryuga.lk</p>
              </div>
            </div>
          </div>
        </div>

       
      </div>

      {/* Bottom Footer */}
      <div className="bg-black/30 backdrop-blur-sm border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
              © 2025 RYUGA. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;