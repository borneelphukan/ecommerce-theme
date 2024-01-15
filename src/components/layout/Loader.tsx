import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white opacity-80 z-50">
      <div className="loader animate-spin rounded-full h-32 w-32 border-t-2 border-red-700"></div>
    </div>
  );
};

export default Loader;
