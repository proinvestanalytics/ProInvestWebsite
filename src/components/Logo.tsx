import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <img 
        src="/proinvest-logo.png" 
        alt="ProInvest Logo" 
        className="h-12 w-auto"
      />
    </div>
  );
};

export default Logo;