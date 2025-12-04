import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoWhite from '../Assets/logoWhite.png';
import LogoNormal from '../Assets/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/who-we-are', label: 'Who We Are' },
    { href: '#services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
   ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/95 shadow-lg backdrop-blur-md border-b border-gray-100' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-3">
                <img 
                  src={scrolled ? LogoNormal : LogoWhite} 
                  alt="RYUGA Logo" 
                  className={`h-12 w-12 rounded-full object-cover transition-all duration-500 ${
                    scrolled ? 'shadow-md' : 'shadow-lg'
                  }`}
                />
                <span className={`font-bold text-xl transition-colors ${
                  scrolled ? 'text-blue-600' : 'text-white'
                }`} style={{ fontFamily: 'Abhaya Libre, serif' }}>
                  RYUGA
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                link.href.startsWith('#') ? (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      scrolled
                        ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                        : 'text-white hover:text-blue-200 hover:bg-white/10'
                    }`}
                    style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      scrolled
                        ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                        : 'text-white hover:text-blue-200 hover:bg-white/10'
                    }`}
                    style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* REGISTER Button */}
          <div className="hidden md:block">
            <Link
              to="/register"
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                scrolled
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md'
                  : 'bg-white text-blue-600 hover:bg-blue-50 border border-white'
              }`}
              style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}
            >
              Register
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`p-2 rounded-md transition-colors ${
                scrolled ? 'text-gray-600 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 shadow-lg">
            {navLinks.map((link) => (
              link.href.startsWith('#') ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                  style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                  style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            ))}
            <Link
              to="/register"
              className="block px-3 py-2 mt-4 bg-blue-600 text-white text-center rounded-md font-medium hover:bg-blue-700 transition-colors"
              style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}
              onClick={() => setMenuOpen(false)}
            >
              Register Now
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 mt-2 border-2 border-blue-600 text-blue-600 text-center rounded-md font-medium hover:bg-blue-600 hover:text-white transition-colors"
              style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


