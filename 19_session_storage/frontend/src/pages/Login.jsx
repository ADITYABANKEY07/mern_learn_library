import { useState } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;

import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:6001/user/login",
        input,
        { withCredentials: true }
      );

      if (res.data.status === 200) {
        navigate("/home");
      }
    } catch (error) {
      alert(error.response.data.msg);
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={input.email}
          onChange={handleInput}
          className="border-2"
        /> <br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={input.password}
          onChange={handleInput}
          className="border-2"
        /> <br />

        <button type="submit" className="px-3 py-2 bg-pink-500 text-white" >Login</button>
      </form>
    </div>
  );
};

export default Login;