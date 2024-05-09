import React from 'react';

const Header = () => {
  return (
    <header className="bg-white-500 py-4 px-6 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="../../assets/Component 40.png"
          alt="Logo"
          className="h-8"
        />
      </div>

      {/* Navigation Links */}
      <nav className="space-x-4 ml-auto mr-10">
        <a href="/" className="text-blue hover:underline ">Home</a>
        <a href="/flashcard" className="text-blue hover:underline ">Flashcard</a>
        <a href="/contact" className="text-blue hover:underline ">Contact</a>
        <a href="/faq" className="text-blue hover:underline ">FAQ</a>
      </nav>

      {/* Login Button */}
      <button className="bg-blue-700 text-white px-4 py-2 rounded-l-full rounded-r-full hover:bg-blue-600">
        Login
      </button>
    </header>
  );
};

export default Header;
