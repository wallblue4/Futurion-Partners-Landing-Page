import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-cover bg-center bg-fixed" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'}}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-6xl font-bold mb-6">Innovate with Futurion Partners</h1>
        <p className="text-2xl mb-12">Empowering businesses with cutting-edge AI solutions</p>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full transition duration-300 text-xl transform hover:scale-105">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;