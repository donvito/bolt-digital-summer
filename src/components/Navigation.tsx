import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Cog } from 'lucide-react';

function Navigation() {
  const location = useLocation();
  
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-lg shadow-sm z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <Cog className="w-8 h-8 text-orange-500 transform transition-transform group-hover:rotate-90 duration-500" />
            <span className="text-2xl font-bold text-gray-800 tracking-tight">Digital Summer</span>
          </Link>
          
          <div className="hidden md:flex space-x-1">
            {[
              { path: '/', label: 'Home' },
              { path: '/features', label: 'Features' },
              { path: '/benefits', label: 'Benefits' },
              { path: '/contact', label: 'Contact' }
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                  location.pathname === item.path
                    ? 'text-orange-600 bg-orange-50'
                    : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            to="/contact"
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;