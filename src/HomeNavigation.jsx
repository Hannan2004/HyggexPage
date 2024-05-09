import React from 'react';

const HomeNavigation = () => {
  return (
    <div className="bg-white-200 py-4 px-6 flex items-left ">
      {/* Home Logo */}
      <div className="ml-2">
        <img
          src="../../assets/Frame.png" 
          alt="Home Logo"
          className="h-8"
        />
      </div>

      {/* Links */}
      <nav className="flex items-center ml-4">
        <span className="text-gray-500 mx-2">{'>'}</span>
        <a href="/flashcard" className="text-gray-500 hover:text-blue-500">Flashcard</a>
        <span className="text-gray-500 mx-2">{'>'}</span>
        <a href="/mathematics" className="text-gray-500 hover:text-blue-500">Mathematics</a>
        <span className="text-gray-500 mx-2">{'>'}</span>
        <a href="/relation-functions" className="text-blue-800 hover:text-blue-700">Relation and Functions</a>
      </nav>
    </div>
  );
};

export default HomeNavigation;
