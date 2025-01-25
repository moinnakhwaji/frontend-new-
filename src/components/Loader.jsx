import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#1f1e24]">
      <div className="w-16 h-16 border-t-4 border-white border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
