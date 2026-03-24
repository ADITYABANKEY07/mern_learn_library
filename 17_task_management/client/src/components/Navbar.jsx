import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-around py-4 bg-blue-600 text-white">
    <h1 className="text-5xl font-bold" >Task Management</h1>
      {/* <div className="nav-link flex font-semibold gap-10 text-3xl">
        <Link to={"/home"}>Home</Link>
      </div> */}
    </div>
  );
};

export default Navbar;
