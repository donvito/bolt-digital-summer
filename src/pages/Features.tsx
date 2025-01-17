import React from 'react';
import { Bot, Zap, LineChart } from 'lucide-react';

function Features() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white pt-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-20 relative">
          Powerful Automation Features
          <div className="absolute w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 bottom-0 left-1/2 transform -translate-x-1/2 mt-4 rounded-full"></div>
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
          {[
            {
              icon: <Bot className="w-16 h-16 text-orange-500" />,
              title: "AI-Powered Workflows",
              description: "Our intelligent automation system learns from your business processes, continuously improving efficiency and reducing manual intervention. Leverage machine learning to automate complex decision-making processes."
            },
            {
              icon: <Zap className="w-16 h-16 text-orange-500" />,
              title: "Instant Integration",
              description: "Seamlessly connect with your existing tools and software. Our platform supports integration with popular business applications, ensuring a smooth transition to automated workflows."
            },
            {
              icon: <LineChart className="w-16 h-16 text-orange-500" />,
              title: "Real-time Analytics",
              description: "Get detailed insights into your automated processes with our comprehensive analytics dashboard. Monitor performance, identify bottlenecks, and optimize your workflows in real-time."
            },
            {
              icon: <Bot className="w-16 h-16 text-orange-500" />,
              title: "Smart Task Management",
              description: "Automatically prioritize and distribute tasks based on your team's capacity and expertise. Our AI ensures optimal resource allocation and improved productivity."
            },
            {
              icon: <Zap className="w-16 h-16 text-orange-500" />,
              title: "Custom Automation Rules",
              description: "Create personalized automation rules tailored to your specific business needs. Our flexible rule engine allows for complex conditional workflows and decision trees."
            },
            {
              icon: <LineChart className="w-16 h-16 text-orange-500" />,
              title: "Performance Reporting",
              description: "Generate comprehensive reports on your automation performance. Track KPIs, measure ROI, and demonstrate the value of your automation investments."
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-orange-100 group"
            >
              <div className="mb-6 transform transition-transform group-hover:scale-110 duration-500">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;