import React from "react";
import { useState } from "react";
import axios from "axios"

const Home = () => {
  let [input, setInput] = useState({
    name: "",
    email: "",
    subject: "",
    mobile: ""
  });
  let handleInput = (e) => {
    let {name, value} = e.target;
    setInput(prev=>({
      ...prev, [name]:value
    }))
  }
  let handleSubmit = async (e) => {
    e.preventDefault()
    let api = "http://localhost:6005/user/sendmail"
    let res = await axios.post(api, input)
    console.log(res);
    alert("Email send successfully")
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          value={input.name}
          onChange={handleInput}
          className="border-2"
        />{" "}
        <br />
        <input
          type="text"
          placeholder="Enter your email"
          name="email"
          value={input.email}
          onChange={handleInput}
          className="border-2"
        />{" "}
        <br />
        <input
          type="text"
          placeholder="Enter your subject"
          name="subject"
          value={input.subject}
          onChange={handleInput}
          className="border-2"
        />{" "}
        <br />
        <input
          type="text"
          placeholder="Enter your mobile"
          name="mobile"
          value={input.mobile}
          onChange={handleInput}
          className="border-2"
        />{" "}
        <br />
        <button className="px-3 py-2 bg-blue-700 text-white font-semibold" >Send</button>
      </form>
    </div>
  );
};

export default Home;
