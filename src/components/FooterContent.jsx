import React from 'react';

const FooterContent = () => {
  return (
    <div className="bg-gray-800 text-white py-10 px-8 flex flex-col md:flex-row justify-between">
      <div className="footer-left mb-8 md:mb-0">
        <p className="mb-5">ANYWHERE MECHANIC®</p>
        <div className="office-details flex flex-col md:flex-row justify-between">
          <div className="location mb-6 md:mb-0 md:mr-12">
            <strong>BHOPAL</strong>
            <p>+91 2073887591</p>
            <p>Unit 30, Metropolitan Wharf,<br />Bhopal</p>
            <a href="#" className="text-white hover:underline">See on map →</a>
          </div>
          <div className="location">
            <strong>INDORE</strong>
            <p>+91 167747644</p>
            <p>Cabrera 5884 1st floor,<br />Indore</p>
            <a href="#" className="text-white hover:underline">See on map →</a>
          </div>
        </div>
      </div>

      <div className="footer-extra text-center md:text-left">
        <p>WANT TO BE THE SMARTEST MECHANIC?</p>
        <a href="Signup" className="text-white hover:underline block mt-2">SIGN UP FOR ACQUIRING SERVICES →</a>
        <p className="mt-4">CONTACT US:</p>
        <div className="social-icons mt-2 flex justify-center md:justify-start">
          <a href="#" className="mr-3 text-white hover:text-yellow-400"><i className="fab fa-facebook"></i></a>
          <a href="#" className="mr-3 text-white hover:text-yellow-400"><i className="fab fa-instagram"></i></a>
          <a href="#" className="mr-3 text-white hover:text-yellow-400"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-white hover:text-yellow-400"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
    </div>
  );
};

export default FooterContent;
