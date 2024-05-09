import React from 'react';

const FAQ = () => {
  return (
    <div className="px-6 py-4">
      {/* FAQ Title */}
      <h1 className="text-blue-800 font-bold text-2xl mb-4">FAQ</h1>

      {/* First Accordion */}
      <div className="border border-blue-800 rounded-lg mb-4 max-w-lg h-17.5">
        <div className="px-4 py-2 cursor-pointer flex items-center justify-between">
          <div className="font-semibold text-black-500">Can education flashcard be used for all age groups?</div>
          <img src="../../assets/Vector (5).png" alt="Down Arrow" className="w-2 h-2" />
        </div>
      </div>

      {/* Second Accordion */}
      <div className="border border-blue-800 rounded-lg mb-4 max-w-lg h-17.5">
        <div className="px-4 py-2 cursor-pointer flex items-center justify-between">
          <div className="font-semibold text-black-500">How do education flashcard work?</div>
          <img src="../../assets/Vector (5).png" alt="Down Arrow" className="w-2 h-2" />
        </div>
      </div>

      {/* Third Accordion */}
      <div className="border border-blue-800 rounded-lg mb-4 max-w-lg h-17.5">
        <div className="px-4 py-2 cursor-pointer flex items-center justify-between">
          <div className="font-semibold text-black-500">Can education flashcard be used for test preparation?</div>
          <img src="../../assets/Vector (5).png" alt="Down Arrow" className="w-2 h-2" />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
