'uimport React from 'react';
import { signIn } from 'next-auth/react';
import EchoIcon from './echo-icon';


const providers = [
  { id: 'google', name: 'Google' },
  { id: 'github', name: 'GitHub' }
];


const Providers: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <EchoIcon width={60} height={60} className="mb-4" />
      {providers.map((provider) => (
        <button
          key={provider.id}
          className="w-full p-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          onClick={() => signIn(provider.id)}
        >
          Sign in with {provider.name}
        </button>
      ))}
    </div>
  );
};


export default Providers;
```