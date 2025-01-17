import React from 'react';
import { Clock, Briefcase, DollarSign, Shield, Target, Users } from 'lucide-react';

function Benefits() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50/50 to-white pt-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-20 relative">
          Why Choose Digital Summer?
          <div className="absolute w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 bottom-0 left-1/2 transform -translate-x-1/2 mt-4 rounded-full"></div>
        </h1>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="relative group">
            <div className="absolute inset-0.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative bg-white p-8 rounded-xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
                alt="Business Benefits"
                className="w-full h-64 object-cover rounded-lg mb-8 transform transition-all duration-500 group-hover:scale-[1.02]"
              />
              <div className="space-y-6">
                {[
                  {
                    icon: <Clock className="w-8 h-8 text-orange-500" />,
                    title: "Save 20+ Hours Weekly",
                    description: "Automate repetitive tasks and redirect your valuable time towards strategic business growth initiatives."
                  },
                  {
                    icon: <Briefcase className="w-8 h-8 text-orange-500" />,
                    title: "Boost Productivity",
                    description: "Streamline workflows and eliminate manual errors, increasing your team's efficiency by up to 40%."
                  },
                  {
                    icon: <DollarSign className="w-8 h-8 text-orange-500" />,
                    title: "Reduce Costs",
                    description: "Cut operational costs by automating routine processes and minimizing resource wastage."
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-2 bg-orange-50 rounded-lg">{benefit.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{benefit.title}</h3>
                      <p className="text-gray-600 mt-2">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative bg-white p-8 rounded-xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                alt="Team Benefits"
                className="w-full h-64 object-cover rounded-lg mb-8 transform transition-all duration-500 group-hover:scale-[1.02]"
              />
              <div className="space-y-6">
                {[
                  {
                    icon: <Shield className="w-8 h-8 text-orange-500" />,
                    title: "Enhanced Security",
                    description: "Implement automated security protocols and reduce human error in sensitive processes."
                  },
                  {
                    icon: <Target className="w-8 h-8 text-orange-500" />,
                    title: "Improved Accuracy",
                    description: "Achieve near-perfect accuracy in routine tasks through automated validation and verification."
                  },
                  {
                    icon: <Users className="w-8 h-8 text-orange-500" />,
                    title: "Better Team Collaboration",
                    description: "Foster seamless communication and coordination across departments with automated workflows."
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-2 bg-orange-50 rounded-lg">{benefit.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{benefit.title}</h3>
                      <p className="text-gray-600 mt-2">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;