import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative w-10 h-10 bg-primary-700 rounded-lg flex items-center justify-center overflow-hidden">
        <div className="absolute w-5 h-5 bg-primary-100 rounded-sm transform rotate-45"></div>
        <span className="relative text-white font-bold text-xl">L</span>
      </div>
      <div className="text-primary-100 font-display">
        <span className="font-semibold">Local</span>
        <span className="text-primary-600 mx-1">Web</span>
        <span className="font-semibold">Refresh</span>
      </div>
    </div>
  );
};

export default Logo;