import React from "react";
import { Link } from "react-router-dom";

const Overview = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-semibold">
        Overview :{" "}
        <span className="font-bold">{localStorage.getItem("admin")}</span>{" "}
      </h1>
      <div className="flex gap-5 mt-10">
        <div className="flex items-center justify-center bg-white px-5 py-5 w-1/2 h-30 rounded-xl cursor-pointer hover:border-2 hover:border-red-500">
          <p className="text-2xl text-center font-semibold">
            <Link to={"/dashboard/createuser"}>Create User</Link>
          </p>
        </div>
                <div className="flex items-center justify-center bg-white px-5 py-5 w-1/2 h-30 rounded-xl cursor-pointer hover:border-2 hover:border-green-500">
          <p className="text-2xl text-center font-semibold">
            <Link to={"/dashboard/assigntask"}>Assign Task</Link>
          </p>
        </div>
        <div className="flex items-center justify-center bg-white px-5 py-5 w-1/2 h-30 rounded-xl cursor-pointer hover:border-2 hover:border-green-500">
          <p className="text-2xl text-center font-semibold">
            <Link to={"/dashboard/userdetails"}>User Details</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
