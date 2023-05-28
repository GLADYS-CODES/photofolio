
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white py-4 px-6 flex justify-between items-center">
      <div>
        <Link to="/" className="text-2xl font-bold">
          Photofolio
        </Link>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <Link
          to="/"
          className="block my-4 hover:text-green-500"
          onClick={toggleMenu}
        >
          Home
        </Link>
        <Link
          to="/about"
          className="block my-4 hover:text-green-500"
          onClick={toggleMenu}
        >
          About
        </Link>
        <Link
          to="/services"
          className="block my-4 hover:text-green-500"
          onClick={toggleMenu}
        >
          Services
        </Link>
        <Link
          to="/gallery"
          className="block my-4 hover:text-green-500"
          onClick={toggleMenu}
        >
          Gallery
        </Link>
        <Link
          to="/contact"
          className="block my-4 hover:text-green-500"
          onClick={toggleMenu}
        >
          Contact
        </Link>
      </div>
      <div className="hidden md:flex items-center justify-center">
        <Link to="/" className="mx-4 hover:text-green-500">
          Home
        </Link>
        <Link to="/about" className="mx-4 hover:text-green-500">
          About
        </Link>
        <Link to="/services" className="mx-4 hover:text-green-500">
          Services
        </Link>
        <Link to="/gallery" className="mx-4 hover:text-green-500">
          Gallery
        </Link>
        <Link to="/contact" className="mx-4 hover:text-green-500">
          Contact
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <FaBars
          className={`w-6 h-6 text-white md:hidden ${
            isOpen ? 'hidden' : 'block'
          }`}
          onClick={toggleMenu}
        />
        <FaTimes
          className={`w-6 h-6 text-white md:hidden ${
            isOpen ? 'block' : 'hidden'
          }`}
          onClick={toggleMenu}
        />
      </div>
    </nav>
  );
}

export default Navbar;
