import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Insurance', path: '/insurance' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const services = [
    { name: 'Prescription Services', path: '/services#prescription' },
    { name: 'Immunizations', path: '/services#immunizations' },
    { name: 'Health Screenings', path: '/services#screenings' },
    { name: 'Free Delivery', path: '/services#delivery' }
  ];

  const convenience = [
    { name: 'Lotto Tickets', path: '/services#lotto' },
    { name: 'UPS Drop-off', path: '/services#ups' },
    { name: 'Passport Photos', path: '/services#passport' },
    { name: 'ATM Service', path: '/services#atm' }
  ];

  return (
    <footer className="bg-blue-900 text-blue-200">
      <div className="container mx-auto px-4 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Pharmacy Information */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">LEFF PRESCRIPTION CENTER</h3>
            <p className="mb-4 text-blue-100">
              "Your Bronx Home-Team Pharmacy: Champions in Patient Care"
            </p>
            <div className="space-y-2">
              <p className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-yellow-400 mt-1 flex-shrink-0" />
                <span>70 East 161st Street<br />Bronx, NY 10451-3535</span>
              </p>
              <p className="flex items-center gap-2">
                <FaPhone className="text-yellow-400 flex-shrink-0" />
                <span>718-665-1163</span>
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-yellow-400 flex-shrink-0" />
                <span>leffdrugs9@gmail.com</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.path}
                    className="hover:text-white transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-bold text-white mt-6 mb-4">Convenience</h4>
            <ul className="space-y-2">
              {convenience.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.path}
                    className="hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Store Hours */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Store Hours</h4>
            <div className="text-blue-200">
              <p className="mb-1"><strong>Monday - Friday:</strong> 9:00 AM - 6:30 PM</p>
              <p className="mb-1"><strong>Saturday:</strong> 10:00 AM - 3:00 PM</p>
              <p><strong>Sunday:</strong> Closed</p>
            </div>

            <div className="mt-6">
              <h4 className="text-lg font-bold text-white mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/profile.php?id=61585332680960" target="_blank" rel="noopener noreferrer" className="bg-blue-800 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                  <span className="sr-only">Facebook</span>
                  <span className="font-bold">f</span>
                </a>
                <a href="#" className="bg-blue-800 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                  <span className="sr-only">Instagram</span>
                  <span className="font-bold">ig</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 mt-6 border-t border-blue-800 text-center text-blue-300 text-sm">
          <p>&copy; {new Date().getFullYear()} LEFF PRESCRIPTION CENTER. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-white mr-4">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;