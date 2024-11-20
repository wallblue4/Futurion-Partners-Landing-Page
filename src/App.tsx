import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ProductsSection from './components/ProductsSection';
import TeamSection from './components/TeamSection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProductsSection />
        <TeamSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;