'import React from 'react';
import { signIn } from 'next-auth/react';


interface LoginButtonProps {
  providerId: string;
  label: string;
}


const LoginButton: React.FC<LoginButtonProps> = ({ providerId, label }) => {
  return (
    <button
      onClick={() => signIn(providerId)}
      className="w-full px-4 py-2 mt-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500"
    >
      {label}
    </button>
  );
};


export default LoginButton;
```
