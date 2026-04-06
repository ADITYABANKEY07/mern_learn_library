import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  let navigate = useNavigate();

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [userType, setUserType] = useState("user"); // ✅ default fixed

  let handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // ✅ Dynamic API based on userType
      let api = `${import.meta.env.VITE_API_URL}/${userType}/login`;

      let res = await axios.post(api, {
        email: email,
        password: password,
      });

      // ✅ Dynamic toast
      toast.success(`${userType} login successfully ✅`);

      // ✅ Store based on userType
      if (userType === "admin") {
        localStorage.setItem("admin", res.data.admin.email);

        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      } else {
        localStorage.setItem("userEmail", res.data.user.email);
        localStorage.setItem("userName", res.data.user.name);
        localStorage.setItem("userId", res.data.user._id);
        setTimeout(() => {
          navigate("/userdashboard");
        }, 2000);
      }
    } catch (error) {
      toast.error(error.response?.data?.msg || "Login failed ❌");
    }
  };

return (
  <div className="min-h-screen flex flex-col bg-gray-100">

    {/* Toast */}
    <ToastContainer position="top-right" autoClose={2000} />  

    {/* Main Center */}
    <div className="flex-1 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        <h1 className="text-3xl text-center font-bold text-blue-600 mb-6">
          Login Form
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none mt-1"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none mt-1"
              required
            />
          </div>

          {/* User Type */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Login As
            </label>
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-1"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer text-white font-semibold py-2 rounded-lg transition-all duration-200"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  </div>
);
};

export default Home;
