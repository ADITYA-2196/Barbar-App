import React from 'react';
import { Scissors, Bean as Beard, Clock } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Classic Haircut',
    description: 'A traditional haircut with expert precision, including hot towel and styling.',
    price: '$35',
    duration: '45 min',
    icon: <Scissors className="h-8 w-8" />
  },
  {
    id: 2,
    title: 'Beard Trim & Shape',
    description: 'Full beard service with straight razor edging and essential oils treatment.',
    price: '$25',
    duration: '30 min',
    icon: <Beard className="h-8 w-8" />
  },
  {
    id: 3,
    title: 'Premium Package',
    description: 'Complete grooming experience with haircut, beard trim, and facial treatment.',
    price: '$60',
    duration: '75 min',
    icon: <Clock className="h-8 w-8" />
  },
  {
    id: 4,
    title: 'Hot Towel Shave',
    description: 'Traditional straight razor shave with hot towel and premium aftershave.',
    price: '$40',
    duration: '45 min',
    icon: <Scissors className="h-8 w-8" />
  },
  {
    id: 5,
    title: 'Kids Haircut',
    description: 'Precision cut for the young gentleman, includes styling and experience.',
    price: '$25',
    duration: '30 min',
    icon: <Scissors className="h-8 w-8" />
  },
  {
    id: 6,
    title: 'Hair & Beard Coloring',
    description: 'Professional coloring service with premium products for natural results.',
    price: '$50+',
    duration: '60 min',
    icon: <Beard className="h-8 w-8" />
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-amber-600 font-semibold tracking-wide text-lg">OUR EXPERTISE</h2>
          <h3 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Premium Services</h3>
          <div className="h-1 w-20 bg-amber-600 mx-auto"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-lg">
            We offer a range of premium grooming services tailored to enhance your look and experience.
            Each service includes a consultation to ensure we meet your exact needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-8 rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl group"
            >
              <div className="text-amber-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{service.title}</h4>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <span className="text-amber-600 font-bold text-xl">{service.price}</span>
                <span className="text-gray-500 flex items-center">
                  <Clock className="h-4 w-4 mr-1" /> {service.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="#book"
            className="inline-flex items-center justify-center px-6 py-3 bg-black text-white text-lg font-medium rounded shadow-lg hover:bg-gray-800 transition-all duration-300"
          >
            Book Your Service
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;