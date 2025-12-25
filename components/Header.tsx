
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Shield } from 'lucide-react';

interface HeaderProps {
  phone: string;
}

const Header: React.FC<HeaderProps> = ({ phone }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about-avira-support-15103701986' },
    { name: 'Services', path: '/avira-services-support-15103701986' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact-avira-support-15103701986' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-avira-blue text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-avira-orange" />
            <span className="text-xl font-bold tracking-tight">Avira Support USA</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-avira-orange ${
                  isActive(link.path) ? 'text-avira-orange border-b-2 border-avira-orange' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
              className="bg-avira-orange hover:bg-orange-600 px-5 py-2.5 rounded-full flex items-center space-x-2 font-bold shadow-md transition-all transform hover:scale-105"
            >
              <Phone size={18} />
              <span>{phone}</span>
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-avira-orange transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-avira-blue border-t border-blue-900 pb-4">
          <div className="px-2 pt-2 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 text-base font-medium rounded-md ${
                  isActive(link.path) ? 'bg-blue-900 text-avira-orange' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
              className="block w-full text-center bg-avira-orange py-4 rounded-md font-bold text-lg mt-4"
            >
              Call Now: {phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
