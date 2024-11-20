import React from 'react';
import { Brain, Cpu, LineChart } from 'lucide-react';
//import Image from '../public/image.png';

const services = [
  {
    icon: <Brain className="h-16 w-16 text-blue-500" />,
    title: 'AI Consulting',
    description: 'Expert guidance on integrating AI into your business processes, tailored to your specific industry needs and challenges.'
  },
  {
    icon: <Cpu className="h-16 w-16 text-blue-500" />,
    title: 'Machine Learning Solutions',
    description: 'Custom ML models designed and implemented to solve your unique business problems and drive innovation.'
  },
  {
    icon: <LineChart className="h-16 w-16 text-blue-500" />,
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights with our advanced analytics solutions, empowering data-driven decision making.'
  },
  {
    icon: <LineChart className="h-16 w-16 text-blue-500" />,
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights with our advanced analytics solutions, empowering data-driven decision making.'
  },
  {
    icon: <LineChart className="h-16 w-16 text-blue-500" />,
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights with our advanced analytics solutions, empowering data-driven decision making.'
  },
  {
    icon: <LineChart className="h-16 w-16 text-blue-500" />,
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights with our advanced analytics solutions, empowering data-driven decision making.'
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="py-24 bg-cover bg-center relative"
      style={{ backgroundImage: `url("src/public/image (4).png")` } }
    >
      {/* Superposición para oscurecer la imagen */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 square-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 relative z-10"
            >
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-center">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
