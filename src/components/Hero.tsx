import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      <div
        className="absolute inset-0 z-0 opacity-60"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-20 text-center md:text-left">
        <div className="max-w-2xl md:ml-10 xl:ml-20">
          <h2 className="text-amber-600 font-semibold text-lg md:text-xl mb-2 tracking-wider">ESTABLISHED 2003</h2>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            A Premium Barbershop Experience
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
            Where traditional techniques meet modern styles to create your perfect look.
            Book your appointment today for a grooming experience like no other.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#book"
              className="inline-flex items-center justify-center px-6 py-3 bg-amber-600 text-white text-lg font-medium rounded shadow-lg hover:bg-amber-500 transition-all duration-300 transform hover:translate-y-[-2px]"
            >
              Book Appointment <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white text-lg font-medium rounded hover:bg-white hover:text-black transition-all duration-300"
            >
              View Services
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-6 left-0 right-0 flex justify-center z-20">
        <a 
          href="#services" 
          className="text-white hover:text-amber-300 transition-colors duration-300 animate-bounce"
          aria-label="Scroll down"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;