import React from "react";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <div className="flex items-center justify-around py-4 bg-blue-700 text-white">
      <h1 className="text-5xl font-bold">Admin Panel</h1>
      <div className="nav-link flex font-semibold gap-10 text-3xl">
        <Link to="/dashboard/home">Home</Link>
        <Link to="/dashboard/product">Product</Link>
        <Link to="/dashboard/services">Services</Link>
      </div>
    </div>
  );
};

export default AdminNavbar;
