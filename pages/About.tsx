
import React from 'react';
import { Target, Users, ShieldCheck, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-avira-blue py-20 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Avira Support USA</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Providing expert, independent technical assistance to US-based Avira users for over 5 years.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-avira-blue mb-6">Our History & Mission</h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Avira Support USA was founded in response to the growing complexity of cybersecurity software and the need for personalized, patient technical support. Many users found themselves frustrated with long wait times and generic automated responses.
                </p>
                <p>
                  Our mission is simple: To provide clear, direct, and effective solutions for every Avira user in the United States, regardless of their technical proficiency. We bridge the gap between complex software and smooth user experiences.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/id/1/600/400" 
                alt="Tech Team" 
                className="rounded-2xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-avira-gray rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-avira-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-avira-blue">Why Users Trust Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md text-avira-orange">
                <Target size={32} />
              </div>
              <h3 className="font-bold mb-3">Focused Expertise</h3>
              <p className="text-sm text-gray-600">Deep specialization in Avira software architecture.</p>
            </div>
            <div className="p-6">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md text-avira-orange">
                <Users size={32} />
              </div>
              <h3 className="font-bold mb-3">Customer First</h3>
              <p className="text-sm text-gray-600">Patient guidance tailored to your technical level.</p>
            </div>
            <div className="p-6">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md text-avira-orange">
                <ShieldCheck size={32} />
              </div>
              <h3 className="font-bold mb-3">Verified Results</h3>
              <p className="text-sm text-gray-600">We don't just troubleshoot; we solve the root cause.</p>
            </div>
            <div className="p-6">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md text-avira-orange">
                <Heart size={32} />
              </div>
              <h3 className="font-bold mb-3">Always Available</h3>
              <p className="text-sm text-gray-600">24/7 technical hotline across all US time zones.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
