import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  let navigate = useNavigate();
  let [user, setUser] = useState();
  let loadData = async () => {
    let api = "http://localhost:6005/user/display";
    let res = await axios.get(api, {
      withCredentials: true,
    });
    setUser(res.data.user);
  };
  useEffect(() => {
    loadData();
  }, []);
  let handleLogOut = async () => {
    let api = "http://localhost:6005/user/logout";
    let res = await axios.get(api, {
      withCredentials: true,
    });
    navigate("/login");
  };
  return (
    <div className="flex items-center justify-around bg-blue-500 text-center py-5 text-3xl text-white font-semibold">
      <h1 className="text-5xl text-white">
        Welcome back {user?.email}
      </h1>

      <button
        onClick={handleLogOut}
        className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md font-semibold transition"
      >
        LogOut
      </button>
    </div>
  );
};

export default Home;
