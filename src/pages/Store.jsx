import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { FaSearch, FaCar } from 'react-icons/fa';
import Navbar from '../components/Navbar'; 
import FooterContent from '../components/FooterContent';

const products = [
  { id: 1, name: 'Wrench Set', image: './Images/wrentch.webp', price: '2,000' },
  { id: 2, name: 'Screwdriver Kit', image: './Images/screw.webp', price: '1,200' },
  { id: 3, name: 'Torque Wrench', image: './Images/toeque.jpg', price: '3,700' },
  { id: 4, name: 'Power Drill', image: './Images/powerdrill.jpg', price: '5,000' },
  { id: 5, name: 'Pliers Set', image: './Images/pillers.jpg', price: '1,500' },
  { id: 6, name: 'Socket Set', image: './Images/socket.webp', price: ' 4,200' },
  { id: 7, name: 'Impact Wrench', image: './Images/impact.webp', price: '8,000' },
  { id: 8, name: 'Hacksaw', image: './Images/hack.jpg', price: '1,500' },
  { id: 9, name: 'Allen Key Set', image: './Images/allen.webp', price: '800' },
  { id: 10, name: 'Adjustable Spanner', image: './Images/spanner.png', price: '2,400' },
  { id: 11, name: 'Air Compressor', image: './Images/air.webp', price: '10,000' },
  { id: 12, name: 'Hydraulic Jack', image: './Images/hydraulic.jpg', price: '6,200' },
  { id: 13, name: 'Grease Gun', image: './Images/greece.webp', price: '2,800' },
  { id: 14, name: 'Ratchet Set', image: './Images/rat.jpg', price: ' 3,300' },
  { id: 15, name: 'Ball Peen Hammer', image: './Images/hammer.png', price: '900' },
  { id: 16, name: 'Bench Grinder', image: './Images/bench.webp', price: '7,0000' },
  { id: 17, name: 'Oil Filter Wrench', image: './Images/oil.png', price: '1,800' },
  { id: 18, name: 'Mechanic’s Tool Chest', image: './Images/chest.jpg', price: '16,000' },
  { id: 19, name: 'Handheld Tire Inflator', image: './Images/tirein.jpg', price: '2,000' },
  { id: 20, name: 'Digital Vernier Caliper', image: './Images/vernier.png', price: '3,000' },
  { id: 21, name: 'Multimeter', image: './Images/multi.png', price: '2,200' },
  { id: 22, name: 'Hydraulic Press', image: './Images/hydraulicp.jpeg', price: '25,000' },
  { id: 23, name: 'Engine Hoist', image: './Images/engine.webp', price: '18,000' },
  { id: 24, name: 'Battery Charger', image: './Images/charger.webp', price: '3,500' },
  { id: 25, name: 'Mechanic\'s Creeper', image: './Images/creeper.webp', price: '2,600' },
  { id: 26, name: 'Diagnostic Scan Tool', image: './Images/diag.webp', price: '12,000' },
  { id: 27, name: 'Spark Plug Wrench', image: './Images/spark.jpg', price: '900' },
  { id: 28, name: 'Brake Bleeder Kit', image: './Images/brakee.jpg', price: '4,500' },
  { id: 29, name: 'Oxygen-Acetylene Welding Kit', image: './Images/oxygen.jpeg', price: '20,000' },
  { id: 30, name: 'Tire Changer', image: './Images/tirec.webp', price: '35,000' },
  { id: 31, name: 'Bearing Puller Set', image: './Images/beer.jpg', price: '3,200' },
  { id: 32, name: 'Heat Gun', image: './Images/heat.jpg', price: '2,000' },
  { id: 33, name: 'Hydraulic Car Lift', image: './Images/carlift.avif', price: '1,50,000' },
  { id: 34, name: 'Pneumatic Ratchet Wrench', image: './Images/drill.webp', price: '6,000' },
  { id: 35, name: 'Clutch Alignment Tool Kit', image: './Images/clutch.webp', price: '3,500' },
  { id: 36, name: 'Fuel Pressure Teste', image: './Images/fuel.gif', price: '4,000' },
  { id: 37, name: 'Chain Pulley Block', image: './Images/chain.png', price: '7,500' },
  { id: 38, name: 'Cooling System Pressure Tester', image: './Images/cooling.jpg', price: '5,200' },
  { id: 39, name: 'Timing Light', image: './Images/light.gif', price: '3,700' },
  { id: 40, name: 'Handheld Grinder', image: './Images/grinder.avif', price: '2,500' },
  { id: 41, name: 'Work Light with Stand', image: './Images/worklight.jpg', price: '3,200' },
  { id: 42, name: 'Automotive Stethoscope', image: './Images/state.png', price: '1,800' },
  { id: 43, name: 'Mechanic\'s Gloves', image: './Images/glove.webp', price: '1,200' },
  { id: 44, name: 'Impact Wrench (Electric)', image: './Images/wrentchele.jpg', price: '8,500' },
];

const Store = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();
  
    const handleAddToCart = (product) => {
      if (!isSignedIn) {
        navigate('/signup'); 
      } else {
        setCart((prevCart) => [...prevCart, product]); 
        alert(`${product.name} has been added to your cart successfully!`);
      }
    };

    const handleProceedToBuy = () => {
      navigate('/cart', { state: { cart } }); 
    };

    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <>
        <Navbar handleProceedToBuy={handleProceedToBuy} />
        <div className="flex justify-between items-center p-5 bg-gray-800 text-white flex-wrap">
          <h1 className="text-3xl font-bold flex items-center mb-4 md:mb-0">
            <FaCar className="mr-2 text-gray-200" /> Automotive Store
          </h1>
          {showSearch && (
            <input
              type="text"
              placeholder="Search automotive products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-1/3 p-2 rounded border border-gray-300 bg-gray-100"
            />
          )}
          <FaSearch
            className="text-2xl cursor-pointer hover:text-yellow-400"
            onClick={() => setShowSearch(!showSearch)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 p-5">
          {filteredProducts.map((product) => (
            <div key={product.id} className="w-full max-w-xs p-6 border rounded-lg bg-gray-100 shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-700">₹{product.price}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="mt-4 w-full py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        <FooterContent />
      </>
    );
};

export default Store;
