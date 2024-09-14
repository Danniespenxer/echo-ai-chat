import React from 'react';


const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black text-gold text-center p-6 shadow-inner">
      <p className="text-sm">&copy; {new Date().getFullYear()} Echo AI. All Rights Reserved.</p>
    </footer>
  );
};


export default Footer;
