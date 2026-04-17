import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get("http://localhost:6005/user/display", {
          withCredentials: true,
        });
        setLoading(false); // user is logged in
      } catch (error) {
        navigate("/login"); // not logged in
      }
    };

    checkAuth();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return children;
};

export default ProtectedRoute;