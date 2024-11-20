import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../public/ultimate nb.png';
import LogoLight from '../public/ultimateb.png';
import '/src/index.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOverDarkSection, setIsOverDarkSection] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section1 = document.getElementById('dark-section-1');
      const section2 = document.getElementById('dark-section-2');
      const headerHeight = 50;

      const scrollY = window.scrollY + headerHeight;
      const inSection1 =
        section1 && scrollY >= section1.offsetTop && scrollY <= section1.offsetTop + section1.offsetHeight;
      const inSection2 =
        section2 && scrollY >= section2.offsetTop && scrollY <= section2.offsetTop + section2.offsetHeight;

      setIsScrolled(scrollY > headerHeight);
      setIsOverDarkSection(Boolean(inSection1 || inSection2));
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isMenuOpen && (isOverDarkSection || !isScrolled)
          ? 'bg-gradient-to-b from-black via-gray-800 to-transparent'
          : isOverDarkSection
          ? 'bg-transparent'
          : isScrolled
          ? 'bg-white shadow-md'
          : 'bg-gradient-to-b from-black/40 to-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="w-60 h-auto">
          <img
            src={isOverDarkSection ? LogoLight : isScrolled ? Logo : LogoLight}
            alt="Futurion Partners Logo"
            className="h-full w-full"
          />
        </div>
        <nav
          className={`md:flex md:flex-row space-x-6 flex-col p-4 md:p-0 absolute top-full left-0 w-full md:static md:w-auto transition-all duration-300 ${
            isMenuOpen ? 'flex' : 'hidden'
          } ${
            isMenuOpen && (isOverDarkSection || !isScrolled)
              ? 'bg-gradient-to-b from-black via-gray-800 to-transparent text-white'
              : ' text-gray-600'
          }`}
        >
          {[
            { href: "#HeroSection", label: "Home" },
            { href: "#Ourservices", label: "Services" },
            { href: "#dark-section-1", label: "Products" },
            { href: "#dark-section-2", label: "Team" },
            { href: "#blog", label: "Blog" },
            { href: "#contact", label: "Contact" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`${
                isOverDarkSection || !isScrolled ? 'text-white' : 'text-gray-600'
              } hover:text-blue-900 font-serif block py-2 md:inline`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <X className={`h-6 w-6 ${isOverDarkSection || !isScrolled ? 'text-white' : 'text-gray-600'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isOverDarkSection || !isScrolled ? 'text-white' : 'text-gray-600'}`} />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
