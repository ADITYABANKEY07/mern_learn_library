import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:6001/user/homegetuser", {
        withCredentials: true,
      })
      .then((res) => {
        console.log("API DATA:", res.data); // debug
        setUser(res.data); // ✅ SAVE DATA
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Home Page</h1>

      <h2>Name: {user.name}</h2>
      <h2>Email: {user.email}</h2>
    </div>
  );
};

export default Home;