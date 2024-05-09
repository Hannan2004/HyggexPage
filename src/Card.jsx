import React from 'react';

const Card = () => {
  return (
    <div>
      <div className="bg-white-200 py-4 px-6 flex items-center justify-center">
        <nav>
          <a href="/" className="text-blue-800 text-lg underline hover:no-underline hover:text-blue-800 mr-8">Study</a>
          <a href="/" className="text-gray-500 text-lg hover:text-blue-500 mr-8">Quiz</a>
          <a href="/" className="text-gray-500 text-lg hover:text-blue-500 mr-8">Test</a>
          <a href="/" className="text-gray-500 text-lg hover:text-blue-500 mr-8">Game</a>
          <a href="/" className="text-gray-500 text-lg hover:text-blue-500">Others</a>
        </nav>
      </div>

      <div className="flex justify-center items-center mt-4">
        <div className="relative h-64 w-96 bg-blue-800 rounded-lg shadow-md flex flex-col justify-center items-center">
          {/* Bulb Image */}
          <img
            src="/assets/Vector.png"
            alt="Bulb"
            className="h-6 w-6 absolute top-3 left-3"
          />

          {/* Sound Logo */}
          <img
            src="/assets/Frame (1).png"
            alt="Sound"
            className="h-6 w-6 absolute top-3 right-3"
          />

          {/* Equation */}
          <div className="text-white text-xl font-bold text-center mt-8">9 + 6 + 7x - 2x - 3</div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10 w-full px-4">
        {/* Reset Button */}
        <img
          src="../../assets/Vector (1).png"
          alt="Reset"
          className="h-6 w-6 mr-20"
        />

        {/* Left Arrow and Text */}
        <div className="flex items-center">
          <img
            src="../../assets/Vector (3).png" 
            alt="Left Arrow"
            className="h-6 w-6 mr-2"
          />
          <span className="text-gray-600">01/10</span>
          <img
            src="../../assets/Vector (4).png" 
            alt="Right Arrow"
            className="h-6 w-6 ml-2"
          />
        </div>

        {/* Maximize Button */}
        <img
          src="../../assets/Vector (2).png" 
          alt="Maximize"
          className="h-6 w-6 ml-20"
        />
      </div>
    </div>
  );
};

export default Card;
