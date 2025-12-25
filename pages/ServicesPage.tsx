
import React from 'react';
import { ShieldCheck, Download, Globe, AlertCircle, Phone, CheckCircle2 } from 'lucide-react';
import { Service } from '../types';
import { DISPLAY_PHONE } from '../constants';

const iconMap: Record<string, any> = {
  ShieldCheck: ShieldCheck,
  Download: Download,
  Globe: Globe,
  AlertCircle: AlertCircle
};

interface ServicesPageProps {
  services: Service[];
}

const ServicesPage: React.FC<ServicesPageProps> = ({ services }) => {
  return (
    <div className="bg-gray-50">
      <section className="bg-avira-blue py-20 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Support Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive troubleshooting for all Avira software versions on Windows 10/11.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {services.map((service, index) => {
            const IconComp = iconMap[service.icon] || ShieldCheck;
            return (
              <div key={service.id} className={`flex flex-col md:flex-row items-center bg-white rounded-3xl shadow-xl overflow-hidden ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2 p-12 bg-avira-blue text-white flex flex-col justify-center items-center text-center">
                  <div className="bg-avira-orange p-5 rounded-2xl mb-6">
                    <IconComp size={48} />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <a 
                    href={`tel:${DISPLAY_PHONE.replace(/[^0-9+]/g, '')}`}
                    className="mt-4 bg-white text-avira-blue px-8 py-3 rounded-full font-bold flex items-center space-x-2 hover:bg-avira-orange hover:text-white transition-all"
                  >
                    <Phone size={20} />
                    <span>Call Support: {DISPLAY_PHONE}</span>
                  </a>
                </div>
                <div className="w-full md:w-1/2 p-12">
                  <h3 className="text-2xl font-bold text-avira-blue mb-6">How we help:</h3>
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">{service.description}</p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 className="text-avira-orange mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700">Detailed error code diagnostics</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 className="text-avira-orange mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700">Windows registry cleanup & optimization</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 className="text-avira-orange mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700">Conflict resolution with other software</span>
                    </li>
                  </ul>
                  <p className="text-avira-blue font-semibold italic text-sm">
                    All support sessions are handled by certified independent technicians based in the USA.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ/CTA section */}
      <section className="py-20 bg-avira-orange">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Don't see your specific problem?</h2>
          <p className="text-xl mb-10 text-orange-50">
            Technology is vast. If you're facing any crashing, freezing, or installation issue not listed above, give us a call. We've seen it all!
          </p>
          <a 
            href={`tel:${DISPLAY_PHONE.replace(/[^0-9+]/g, '')}`}
            className="inline-flex items-center space-x-4 bg-white text-avira-orange px-10 py-5 rounded-full text-2xl font-black shadow-xl hover:scale-105 transition-transform"
          >
            <Phone size={32} />
            <span>{DISPLAY_PHONE}</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
