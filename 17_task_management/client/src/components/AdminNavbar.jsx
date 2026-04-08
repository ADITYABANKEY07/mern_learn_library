import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const AdminNavbar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();

  const linkStyle =
    "flex items-center gap-3 p-3 rounded-lg transition-all duration-200";

  const activeStyle = "bg-blue-700 text-white shadow-md";

  return (
    <div
      className={`fixed md:static top-0 left-0 h-screen w-64 bg-blue-900 text-blue-100 p-6 shadow-xl z-50
      transform transition-transform duration-300
      ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
    >
      {/* Title */}
      <h1 className="text-2xl font-bold mb-10 border-b border-blue-700 pb-4">
        Admin Panel
      </h1>

      {/* Links */}
      <nav className="flex flex-col gap-3 text-[16px]">
        {[
          ["Overview", "/dashboard/overview"],
          ["Create User", "/dashboard/createuser"],
          ["Assign Task", "/dashboard/assigntask"],
          ["See Report", "/dashboard/seereport"],
          ["User Details", "/dashboard/userdetails"],
        ].map(([name, path]) => (
          <NavLink
            key={name}
            to={path}
            onClick={() => setIsOpen(false)} // 🔥 CLOSE ON CLICK
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeStyle : "hover:bg-blue-800"}`
            }
          >
            {name}
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <div className="mt-auto pt-6 border-t border-blue-700">
        <button
          onClick={() => {
            localStorage.removeItem("admin");
            navigate("/home");
            setIsOpen(false); // 🔥 CLOSE
          }}
          className="w-full text-left p-3 rounded-lg hover:bg-blue-800 font-semibold"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminNavbar;