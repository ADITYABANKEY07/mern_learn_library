import React from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminNavbar = () => {
  let navigate = useNavigate();
  return (
    /* h-screen: Full height of the browser
       w-64: Standard sidebar width (fixed)
       sticky top-0: Keeps it visible while scrolling content */
    <div className="flex flex-col h-screen w-64 py-8 px-6 bg-orange-700 text-white sticky top-0 shadow-xl">
      <h1 className="text-3xl font-extrabold mb-12 border-b border-orange-600 pb-4">
        Admin Panel
      </h1>

      <nav className="flex flex-col font-medium gap-4 text-xl">
        <Link
          to="/dashboard/overview"
          className="hover:bg-orange-600 p-3 rounded-lg transition-colors"
        >
          Overview
        </Link>
        <Link
          to="/dashboard/createuser"
          className="hover:bg-orange-600 p-3 rounded-lg transition-colors"
        >
          Create User
        </Link>
        <Link
          to="/dashboard/userdetails"
          className="hover:bg-orange-600 p-3 rounded-lg transition-colors"
        >
          User Details
        </Link>
      </nav>

      {/* Optional: Push a Logout button to the bottom */}
      <div className="mt-auto">
        <button
          onClick={() => {
            localStorage.clear();
            navigate("/home");
          }}
          className="w-full text-left p-3 hover:text-orange-200 font-bold cursor-pointer"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminNavbar;
