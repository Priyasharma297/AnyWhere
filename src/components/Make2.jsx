import React from 'react';
import Step from './Step';
import Arrow from './Arrow';

const MakeIt = () => {
  return (
    <div className="text-center py-10 px-4">
      <h1 className="text-3xl font-bold text-gray-800 uppercase mb-10 relative inline-block">
        How We Work, for Client?
        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] bg-orange-500 h-1 w-20"></span>
      </h1>

      {/* Responsive horizontal scrolling for smaller screens */}
      <div className="flex justify-start lg:justify-center items-center gap-4 overflow-x-auto px-2">
        <div className="flex items-center gap-4 min-w-max">
          <Step
            title="01"
            description="Register"
            image="./Images/register.png"
          />
          <Arrow />
          <Step
            title="02"
            description="Search Mechanic"
            image="./Images/search.webp"
          />
          <Arrow />
          <Step
            title="03"
            description="Book Service"
            image="./Images/book.jpg"
          />
          <Arrow />
          <Step
            title="04"
            description="Track"
            image="./Images/track.png"
          />
        </div>
      </div>
    </div>
  );
};

export default MakeIt;
