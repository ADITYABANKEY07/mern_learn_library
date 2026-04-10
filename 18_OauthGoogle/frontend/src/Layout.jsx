import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Layout = () => {
  const [userdata, setUserdata] = useState({});

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:8000/login/success", {
        withCredentials: true,
      });

      setUserdata(response.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    window.open("http://localhost:8000/logout", "_self");
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <div id="wrapper">
        <div id="topmenu">
          <div id="logo">Welcome To Cybrom</div>
          <div id="rightmenu">
            <Link to="home" className="menu">
              {" "}
              Home{" "}
            </Link>

            {Object.keys(userdata).length > 0 ? (
              <>
                {userdata.displayName}
                |
                <img
                  src={userdata.image}
                  style={{ width: "30px", borderRadius: "50%" }}
                />
                |
                <a href="#" onClick={logout}>
                  {" "}
                  Logout{" "}
                </a>
              </>
            ) : (
              <>
                <Link to="login" className="menu">
                  {" "}
                  Login{" "}
                </Link>
              </>
            )}
          </div>
        </div>

        <Outlet />
      </div>
    </>
  );
};

export default Layout;
