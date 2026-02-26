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
          name="empno"
          placeholder="Enter your empno"
        />{" "}
        <br />
        <input
          type="text"
          className="border-2 mt-1"
          onChange={handleChange}
          name="name"
          placeholder="Enter your name"
        />{" "}
        <br />
        <input
          type="text"
          className="border-2 mt-1"
          onChange={handleChange}
          name="designation"
          placeholder="Enter your designation"
        />{" "}
        <br />
        <input
          type="text"
          className="border-2 mt-1"
          onChange={handleChange}
          name="salary"
          placeholder="Enter your salary"
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
