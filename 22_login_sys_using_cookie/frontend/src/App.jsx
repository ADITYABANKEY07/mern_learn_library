import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./Dashboard";
import Product from "./admin/Product";
import Services from "./admin/Services";
import Home from "./admin/Home";
import ProtectedRoute from "./ProtectedRoute";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="services" element={<Services />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
