import React from 'react';
import { Link } from 'react-router-dom';
const FooterHeader = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center p-5 bg-white">
      <p className="text-black text-lg mb-4 lg:mb-0">HEARD ENOUGH?</p>
      <h1 className="text-black text-4xl mb-4 lg:mb-0">Join Us Now</h1>
      
        <div className="bg-gray-900 w-24 h-20 rounded-full flex justify-center items-center text-1xl text-gray-100">
           <li>
                <Link to="/signup" className="text-white-800 font-bold hover:text-gray-200">Sign Up</Link>
                    </li>
        </div>
      
    </div>
  );
};

export default FooterHeader;
