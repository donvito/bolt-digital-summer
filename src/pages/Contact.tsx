import React, { useState } from 'react';
import { User, Mail, Phone, Send } from 'lucide-react';

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formState);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-orange-50 via-white to-orange-50 pt-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-20 relative">
          Get in Touch
          <div className="absolute w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 bottom-0 left-1/2 transform -translate-x-1/2 mt-4 rounded-full"></div>
        </h1>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-orange-100 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Damien</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Ready to transform your business with automation? Reach out to Damien for a personalized consultation and discover how Digital Summer can revolutionize your operations.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 text-gray-700 group/item">
                  <div className="p-3 bg-orange-50 rounded-lg group-hover/item:bg-orange-100 transition-colors">
                    <User className="w-6 h-6 text-orange-500" />
                  </div>
                  <span className="font-medium">Damien</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-700 group/item">
                  <div className="p-3 bg-orange-50 rounded-lg group-hover/item:bg-orange-100 transition-colors">
                    <Mail className="w-6 h-6 text-orange-500" />
                  </div>
                  <a 
                    href="mailto:damien@digitalsummer.io" 
                    className="hover:text-orange-500 transition-colors"
                  >
                    damien@digitalsummer.io
                  </a>
                </div>
                <div className="flex items-center space-x-4 text-gray-700 group/item">
                  <div className="p-3 bg-orange-50 rounded-lg group-hover/item:bg-orange-100 transition-colors">
                    <Phone className="w-6 h-6 text-orange-500" />
                  </div>
                  <a 
                    href="tel:+1234567890" 
                    className="hover:text-orange-500 transition-colors"
                  >
                    (123) 456-7890
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <form 
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-xl shadow-lg border border-orange-100 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h3>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      value={formState.name}
                      onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors pl-11"
                      placeholder="Your name"
                    />
                    <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      value={formState.email}
                      onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors pl-11"
                      placeholder="your@email.com"
                    />
                    <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;