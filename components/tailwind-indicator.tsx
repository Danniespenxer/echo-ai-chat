import React from 'react';


interface TailwindIndicatorProps {
  status: 'active' | 'inactive';
}


const TailwindIndicator: React.FC<TailwindIndicatorProps> = ({ status }) => {
  return (
    <span
      className={`inline-block w-3 h-3 rounded-full ${
        status === 'active' ? 'bg-green-500' : 'bg-red-500'
      }`}
    />
  );
};


export default TailwindIndicator;