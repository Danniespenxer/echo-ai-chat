import React from 'react';
import EchoIcon from './echo-icon';


const EmptyScreen: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <EchoIcon width={100} height={100} className="mb-4 animate-spin" />
      <p className="text-lg text-gray-600">Start a new conversation!</p>
    </div>
  );
};


export default EmptyScreen;
```