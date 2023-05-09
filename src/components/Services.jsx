
import React from 'react';
//import Navbar from './Navbar';

function Services() {
  return (
    <div className="bg-black text-white">
      
      <div className="container mx-auto pt-20 text-center">
        <h1 className="text-5xl font-bold mb-8">Services</h1>
        <p className="text-xl mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices vehicula est, vitae consequat justo rhoncus sed.</p>
        <div className="flex flex-wrap justify-center">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-gray-700 hover:bg-green-500 rounded-lg overflow-hidden shadow-lg transition duration-500">
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
            <div className="bg-gray-700 hover:bg-green-500 rounded-lg overflow-hidden shadow-lg transition duration-500">
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
            <div className="bg-gray-700 hover:bg-green-500 rounded-lg overflow-hidden shadow-lg transition duration-500">   
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
            <div className="bg-gray-700 hover:bg-green-500 rounded-lg overflow-hidden shadow-lg transition duration-500">   
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