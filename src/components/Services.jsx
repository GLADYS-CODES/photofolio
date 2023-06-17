import React from 'react';

function Services() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto pt-20 text-center">
        <h1 className="py-3 px-5 text-4xl font-bold text-center text-white rounded-lg hover:text-green-700 mb-8">Services</h1>

        <p className="text-sm mb-12">
          Welcome to our photography services! We are dedicated to capturing the essence of your special moments and transforming them into timeless memories. With our team of skilled photographers, we offer a comprehensive range of services to meet your unique needs.
 Our event photography services ensure that every significant moment, from keynote speeches to networking sessions, is documented professionally.
With our passion for photography and commitment to excellence, we strive to exceed your expectations. We use state-of-the-art equipment and techniques to ensure the highest quality results. Our attention to detail and personalized approach guarantee that your photos will reflect the emotions, atmosphere, and essence of your special occasion.
 </p>
        <div className="flex flex-wrap justify-center">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-neutral-900 hover:bg-green-500 rounded-lg overflow-hidden shadow-lg transition duration-500">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Wedding Photography</h3>
                <p className="text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices vehicula est.</p>
                <div className="bg-green-500 text-white py-3 px-4 rounded-full">
                  $500-$1000
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-neutral-900 hover:bg-green-500 rounded-lg overflow-hidden shadow-lg transition duration-500">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Sports</h3>
                <p className="text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices vehicula est.</p>
                <div className="bg-green-500 text-white py-3 px-4 rounded-full">
                  $200-$500
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-neutral-900 hover:bg-green-500 rounded-lg overflow-hidden shadow-lg transition duration-500">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Portraits</h3>
                <p className="text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices vehicula est.</p>
                <div className="bg-green-500 text-white py-3 px-4 rounded-full">
                  $100-$300
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-neutral-900 hover:bg-green-500 rounded-lg overflow-hidden shadow-lg transition duration-500">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Events</h3>
                <p className="text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices vehicula est.</p>
                <div className="bg-green-500 text-white py-3 px-4 rounded-full">
                  $100-$300
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
