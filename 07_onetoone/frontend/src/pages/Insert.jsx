import React, { useState } from "react";
import axios from "axios"

const Insert = () => {
  let [form, setForm] = useState({});
  let handleChange = (e) => {
    let { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]:value,
    }));
  };
  let handleSubmit = async (e) => {
    e.preventDefault();
    let api = "http://localhost:6001/employee/insert";
    let response = await axios.post(api, form);
    alert("Data inserted successfully")
  };
  return (
    <div>
    
    <h1
        style={{
      fontSize:"40px"
    }}
    >Insert Employee Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="border-2 mt-1"
          onChange={handleChange}
          name="username"
          placeholder="Enter your username"
        />{" "}
        <br />
        <input
          type="text"
          className="border-2 mt-1"
          onChange={handleChange}
          name="email"
          placeholder="Enter your email"
        />{" "}
        <br />
        <input
          type="text"
          className="border-2 mt-1"
          onChange={handleChange}
          name="fname"
          placeholder="Enter your firstname"
        />{" "}
        <br />
        <input
          type="text"
          className="border-2 mt-1"
          onChange={handleChange}
          name="lname"
          placeholder="Enter your lastname"
        />{" "}
        <br />
        <button
          type="submit"
          className="px-3 py-2 bg-red-500 text-white font-semibold"
        >
          Data Save
        </button>
      </form>
    </div>
  );
};

export default Insert;
