
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare } from 'lucide-react';
import { ContactSubmission } from '../types';
import { DISPLAY_PHONE } from '../constants';

interface ContactProps {
  onSubmit: (data: ContactSubmission) => void;
}

const Contact: React.FC<ContactProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      id: Date.now().toString(),
      ...formData,
      timestamp: new Date().toISOString()
    });
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-gray-50 pb-20">
      <section className="bg-avira-blue py-20 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Get in touch with our independent technical support team today.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Info Cards */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg flex items-center space-x-6">
              <div className="bg-blue-50 p-4 rounded-xl text-avira-blue">
                <Phone size={32} />
              </div>
              <div>
                <h3 className="font-bold text-gray-500 uppercase text-xs tracking-widest mb-1">Call Us</h3>
                <p className="text-xl font-bold text-avira-blue">{DISPLAY_PHONE}</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg flex items-center space-x-6">
              <div className="bg-orange-50 p-4 rounded-xl text-avira-orange">
                <Mail size={32} />
              </div>
              <div>
                <h3 className="font-bold text-gray-500 uppercase text-xs tracking-widest mb-1">Email Us</h3>
                <p className="text-xl font-bold text-avira-blue">help@avirasupportusa.com</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg flex items-center space-x-6">
              <div className="bg-green-50 p-4 rounded-xl text-green-600">
                <MapPin size={32} />
              </div>
              <div>
                <h3 className="font-bold text-gray-500 uppercase text-xs tracking-widest mb-1">Location</h3>
                <p className="text-xl font-bold text-avira-blue">United States (Remote Support)</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-10">
            {submitted ? (
              <div className="text-center py-20">
                <div className="bg-green-100 text-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send size={40} />
                </div>
                <h2 className="text-3xl font-bold text-avira-blue mb-4">Message Sent Successfully!</h2>
                <p className="text-gray-600 mb-8">Thank you for reaching out. One of our experts will contact you shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="bg-avira-blue text-white px-8 py-3 rounded-xl font-bold hover:bg-avira-orange transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-3xl font-bold text-avira-blue mb-8 flex items-center space-x-3">
                  <MessageSquare className="text-avira-orange" />
                  <span>Send an Inquiry</span>
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
                      <input 
                        required
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-avira-orange focus:border-transparent transition-all outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Your Email</label>
                      <input 
                        required
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-avira-orange focus:border-transparent transition-all outline-none"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                    <textarea 
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-avira-orange focus:border-transparent transition-all outline-none resize-none"
                      placeholder="Describe your Avira issue in detail..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-avira-blue text-white py-4 rounded-xl font-bold text-lg hover:bg-avira-orange transition-all flex items-center justify-center space-x-3 shadow-xl"
                  >
                    <span>Send Message</span>
                    <Send size={20} />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>

        {/* Optional Map Placeholder */}
        <div className="mt-20 bg-avira-gray rounded-3xl overflow-hidden h-96 flex items-center justify-center text-gray-400 border-2 border-dashed border-gray-300">
          <div className="text-center">
            <MapPin size={48} className="mx-auto mb-4" />
            <p className="font-bold">Google Map Placeholder</p>
            <p className="text-sm">Technical Support Head Office - USA Operations</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
