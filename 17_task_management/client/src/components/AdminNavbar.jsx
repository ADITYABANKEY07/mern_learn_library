import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const AdminNavbar = () => {
  const navigate = useNavigate();

  const linkStyle =
    "flex items-center gap-3 p-3 rounded-lg transition-all duration-200";

  const activeStyle = "bg-blue-700 text-white shadow-md";

  return (
    <div className="flex flex-col h-screen w-64 py-8 px-6 bg-blue-900 text-blue-100 sticky top-0 shadow-xl">
      
      {/* Logo / Title */}
      <h1 className="text-2xl font-bold mb-10 border-b border-blue-700 pb-4 tracking-wide">
        Admin Panel
      </h1>

      {/* Navigation */}
      <nav className="flex flex-col gap-3 text-[17px]">
        
        <NavLink
          to="/dashboard/overview"
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? activeStyle : "hover:bg-blue-800"}`
          }
        >
          Overview
        </NavLink>

        <NavLink
          to="/dashboard/createuser"
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? activeStyle : "hover:bg-blue-800"}`
          }
        >
          Create User
        </NavLink>

        <NavLink
          to="/dashboard/assigntask"
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? activeStyle : "hover:bg-blue-800"}`
          }
        >
          Assign Task
        </NavLink>
        <NavLink
          to="/dashboard/seereport"
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? activeStyle : "hover:bg-blue-800"}`
          }
        >
          See Report
        </NavLink>

        <NavLink
          to="/dashboard/userdetails"
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? activeStyle : "hover:bg-blue-800"}`
          }
        >
          User Details
        </NavLink>
      </nav>

      {/* Logout */}
      <div className="mt-auto pt-6 border-t border-blue-700">
        <button
          onClick={() => {
            localStorage.clear();
            navigate("/home");
          }}
          className="w-full text-left p-3 rounded-lg hover:bg-blue-800 cursor-pointer hover:text-white transition-all duration-200 font-semibold"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminNavbar;