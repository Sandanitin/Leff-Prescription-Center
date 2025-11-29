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
    { name: 'Contact Us', path: '/contact' }
  ];

  const quickActions = [
    { name: 'New Pharmacy Customer', path: '/new-customer' },
    { name: 'Transfer Prescription', path: '/transfer' },
    { name: 'Auto Rx Refills', path: '/refills' }
  ];

  return (
    <header className="bg-blue-900 text-white shadow-md sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-blue-800 py-2 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-4 mb-2 md:mb-0">
            <span className="flex items-center gap-2">
              <FaPhone className="text-yellow-400" />
              <span>718-665-1163</span>
            </span>
            <span>70 East 161st Street, Bronx</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {quickActions.map((action, index) => (
              <Link 
                key={index} 
                to={action.path} 
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-medium px-3 py-1 rounded text-sm transition-colors"
              >
                {action.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-white">LEFF PRESCRIPTION CENTER</h1>
            <p className="text-sm text-blue-200">Your Bronx Home-Team Pharmacy</p>
          </div>

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