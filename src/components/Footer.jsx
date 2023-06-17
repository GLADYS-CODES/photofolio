import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="container py-9 flex justify-center">
        <a href="#!" className="mr-4 text-green-500 hover:text-green-600">
          <FaFacebook size={20} />
        </a>
        <a href="#!" className="mr-4 text-green-500 hover:text-green-600">
          <FaTwitter size={20} />
        </a>
        <a href="#!" className="mr-4 text-green-500 hover:text-green-600">
          <FaInstagram size={20} />
        </a>
        <a href="#!" className="mr-4 text-green-500 hover:text-green-600">
          <FaLinkedin size={20} />
        </a>
        <a href="#!" className="text-green-500 hover:text-green-600">
          <FaYoutube size={20} />
        </a>
      </div>

      <div className="bg-black-300 p-4 text-center text-neutral-700">
        © 2023 Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
