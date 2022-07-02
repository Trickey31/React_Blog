import React from "react";

const LoadingSpinner = ({ className = "" }) => {
  return (
    <div
      className={`inline-block w-8 h-8 rounded-full border-4  border-t-transparent border-b-transparent animate-spin ${
        className || "border-white"
      }`}
    ></div>
  );
};

export default LoadingSpinner;
