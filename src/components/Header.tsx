import React from 'react';
import { Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-900">Futurion Partners</div>
        <nav className="hidden md:flex space-x-6">
          <a href="#services" className="text-gray-600 hover:text-blue-900">Services</a>
          <a href="#products" className="text-gray-600 hover:text-blue-900">Products</a>
          <a href="#team" className="text-gray-600 hover:text-blue-900">Team</a>
          <a href="#blog" className="text-gray-600 hover:text-blue-900">Blog</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-900">Contact</a>
        </nav>
        <button className="md:hidden">
          <Menu className="h-6 w-6 text-gray-600" />
        </button>
      </div>
    </header>
  );
};

export default Header;