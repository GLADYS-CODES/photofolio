import Testimonial from './TestimonialCard';

import React from 'react';
import profile from '../assets/profile-img.jpg';
import { FaArrowRight } from 'react-icons/fa';

const About = () => {
  return (
    <div className="container mx-auto p-4 bg-black text-white">
      <div className='flex flex-col items-center justify-center'>
      <h1 className="text-3xl font-bold mb-4 text-center hover:text-green-500">About Me</h1>
      <p className="text-lg text-gray-800">
        I'm a passionate photographer with a love for capturing beautiful moments. I specialize in landscape and portrait photography. Let me share my art with you.
      </p>
      </div>

      <div className="flex flex-col md:flex-row md:items-center mt-8">
        <div className="max-w-md mx-auto  md:mr-8 md:ml-4">
          <img src={profile} alt="" className="w-full rounded-lg" />
          <div className="px-6 py-4"></div>
        </div>

        <div className="md:flex md:flex-col md:justify-center">
          <div className="mb-4">
            <FaArrowRight className="inline-block align-middle text-gray-400 mr-2 hover:text-green-500" />
            <span className="text-gray-400">Age:</span> 30
          </div>
          <div className="mb-4">
            <FaArrowRight className="inline-block align-middle text-gray-400 mr-2 hover:text-green-500" />
            <span className="text-gray-400">Education:</span> Bachelor's Degree
          </div>
          <div className="mb-4">
            <FaArrowRight className="inline-block align-middle text-gray-400 mr-2 hover:text-green-500" />
            <span className="text-gray-400">Work Experience:</span> 5 years
          </div>
          <div className="mb-4">
            <FaArrowRight className="inline-block align-middle text-gray-400 mr-2 hover:text-green-500" />
            <span className="text-gray-400">Skill:</span> Photography, Editing
          </div>
          <div className="mb-4">
            <FaArrowRight className="inline-block align-middle text-gray-400 mr-2 hover:text-green-500" />
            <span className="text-gray-400">Languages:</span> English, French
          </div>
          <div className="mb-4">
            <FaArrowRight className="inline-block align-middle text-gray-400 mr-2 hover:text-green-500" />
            <span className="text-gray-400">Location:</span> New York, USA
          </div>
        </div>
      </div>
<div>
      <h1 className="text-2xl font-bold mt-8">What They Are Saying</h1>
      <Testimonial />
      </div>
    </div>
    
  );
};

export default About;
