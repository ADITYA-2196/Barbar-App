import React from 'react';
import { MapPin, Phone, Clock, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-amber-600 font-semibold tracking-wide text-lg">CONTACT US</h2>
            <h3 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Book Your Appointment</h3>
            <div className="h-1 w-20 bg-amber-600 mb-6"></div>
            
            <p className="text-gray-300 mb-8 leading-relaxed">
              Ready for a premium grooming experience? Book your appointment today using our online form
              or contact us directly. Walk-ins are welcome based on availability.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="text-amber-600 mr-4 mt-1">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Location</h4>
                  <p className="text-gray-300">123 Main Street, Anytown, CA 90210</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-amber-600 mr-4 mt-1">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Phone</h4>
                  <p className="text-gray-300">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-amber-600 mr-4 mt-1">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Email</h4>
                  <p className="text-gray-300">info@primecuts.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-amber-600 mr-4 mt-1">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Hours</h4>
                  <p className="text-gray-300">Monday - Friday: 9am - 8pm</p>
                  <p className="text-gray-300">Saturday: 10am - 6pm</p>
                  <p className="text-gray-300">Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-amber-500 transition-colors duration-300">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-amber-500 transition-colors duration-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-amber-500 transition-colors duration-300">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div id="book">
            <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg">
              <h4 className="text-2xl font-bold mb-6">Book an Appointment</h4>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                      placeholder="(555) 123-4567"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="haircut">Classic Haircut</option>
                    <option value="beard">Beard Trim & Shape</option>
                    <option value="premium">Premium Package</option>
                    <option value="shave">Hot Towel Shave</option>
                    <option value="kids">Kids Haircut</option>
                    <option value="color">Hair & Beard Coloring</option>
                  </select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Time
                    </label>
                    <select
                      id="time"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                      required
                    >
                      <option value="">Select a time</option>
                      <option value="morning">9:00 AM - 12:00 PM</option>
                      <option value="afternoon">12:00 PM - 4:00 PM</option>
                      <option value="evening">4:00 PM - 8:00 PM</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                    placeholder="Any special requests or information?"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-amber-600 text-white font-medium rounded-md shadow hover:bg-amber-500 transition-colors duration-300"
                >
                  Book Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;