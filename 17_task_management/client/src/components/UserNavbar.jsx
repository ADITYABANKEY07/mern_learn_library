import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const UserNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    navigate("/");
  };

  const linkClass = "text-gray-300 hover:text-sky-400 transition duration-200";

  const activeClass = "text-sky-400 border-b-2 border-sky-400 pb-1";

  return (
    <nav className="flex justify-between items-center bg-slate-900 px-8 py-4 text-white shadow-md">
      {/* Logo */}
      <div className="text-xl font-bold text-sky-400 tracking-wide">
        TaskManager
      </div>

      {/* Links */}
      <div className="flex gap-8">
        <NavLink
          to="/userdashboard/usertask"
          className={({ isActive }) =>
            isActive ? `${linkClass} ${activeClass}` : linkClass
          }
        >
          Tasks
        </NavLink>
      </div>

      {/* Right Side */}
      <div>
        <button
          onClick={handleLogout}
          className="bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 
             hover:from-blue-600 hover:via-blue-700 hover:to-cyan-600 cursor-pointer
             text-white px-4 py-2 rounded-lg text-sm font-medium 
             transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default UserNavbar;
