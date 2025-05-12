import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Michael Johnson',
    photo: 'https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=600',
    text: 'Best haircut I\'ve had in years. The attention to detail and the overall experience was exceptional. I won\'t be going anywhere else from now on.',
    rating: 5
  },
  {
    id: 2,
    name: 'David Thompson',
    photo: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600',
    text: 'From the moment I walked in, I felt welcomed. The hot towel treatment was amazing, and my beard has never looked better. Highly recommend!',
    rating: 5
  },
  {
    id: 3,
    name: 'Robert Wilson',
    photo: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=600',
    text: 'These guys know what they\'re doing. Professional service in a relaxed atmosphere. Worth every penny for quality like this.',
    rating: 5
  },
  {
    id: 4,
    name: 'Thomas Garcia',
    photo: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600',
    text: 'I\'ve been a customer for over 5 years now. The consistency and quality never disappoint. They\'re true masters of their craft.',
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const displayCount = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + displayCount >= testimonials.length 
        ? 0 
        : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex <= 0 
        ? Math.max(testimonials.length - displayCount, 0) 
        : prevIndex - 1
    );
  };
  
  const visibleTestimonials = [];
  for (let i = 0; i < displayCount; i++) {
    const index = (currentIndex + i) % testimonials.length;
    visibleTestimonials.push(testimonials[index]);
  }

  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-amber-600 font-semibold tracking-wide text-lg">TESTIMONIALS</h2>
          <h3 className="text-3xl md:text-4xl font-bold mt-2 mb-4">What Our Clients Say</h3>
          <div className="h-1 w-20 bg-amber-600 mx-auto"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-lg">
            Don't just take our word for it. Here's what our clients have to say about their 
            experience at Prime Cuts Barbershop.
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Carousel navigation buttons */}
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-300 text-gray-800"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <div className="flex overflow-hidden gap-6">
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-none w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white rounded-lg shadow-md p-6 md:p-8 transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-center mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <img 
                      src={testimonial.photo}
                      alt={testimonial.name}
                      className="absolute w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <div className="flex text-amber-500 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic leading-relaxed">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
          
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-300 text-gray-800"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        
        <div className="mt-8 flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index >= currentIndex && index < currentIndex + displayCount
                  ? 'bg-amber-600'
                  : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;