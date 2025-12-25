
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Twitter, Phone, Mail, Shield } from 'lucide-react';

interface FooterProps {
  phone: string;
}

const Footer: React.FC<FooterProps> = ({ phone }) => {
  return (
    <footer className="bg-avira-blue text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <Shield className="w-8 h-8 text-avira-orange" />
              <span className="text-xl font-bold">Avira Support USA</span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Independent technical support providing specialized assistance for Avira Antivirus products across the United States.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-6 text-avira-orange">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about-avira-support-15103701986" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/avira-services-support-15103701986" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Tech Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-6 text-avira-orange">Common Issues</h3>
            <ul className="space-y-4 text-gray-300">
              <li>Avira Free Security Fix</li>
              <li>Offline Installer Help</li>
              <li>Installation Failures</li>
              <li>Update Errors</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-6 text-avira-orange">Contact Info</h3>
            <div className="space-y-4">
              <a href={`tel:${phone.replace(/[^0-9+]/g, '')}`} className="flex items-center space-x-3 text-gray-300 hover:text-avira-orange transition-colors">
                <Phone size={18} />
                <span>{phone}</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail size={18} />
                <span>help@avirasupportusa.com</span>
              </div>
            </div>
            <div className="mt-8">
              <Link to="/admin-login" className="text-xs text-gray-500 hover:text-gray-300">Admin Portal</Link>
            </div>
          </div>
        </div>

        <hr className="my-10 border-blue-900" />

        <div className="text-center text-sm text-gray-400">
          <p className="mb-4">
            Disclaimer: Avira Support USA is an <span className="text-white font-semibold italic underline decoration-avira-orange decoration-2">independent</span> third-party technical support provider. We are not affiliated with, endorsed by, or sponsored by Avira Operations GmbH & Co. KG. All trademarks, service marks, and company names are used for informational purposes only.
          </p>
          <p>&copy; {new Date().getFullYear()} Avira Support USA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
