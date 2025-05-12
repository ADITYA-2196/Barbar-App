import React, { useState } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.pexels.com/photos/1805600/pexels-photo-1805600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Modern haircut style',
    category: 'Haircut'
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Beard trim and styling',
    category: 'Beard'
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/10983629/pexels-photo-10983629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Classic barber shop interior',
    category: 'Shop'
  },
  {
    id: 4,
    src: 'https://images.pexels.com/photos/1813346/pexels-photo-1813346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Haircut in progress',
    category: 'Haircut'
  },
  {
    id: 5,
    src: 'https://images.pexels.com/photos/2384292/pexels-photo-2384292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Beard shaping and detailing',
    category: 'Beard'
  },
  {
    id: 6,
    src: 'https://images.pexels.com/photos/897259/pexels-photo-897259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Barber equipment and tools',
    category: 'Shop'
  }
];

const categories = ['All', 'Haircut', 'Beard', 'Shop'];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [category, setCategory] = useState('All');
  
  const filteredImages = category === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === category);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-amber-600 font-semibold tracking-wide text-lg">OUR WORK</h2>
          <h3 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Style Gallery</h3>
          <div className="h-1 w-20 bg-amber-600 mx-auto"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-lg">
            Browse through our collection of haircuts and styles to find inspiration for your next visit.
          </p>
          
          <div className="flex flex-wrap justify-center space-x-2 space-y-2 md:space-y-0 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full border transition-colors duration-300 ${
                  category === cat
                    ? 'bg-amber-600 text-white border-amber-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                }`}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div 
              key={image.id}
              className="relative overflow-hidden rounded-lg aspect-square cursor-pointer group"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-medium px-4 py-2 border-2 border-white rounded-full">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Modal for enlarged image */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              <button 
                className="absolute -top-12 right-0 text-white hover:text-amber-300 transition-colors"
                onClick={() => setSelectedImage(null)}
                aria-label="Close image"
              >
                <X className="h-8 w-8" />
              </button>
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className="w-full h-full object-contain"
              />
              <p className="text-white text-center mt-4 text-lg">{selectedImage.alt}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;