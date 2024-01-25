import React from "react";

const Container = ({ children }) => {
  return (
    <div className="w-full h-full max-w-[1220px] px-[20px] mx-auto flex justify-between items-center bg-red-400 ">
      {children}
    </div>
  );
};

export default Container;
