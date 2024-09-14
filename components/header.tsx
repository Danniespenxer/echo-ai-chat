import React from 'react';


const Header: React.FC = () => {
  return (
    <header className="w-full bg-black text-gold p-6 shadow-md">
      <div className="flex items-center justify-center">
        {/* Logo */}
        <img src="/path/to/logo.png" alt="Echo AI Logo" className="w-16 h-16 mr-3" />
        {/* Title */}
        <h1 className="text-4xl font-brigend">Echo AI Chatbot</h1>
      </div>
    </header>
  );
};


export default Header;