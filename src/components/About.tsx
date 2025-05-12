import React from 'react';
import { Award, ThumbsUp, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="max-w-lg">
              <h2 className="text-amber-600 font-semibold tracking-wide text-lg">ABOUT US</h2>
              <h3 className="text-3xl md:text-4xl font-bold mt-2 mb-6">A Cut Above The Rest</h3>
              <div className="h-1 w-20 bg-amber-600 mb-6"></div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                With over 20 years of experience, Prime Cuts has been providing exceptional grooming services to 
                discerning gentlemen who appreciate quality and attention to detail.
              </p>
              
              <p className="text-gray-300 mb-8 leading-relaxed">
                Our master barbers combine traditional techniques with modern styles to deliver a premium barbershop 
                experience that leaves you looking sharp and feeling confident. We pride ourselves on creating a welcoming 
                atmosphere where you can relax, unwind, and leave looking your best.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Award className="h-10 w-10 text-amber-600" />
                  </div>
                  <h4 className="font-bold text-xl mb-1">20+</h4>
                  <p className="text-gray-400">Years Experience</p>
                </div>
                
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <ThumbsUp className="h-10 w-10 text-amber-600" />
                  </div>
                  <h4 className="font-bold text-xl mb-1">5000+</h4>
                  <p className="text-gray-400">Happy Clients</p>
                </div>
                
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Users className="h-10 w-10 text-amber-600" />
                  </div>
                  <h4 className="font-bold text-xl mb-1">6</h4>
                  <p className="text-gray-400">Expert Barbers</p>
                </div>
              </div>
              
              <a
                href="#team"
                className="inline-flex items-center justify-center px-6 py-3 bg-amber-600 text-white text-lg font-medium rounded shadow-lg hover:bg-amber-500 transition-all duration-300"
              >
                Meet Our Team
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-lg">
              <img 
                src="https://images.pexels.com/photos/2881253/pexels-photo-2881253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Barber at work" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 p-6 bg-amber-600 rounded-lg shadow-xl max-w-xs">
              <p className="text-lg font-semibold">
                "We're not just cutting hair, we're crafting confidence."
              </p>
              <p className="mt-2 font-medium">— James Wilson, Founder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;