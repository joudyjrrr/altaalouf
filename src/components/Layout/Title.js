import React from "react";

const Title = ({ title, className = "" }) => {
  return (
    <h1
      className={`text-[50px] font-semibold text-center text-white transition-all duration-300 
      hover:bg-gradient-to-r hover:from-[#ca4246] hover:via-[#f18f43] hover:to-[#a7489b] 
      hover:bg-clip-text hover:text-transparent max-sm:text-2xl ${className}`}
    >
      {title}
    </h1>
  );
};

export default Title;
