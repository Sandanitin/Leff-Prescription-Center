import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Insurance', path: '/insurance' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const quickActions = [
    { name: 'New Pharmacy Customer', path: '/new-customer' },
    { name: 'Transfer Prescription', path: '/transfer' },
    { name: 'Auto Rx Refills', path: '/refills' }
  ];

  return (
    <header className="bg-blue-900 text-white shadow-md sticky top-0 z-50">
      {/* Main header */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <img
              src="/images/image.png"
              alt="Leff Prescription Center Logo"
              className="h-28 w-28 object-contain rounded-full border-2 border-transparent hover:border-white hover:scale-110 transition-all duration-300 ease-in-out"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="text-blue-200 hover:text-white font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="text-blue-200 hover:text-white font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;