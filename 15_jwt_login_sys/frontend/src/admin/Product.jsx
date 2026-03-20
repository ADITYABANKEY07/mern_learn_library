import { useEffect } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Product = () => {
  let navigate = useNavigate()
  const userAuthentication = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      let api = "http://localhost:6001/user/userauth";
      const response = await axios.post(api, null, { headers: { "mytoken": token } });
      localStorage.setItem("name", response.data.user.name)
      localStorage.setItem("email", response.data.user.email)
      navigate("/dashboard")
      console.log(response);
    }
  };
  useEffect(() => {
    userAuthentication();
  }, []);
  return <div>Welcome to Product Page</div>;
};

export default Product;