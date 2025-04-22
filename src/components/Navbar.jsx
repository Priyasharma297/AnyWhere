import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = ({ handleProceedToBuy }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-300 to-gray-100 shadow-md px-4 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl text-gray-800">
          <i className="fas fa-tools"></i>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center">
          <li><a href="/" className="text-gray-800 font-bold hover:text-gray-600">Home</a></li>
          <li><a href="/service" className="text-gray-800 font-bold hover:text-gray-600">Service</a></li>
          <li><a href="/Store" className="text-gray-800 font-bold hover:text-gray-600">Store</a></li>
          <li><a href="/Login" className="text-gray-800 font-bold hover:text-gray-600">Login</a></li>
          <li><a href="/Signup" className="text-gray-800 font-bold hover:text-gray-600">Sign Up</a></li>
          <button 
            onClick={handleProceedToBuy} 
            className="text-gray-800 hover:text-gray-600 transition-transform duration-300 hover:scale-110"
          >
            <i className="fas fa-shopping-cart text-xl"></i>
          </button>
        </ul>

        {/* Mobile Toggle Button */}
        <button className="md:hidden text-2xl text-gray-800" onClick={() => setIsOpen(!isOpen)}>
          <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col gap-4 mt-4 md:hidden bg-gray-100 p-4 rounded shadow-md">
          <li><a href="/" className="text-gray-800 font-semibold">Home</a></li>
          <li><a href="/service" className="text-gray-800 font-semibold">Service</a></li>
          <li><a href="/Store" className="text-gray-800 font-semibold">Store</a></li>
          <li><a href="/Login" className="text-gray-800 font-semibold">Login</a></li>
          <li><a href="/Signup" className="text-gray-800 font-semibold">Sign Up</a></li>
          <button 
            onClick={handleProceedToBuy} 
            className="text-gray-800 self-start hover:text-gray-600 transition-transform duration-300"
          >
            <i className="fas fa-shopping-cart text-xl"></i>
          </button>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
