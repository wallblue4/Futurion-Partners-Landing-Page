import React from 'react';
import Video from '../public/videos/Diseño sin título.mp4';
import '/src/index.css';

const HeroSection: React.FC = () => {
  return (
    <section id="HeroSection" className="relative h-screen flex items-center justify-center">
      {/* Video de fondo */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={Video}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay para oscurecer el video */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Contenido del Hero */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-6xl font-serif mb-6">Transform Your Business with Smart AI</h1>
        <p className="text-2xl font-semiblond mb-12">Unlock the power of artificial intelligence to drive innovation and growth</p>
        
        {/* Botón de navegación usando anclaje */}
        <a
          href="#Ourservices"
          className="bg-blue-500 hover:bg-yellow-600 text-white font-semiblond py-4 px-8 square-full transition duration-300 text-xl transform hover:scale-105 inline-block"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
