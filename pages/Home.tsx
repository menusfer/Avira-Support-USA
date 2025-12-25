
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ShieldCheck, Download, Globe, AlertCircle, ArrowRight } from 'lucide-react';
import { Service } from '../types';
import { DISPLAY_PHONE } from '../constants';

const iconMap: Record<string, any> = {
  ShieldCheck: ShieldCheck,
  Download: Download,
  Globe: Globe,
  AlertCircle: AlertCircle
};

interface HomeProps {
  services: Service[];
}

const Home: React.FC<HomeProps> = ({ services }) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/119/1920/1080" 
            alt="Customer Support Background" 
            className="w-full h-full object-cover filter brightness-[0.4]"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-2xl">
            <div className="bg-avira-orange text-white text-xs font-bold uppercase tracking-widest py-1 px-3 inline-block rounded mb-4">
              Independent Avira Support Specialists
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Get Expert Help for Your <span className="text-avira-orange">Avira Antivirus</span>
            </h1>
            <p className="text-xl mb-8 text-gray-100 leading-relaxed">
              Facing installation errors, update problems, or software crashes on Windows 11? Our technical experts are available 24/7 to help you secure your digital life.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href={`tel:${DISPLAY_PHONE.replace(/[^0-9+]/g, '')}`}
                className="bg-avira-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg flex items-center justify-center space-x-3 text-lg font-bold shadow-2xl transition-all"
              >
                <Phone size={24} />
                <span>Call Now: {DISPLAY_PHONE}</span>
              </a>
              <Link 
                to="/avira-services-support-15103701986"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-lg flex items-center justify-center space-x-2 text-lg font-bold transition-all"
              >
                <span>View All Services</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-avira-blue mb-4">Common Avira Problems We Resolve</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our specialized support covers a wide range of technical hurdles users encounter with Avira Security products.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const IconComp = iconMap[service.icon] || ShieldCheck;
            return (
              <div key={service.id} className="group p-8 bg-avira-gray rounded-2xl border border-transparent hover:border-avira-orange/20 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="bg-avira-blue text-white w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-avira-orange transition-colors">
                  <IconComp size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-avira-blue">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <Link to="/avira-services-support-15103701986" className="text-avira-orange font-bold flex items-center space-x-1 hover:space-x-2 transition-all">
                  <span>Learn more</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-20 bg-avira-blue text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-10 md:mb-0 md:mr-10">
              <h2 className="text-3xl font-bold mb-4">Ready for Peace of Mind?</h2>
              <p className="text-xl text-blue-100">Our independent tech support team is standing by to help you fix any Avira software issue today.</p>
            </div>
            <a 
              href={`tel:${DISPLAY_PHONE.replace(/[^0-9+]/g, '')}`}
              className="bg-avira-orange hover:bg-white hover:text-avira-blue px-10 py-5 rounded-full font-black text-xl flex items-center space-x-4 shadow-2xl transition-all transform hover:scale-110 active:scale-95 whitespace-nowrap"
            >
              <Phone size={28} fill="currentColor" />
              <span>{DISPLAY_PHONE}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Short Disclosure */}
      <section className="py-10 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs text-gray-500 max-w-4xl mx-auto leading-relaxed italic">
            Disclaimer: Avira Support USA is an independent provider of technical support services for several third-party products, brands, and services. Any use of Trademarks, Brands, Products, and Services is referential and Avira Support USA has no affiliation with any of these third-party companies unless such relationship is expressly specified.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
