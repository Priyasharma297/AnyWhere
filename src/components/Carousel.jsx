import React, { useState, useEffect } from "react";

const services = [
  { name: "Oil Change", img: "./Images/oilChnage.jpg" },
  { name: "Brake Repair", img: "./Images/brake.jpg" },
  { name: "Tire Replacement", img: "./Images/tire.jpeg" },
  { name: "Battery Check", img: "./Images/battery.png" },
  { name: "Engine Repair", img: "./Images/reapir.jpeg" },
  { name: "Car Wash", img: "./Images/car.jpg" },
  { name: "Alignment", img: "./Images/allig.jpeg" },
  { name: "Oil Change", img: "./Images/oilChnage.jpg" },
  { name: "Brake Repair", img: "./Images/brake.jpg" },
  { name: "Tire Replacement", img: "./Images/tire.jpeg" },
  { name: "Battery Check", img: "./Images/battery.png" },
  { name: "Engine Repair", img: "./Images/reapir.jpeg" },
  { name: "Car Wash", img: "./Images/car.jpg" },
  { name: "Alignment", img: "./Images/allig.jpeg" },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };

  const getTranslateXValue = () => {
    return `translateX(-${currentIndex * (100 / 3)}%)`;
  };

  return (
    <div className="text-center py-10">
      <h2 className="text-3xl font-semibold mb-8">Popular Services</h2>

      <div className="relative flex items-center justify-center w-11/12 mx-auto">
        {/* Prev Button - Only show on larger screens */}
        {!isMobile && (
          <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-3xl text-gray-600 hover:text-black z-10"
            onClick={handlePrev}
          >
            &larr;
          </button>
        )}

        <div className={`overflow-x-auto w-full ${isMobile ? "scrollbar-hide" : ""}`}>
          <ul
            className={`flex transition-transform duration-500 ease-in-out ${isMobile ? "w-max" : "w-full"}`}
            style={!isMobile ? { transform: getTranslateXValue() } : {}}
          >
            {services.map((service, index) => {
              const isActive = index === currentIndex;
              return (
                <li
                  key={index}
                  className={`flex-none p-5 transition-transform transform ${
                    !isMobile && isActive ? "scale-100 opacity-100" : "scale-90 opacity-80"
                  } ${isMobile ? "w-64" : "w-72"}`}
                >
                  <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                    <h3 className="text-xl font-medium mb-4">{service.name}</h3>
                    <img
                      src={service.img}
                      alt={service.name}
                      className="w-48 h-36 object-cover rounded-md mx-auto"
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Next Button - Only show on larger screens */}
        {!isMobile && (
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-3xl text-gray-600 hover:text-black z-10"
            onClick={handleNext}
          >
            &rarr;
          </button>
        )}
      </div>
    </div>
  );
};

export default Carousel;
