import React from "react";

const Home = () => {
  return (
    /* We use min-h-full and flex to center the card on the page */
    <div className="flex items-center justify-center p-6">
      {/* Form Card Container */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 border border-gray-100">
        <h1 className="text-3xl text-center font-extrabold text-blue-600 mb-8">
          Login Form
        </h1>

        <form className="flex flex-col gap-5">
          {/* Email Field */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="name@company.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          {/* Password Field */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          {/* --- DROPDOWN SECTION --- */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-600 ml-1">
              Login As
            </label>
            <div className="relative">
              <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 outline-none appearance-none cursor-pointer pr-10">
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
              {/* Custom Arrow Icon */}
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-400">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 hover:scale-95 text-white font-bold py-3 rounded-lg transition-colors mt-2 cursor-pointer"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
