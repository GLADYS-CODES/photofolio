import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="bg-black text-white py-4 px-6 flex justify-between items-center">
      <div>
        <a href="/" className="text-2xl font-bold">
          Photofolio
        </a>
      </div>
      <div className="hidden md:flex items-center justify-center">
        <a href="/" className="mx-4 hover:text-green-500">
          Home
        </a>
        <a href="/about" className="mx-4 hover:text-green-500">
          About
        </a>
        <a href="/services" className="mx-4 hover:text-green-500">
          Services
        </a>
        <a href="/gallery" className="mx-4 hover:text-green-500">
          Gallery
        </a>
        <a href="/contact" className="mx-4 hover:text-green-500">
          Contact
        </a>
      </div>
      <div className="flex items-center justify-center">
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="mx-2">
          <FaTwitter className="text-xl hover:text-green-500" />
        </a>
        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="mx-2">
          <FaFacebook className="text-xl hover:text-green-500" />
        </a>
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="mx-2">
          <FaInstagram className="text-xl hover:text-green-500" />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="mx-2">
          <FaLinkedinIn className="text-xl hover:text-green-500" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
