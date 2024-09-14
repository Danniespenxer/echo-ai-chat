import React from 'react';
import EchoIcon from './echo-icon';


interface ExternalLinkProps {
  href: string;
  label: string;
  showIcon?: boolean;
}


const ExternalLink: React.FC<ExternalLinkProps> = ({ href, label, showIcon = true }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 text-blue-500 hover:underline"
    >
      {showIcon && <EchoIcon width={20} height={20} />}
      <span>{label}</span>
    </a>
  );
};


export default ExternalLink;
```