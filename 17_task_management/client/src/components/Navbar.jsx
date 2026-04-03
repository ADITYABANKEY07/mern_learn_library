import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-600 via-blue-800 to-cyan-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-center px-6 py-4">
        <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
          Task Management
        </h1>
      </div>
    </div>
  );
};

export default Navbar;