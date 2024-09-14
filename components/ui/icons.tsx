'import React from 'react';


interface EchoIconProps {
  width?: number;
  height?: number;
  className?: string;
}


const EchoIcon: React.FC<EchoIconProps> = ({ width = 50, height = 50, className }) => {
  return (
    <img
      src="/assets/echo-logo.png"  // Ensure your EchoMind logo is placed in the correct public folder.
      alt="EchoMind Logo"
      width={width}
      height={height}
      className={className}
    />
  );
};


export default EchoIcon;
```