import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-around py-4 bg-gradient-to-r from-[#0897d4] via-[#090979] to-[#00d4ff] text-white">
    <h1 className="text-5xl font-bold" >Task Management</h1>
      {/* <div className="nav-link flex font-semibold gap-10 text-3xl">
        <Link to={"/home"}>Home</Link>
      </div> */}
    </div>
  );
};

export default Navbar;
