import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./Dashboard";
import Product from "./admin/Product";
import Services from "./admin/Services";
import DashHome from "./admin/DashHome";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<DashHome />} />
          <Route path="dashhome" element={<DashHome />} />
          <Route path="product" element={<Product />} />
          <Route path="services" element={<Services />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
