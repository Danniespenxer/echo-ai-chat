import React, { useState } from 'react';
import { signOut } from 'next-auth/react';
import EchoIcon from './echo-icon';


const UserMenu: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="flex items-center space-x-2 p-2 bg-gray-100 rounded-lg hover:bg-gray-200"
      >
        <EchoIcon width={30} height={30} />
        <span className="text-gray-800">User Menu</span>
      </button>


      {menuOpen && (
        <div className="absolute right-0 z-50 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
          <button
            onClick={() => signOut()}
            className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
          >
            Sign Out
          </button>
          <a
            href="/profile"
            className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};


export default UserMenu;
