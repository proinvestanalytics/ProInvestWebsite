import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <a href="/">
        <img 
          src="/proinvest-logo.png" 
          alt="ProInvest Logo" 
          className="h-12 w-auto rounded-lg shadow-lg"
        />
      </a>
    </div>
  );
};

export default Logo;
