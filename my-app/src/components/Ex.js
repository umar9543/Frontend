import React from 'react';

const HeroSection1 = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-800">
            Book <span className="text-blue-500">O16 Labs</span> for your <span className="text-blue-500">Dinner Party</span>
          </h1>
          <p className="mt-4 text-gray-600">
            We’re providing the best Chef booking platform. Choose a menu and book your Chef instantly.
          </p>

          {/* Selection Inputs */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="relative w-full sm:w-auto">
              <select className="w-full p-3 border border-gray-300 rounded">
                <option value="Al Shamal">Al Shamal</option>
              </select>
            </div>
            <div className="relative w-full sm:w-auto">
              <input type="text" className="w-full p-3 border border-gray-300 rounded" placeholder="15 Jan - 20 Jan 2022" />
            </div>
            <div className="relative w-full sm:w-auto">
              <select className="w-full p-3 border border-gray-300 rounded">
                <option value="5">5 Persons</option>
              </select>
            </div>
            <button className="bg-blue-500 text-white p-3 rounded">
              <span>&#x27A4;</span>
            </button>
          </div>

          {/* Customer Review */}
          <div className="mt-8 flex items-center">
            <div className="flex -space-x-3">
              <img className="w-10 h-10 rounded-full border-2 border-white" src="https://i.pravatar.cc/300" alt="Avatar" />
              <img className="w-10 h-10 rounded-full border-2 border-white" src="https://i.pravatar.cc/300" alt="Avatar" />
              <img className="w-10 h-10 rounded-full border-2 border-white" src="https://i.pravatar.cc/300" alt="Avatar" />
            </div>
            <div className="ml-4">
              <p className="text-gray-600">Our happy customers</p>
              <p className="font-bold text-yellow-500">4.7 (8.2K Review)</p>
            </div>
            <div className="ml-auto">
              <p className="text-gray-600">We accept</p>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Visa.svg/1200px-Visa.svg.png" alt="Visa" className="w-10 inline-block mr-2" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/800px-Mastercard-logo.svg.png" alt="MasterCard" className="w-10 inline-block" />
            </div>
          </div>
        </div>

        {/* Images */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <div className="grid grid-cols-2 gap-4">
            <img src="https://via.placeholder.com/150" alt="Dish 1" className="w-full h-auto rounded-lg shadow-lg" />
            <img src="https://via.placeholder.com/150" alt="Dish 2" className="w-full h-auto rounded-lg shadow-lg" />
            <img src="https://via.placeholder.com/150" alt="Dish 3" className="w-full h-auto rounded-lg shadow-lg" />
            <img src="https://via.placeholder.com/150" alt="Dish 4" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection1;
