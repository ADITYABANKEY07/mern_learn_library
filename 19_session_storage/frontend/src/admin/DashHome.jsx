import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DashHome = () => {
    let navigate = useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem("name")){
            navigate("/home")
        }
    },[])
    let handleLogOut = ()=>{
        localStorage.clear()
        navigate("/login")
    }
  return (
    <div className="flex items-center justify-around bg-blue-500 text-center py-5 text-3xl text-white font-semibold">
      <h1 className="">
        Welcome Name: {localStorage.getItem("name")} and Email:{" "}
        {localStorage.getItem("email")}
      </h1>

      <button 
      onClick={handleLogOut}
      className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md font-semibold transition">
        LogOut
      </button>
    </div>
  );
};

export default DashHome;
