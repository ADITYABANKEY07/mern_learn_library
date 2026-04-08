import React, { useState, useEffect } from "react";
import AdminNavbar from "./components/AdminNavbar";
import { Outlet, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";

const Dashboard = () => {
    const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
    let userAuthenticate = async () => {
    if(!localStorage.getItem("admin")){
      navigate("/home")
    } 
  }
  useEffect(()=>{
    userAuthenticate()
  },[])

  return (
    <div className="min-h-screen bg-blue-50">

      {/* 🔥 MOBILE TOP BAR */}
      <div className="md:hidden flex justify-between items-center p-4 bg-blue-900 text-white">
        <h1 className="font-bold text-3xl">Admin</h1>
        <button onClick={() => setIsOpen(true)}>
          <Menu size={48} />
        </button>
      </div>

      <div className="md:flex">
        <AdminNavbar isOpen={isOpen} setIsOpen={setIsOpen} />

        <main className="flex-1 p-4 md:p-8">
          <Outlet />
        </main>
      </div>

      {/* 🔥 OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;