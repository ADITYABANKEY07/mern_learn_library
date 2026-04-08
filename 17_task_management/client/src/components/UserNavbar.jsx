import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Optional: cleaner icons

const UserNavbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.clear(); // Shorthand if clearing all
    navigate("/");
    setIsOpen(false);
  };

  const linkClass = "text-gray-300 hover:text-sky-400 transition duration-200 py-2 w-full text-center";
  const activeClass = "text-sky-400 font-semibold";

  return (
    <nav className="bg-slate-900 text-white shadow-md relative z-50">
      <div className="flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <div className="text-xl font-bold text-sky-400 tracking-wide">
          TaskManager
        </div>

        {/* HAMBURGER BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl focus:outline-none transition-transform duration-300"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex gap-8 items-center">
          <NavLink
            to="/userdashboard/usertask"
            className={({ isActive }) =>
              isActive ? `${linkClass} ${activeClass} border-b-2 border-sky-400 pb-1` : linkClass
            }
          >
            Tasks
          </NavLink>
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
      </div>

      {/* MOBILE MENU (Animated) */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-slate-800 shadow-xl
          ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}
      >
        <div className="flex flex-col items-center gap-4 py-6 px-8">
          <NavLink
            to="/userdashboard/usertask"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? `${linkClass} ${activeClass}` : linkClass
            }
          >
            Tasks
          </NavLink>

          <button
            onClick={handleLogout}
            className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 
             text-white px-4 py-3 rounded-lg text-sm font-medium shadow-md"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;