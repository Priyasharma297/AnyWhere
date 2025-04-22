import React from 'react';
import { FaWrench, FaCog } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-r from-gray-100 to-white text-gray-800">
      
      {/* Left Section */}
      <div className="flex-1 flex flex-col justify-center items-center md:items-start px-6 py-12 space-y-6 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start space-x-3">
          <FaWrench className="text-5xl text-gray-600 animate-spin-slow" />
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-700">
            Anywhere Mechanic
          </h1>
        </div>
        <p className="text-md italic text-gray-500">"Your journey, our priority."</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-6">
          <button 
            onClick={() => navigate('/store')} 
            className="px-8 py-3 bg-gray-600 text-white rounded-full hover:bg-gray-900 transition duration-200 shadow"
          >
            Shop Now
          </button>
          <button 
            onClick={() => navigate('/service')} 
            className="px-8 py-3 bg-gray-600 text-white rounded-full hover:bg-gray-900 transition duration-200 shadow"
          >
            Book Mechanic
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 bg-gray-50 space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4 text-center md:text-left">
          About Our Services
        </h2>
        <p className="text-gray-600 leading-relaxed text-center md:text-left">
          Anywhere Mechanic provides top-tier repair services right at your doorstep. Our team of certified mechanics are available across the city to ensure your journey stays smooth and worry-free. From routine maintenance to emergency repairs, we handle it all with professionalism and efficiency.
        </p>

        <h3 className="text-lg font-medium text-gray-700 mt-6 mb-2 text-center md:text-left">
          Our Commitment:
        </h3>
        <div className="flex flex-col sm:flex-row items-center md:items-start gap-8">
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Reliable and quick service</li>
            <li>Certified professionals</li>
            <li>Transparent pricing</li>
            <li>Customer satisfaction guaranteed</li>
          </ul>
          <FaCog className="text-6xl text-gray-500 animate-spin-slow mt-4 sm:mt-0" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
