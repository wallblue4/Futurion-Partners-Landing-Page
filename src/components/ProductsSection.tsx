import React from 'react';
import { Bot, Zap, Shield } from 'lucide-react';

const products = [
  {
    icon: <Bot className="h-20 w-20 text-blue-500" />,
    title: 'AI Chatbot',
    description: 'Intelligent conversational AI for customer support, capable of handling complex queries and providing personalized assistance 24/7.',
    cta: 'Request Demo'
  },
  {
    icon: <Zap className="h-20 w-20 text-blue-500" />,
    title: 'Predictive Analytics',
    description: 'Harness the power of machine learning to forecast trends, optimize operations, and make data-driven decisions with unprecedented accuracy.',
    cta: 'See Details'
  },
  {
    icon: <Shield className="h-20 w-20 text-blue-500" />,
    title: 'Cybersecurity AI',
    description: 'Stay one step ahead of cyber threats with our AI-powered detection and prevention system, offering real-time protection and adaptive defense mechanisms.',
    cta: 'Learn More'
  }
];

const ProductsSection: React.FC = () => {
  return (
    <section id="products" className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-20">Our AI Models</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {products.map((product, index) => (
            <div key={index} className="border-2 border-blue-100 square-2xl p-10 hover:shadow-2xl transition duration-300 transform hover:-translate-y-3">
              <div className="flex justify-center mb-8">{product.icon}</div>
              <h3 className="text-3xl font-semibold mb-4 text-center">{product.title}</h3>
              <p className="text-gray-600 text-center mb-8 text-lg">{product.description}</p>
              <div className="text-center">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 square-full transition duration-300 text-lg">
                  {product.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;