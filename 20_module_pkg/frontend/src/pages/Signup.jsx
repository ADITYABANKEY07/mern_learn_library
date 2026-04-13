import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  let [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  let handleInput = (e) => {
    let { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let api = "http://localhost:6001/user/signup";
      let res = await axios.post(api, input);
      console.log(res.data);
      toast.success(res.data.msg);
    } catch (error) {
      toast.error("Signup failed ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-[350px]">

        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={input.name}
            onChange={handleInput}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
          />

          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={input.email}
            onChange={handleInput}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
          />

          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            value={input.password}
            onChange={handleInput}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
          />

          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white py-2 rounded-md font-semibold transition"
          >
            Signup
          </button>

        </form>

        <p className="text-sm text-center text-gray-500 mt-4">
          Already have an account?
          <span className="text-red-500 cursor-pointer ml-1"> Login</span>
        </p>

      </div>

      <ToastContainer position="top-center" />
    </div>
  );
};

export default Signup;