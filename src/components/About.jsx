import React from "react";

import profile  from "../assets/profile-img.jpg";
//import {FaArrowRight} from 'react-icons/fa'

//import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const About = () => {
  return (
    <div className="container mx-auto p-4 bg-black text-white">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="text-lg text-gray-800">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae elit vitae leo molestie fringilla. Curabitur quis velit in ligula aliquam dapibus eu sit amet diam. In tincidunt, ex et dapibus placerat, tellus elit consequat massa, at feugiat dolor erat a nisi. Sed efficitur fringilla fermentum. Integer tincidunt velit et quam vestibulum, eu tincidunt ligula vulputate. Curabitur vel tincidunt felis. Nullam in tincidunt ex, vel fermentum purus. Duis sed sapien in ligula lacinia mattis in id metus.
      </p>

      <div className="flex mt-8">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mr-8">
          <img src={profile} alt=" " className="w-full" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Jenny </div>
            <p className="text-gray-700 text-base">
            I'm a  passionate photographer with a love for capturing beautiful moments. I specialize in landscape and portrait photography. Let me share my art with you.
            </p>            
          </div>
        </div>

        <div className="flex flex-col">
          <div className="mb-4">
            <FaArrowRight className="inline-block align-middle text-gray-400 mr-2" />
            <span className="text-gray-400">Age: </span> 30
          </div>
          <div className="mb-4">
            <FaArrowRight className="inline-block align-middle text-gray-400 mr-2" />
            <span className="text-gray-400">Education: </span> Bachelor's Degree
          </div>
          <div className="mb-4">
            <FaArrowRight className="inline-block align-middle text-gray-400 mr-2" />
            <span className="text-gray-400">Work Experience: </span> 5 years
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
