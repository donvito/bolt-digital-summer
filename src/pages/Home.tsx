import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Zap, LineChart } from 'lucide-react';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80')] opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 animate-[fadeIn_1s_ease-in]">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Automate Your Business, Amplify Your Success
              </h1>
              <p className="mt-6 text-xl text-orange-50 leading-relaxed">
                Transform your small business with intelligent automation. Save time, reduce errors, and focus on what matters most.
              </p>
              <div className="mt-8 space-x-4">
                <Link
                  to="/contact"
                  className="inline-block bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Start Free Trial
                </Link>
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0 animate-[slideIn_1s_ease-out]">
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
                alt="Business Automation"
                className="rounded-lg shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Feature Preview Section */}
      <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16 relative">
            Powerful Automation Features
            <div className="absolute w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-600 bottom-0 left-1/2 transform -translate-x-1/2 mt-4 rounded-full"></div>
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Bot className="w-12 h-12 text-orange-500 transform transition-transform hover:scale-110" />,
                title: "AI-Powered Workflows",
                description: "Intelligent automation that learns and adapts to your business processes."
              },
              {
                icon: <Zap className="w-12 h-12 text-orange-500 transform transition-transform hover:scale-110" />,
                title: "Instant Integration",
                description: "Connect with your existing tools and software seamlessly."
              },
              {
                icon: <LineChart className="w-12 h-12 text-orange-500 transform transition-transform hover:scale-110" />,
                title: "Real-time Analytics",
                description: "Track performance and optimize your automated processes."
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-white to-orange-50/30 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-orange-100/50"
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/features"
              className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore All Features
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;