import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
          <li>
            <Link to="/" className="text-gray-800 font-bold hover:text-gray-600">Home</Link>
          </li>
          <li>
            <Link to="/service" className="text-gray-800 font-bold hover:text-gray-600">Service</Link>
          </li>
          <li>
            <Link to="/store" className="text-gray-800 font-bold hover:text-gray-600">Store</Link>
          </li>
          <li>
            <Link to="/login" className="text-gray-800 font-bold hover:text-gray-600">Login</Link>
          </li>
          <li>
            <Link to="/signup" className="text-gray-800 font-bold hover:text-gray-600">Sign Up</Link>
          </li>
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
          <li>
            <Link to="/" className="text-gray-800 font-semibold">Home</Link>
          </li>
          <li>
            <Link to="/service" className="text-gray-800 font-semibold">Service</Link>
          </li>
          <li>
            <Link to="/store" className="text-gray-800 font-semibold">Store</Link>
          </li>
          <li>
            <Link to="/login" className="text-gray-800 font-semibold">Login</Link>
          </li>
          <li>
            <Link to="/signup" className="text-gray-800 font-semibold">Sign Up</Link>
          </li>
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
