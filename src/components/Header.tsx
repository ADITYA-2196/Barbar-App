import React, { useState, useEffect } from 'react';
import { Menu, X, Scissors } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a
            href="#home"
            className="flex items-center space-x-2 text-xl font-semibold text-white"
          >
            <Scissors className="h-6 w-6" />
            <span>PRIME CUTS</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'Services', 'About', 'Testimonials', 'Gallery', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-amber-300 transition-colors duration-300 font-medium"
              >
                {item}
              </a>
            ))}
            <a
              href="#book"
              className="px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-500 transition-colors duration-300"
            >
              Book Now
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-black absolute top-full left-0 right-0 p-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            {['Home', 'Services', 'About', 'Testimonials', 'Gallery', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-amber-300 transition-colors duration-300 py-2 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#book"
              className="px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-500 transition-colors duration-300 text-center"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;