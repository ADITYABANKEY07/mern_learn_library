import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Dashboard from "./Dashboard";
import Product from "./admin/Product";
import Services from "./admin/Services";
import Overview from "./admin/Overview";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Overview />} />
          <Route path="overview" element={<Overview />} />
          <Route path="product" element={<Product />} />
          <Route path="services" element={<Services />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
