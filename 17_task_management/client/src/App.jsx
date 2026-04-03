import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Dashboard from "./Dashboard";
import Overview from "./admin/Overview";
import CreateUser from "./admin/CreateUser";
import UserDetails from "./admin/UserDetails";
import SeeReport from "./admin/SeeReport";
import AssignTask from "./admin/AssignTask";
import UserDashboard from "./UserDashboard";
import UserTask from "./userpages/UserTask";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="/userdashboard" element={<UserDashboard />}>
          <Route index element={<UserTask />} />
          <Route path="usertask" element={<UserTask />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Overview />} />
          <Route path="overview" element={<Overview />} />
          <Route path="createuser" element={<CreateUser />} />
          <Route path="userdetails" element={<UserDetails />} />
          <Route path="assigntask" element={<AssignTask />} />
          <Route path="seereport" element={<SeeReport />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
