import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-around items-center">
      
      {/* Logo */}
      <h1 className="text-5xl font-bold text-blue-600 tracking-wide">
        Cloudinary
      </h1>

      {/* Links */}
      <div className="flex gap-6 text-2xl font-medium">
        <Link
          to="/insert"
          className="text-gray-700 hover:text-blue-600 transition duration-300"
        >
          Insert
        </Link>

        <Link
          to="/display"
          className="text-gray-700 hover:text-blue-600 transition duration-300"
        >
          Display
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;