import React from 'react';

const Sponsor = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4">
      {/* Sponsor Image */}
      <img
        src="../../assets/Frame 41.png" 
        alt="Sponsor"
        className="h-18 w-18"
      />

      {/* Plus Icon and Text */}
      <div className="flex items-center">
        {/* Plus Icon */}
        <img
          src="../../assets/Frame (2).png" 
          alt="Plus"
          className="h-9 w-9 mr-2"
        />

        {/* Create Flashcard Text */}
        <span className="text-blue-700 text-xl mr-10">Create Flashcard</span>
      </div>
    </div>
  );
};

export default Sponsor;
