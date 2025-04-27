import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <Link to="/">
        <img 
          src="/proinvest-logo.png" 
          alt="ProInvest Logo" 
          className="h-12 w-auto rounded-lg shadow-lg"
        />
      </Link>
    </div>
  );
};

export default Logo;
