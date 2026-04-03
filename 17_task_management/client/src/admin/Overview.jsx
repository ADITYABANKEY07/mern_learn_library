import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Users, PlusCircle, ClipboardList } from "lucide-react";
import axios from "axios";

const Overview = () => {
  const adminName = localStorage.getItem("admin");

  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [users, setUsers] = useState([]);

  // 🔥 Fetch tasks
  const loadTasks = async () => {
    try {
      let api = `${import.meta.env.VITE_API_URL}/admin/overviewtask`;
      let res = await axios.get(api);
      setTasks(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const loadUsers = async () => {
  try {
    let api = `${import.meta.env.VITE_API_URL}/admin/adminuserdisplay`;
    let res = await axios.get(api);
    setUsers(res.data);
  } catch (err) {
    console.log(err);
  }
};

  useEffect(() => {
    loadTasks();
    loadUsers();
  }, []);

  // ✅ Stats calculation (based on your DB values)
  const stats = {
    total: tasks.length,
    pending: tasks.filter((t) => !t.status || t.status === "Pending").length,
    partial: tasks.filter((t) => t.status === "Partial Completed").length,
    completed: tasks.filter((t) => t.status === "Completed").length,
  };

  // Total Employees

  const totalEmployees = users.length;

  const getCount = () => {
    return stats[filter] || stats.total;
  };

  const cards = [
    {
      title: "Create User",
      link: "/dashboard/createuser",
      icon: <PlusCircle size={28} />,
      color: "hover:border-blue-400",
    },
    {
      title: "Assign Task",
      link: "/dashboard/assigntask",
      icon: <ClipboardList size={28} />,
      color: "hover:border-blue-300",
    },
    {
      title: "User Details",
      link: "/dashboard/userdetails",
      icon: <Users size={28} />,
      color: "hover:border-blue-500",
    },
  ];

  return (
<div className="min-h-screen bg-blue-50 p-6">

  {/* Header */}
  <div className="mb-10">
    <h1 className="text-4xl font-bold text-blue-900">
      Welcome, <span className="text-blue-600">{adminName}</span>
    </h1>
    <p className="text-blue-600 mt-2">
      Manage your users and tasks efficiently
    </p>
  </div>

  {/* 🔥 Top Cards (Employees + Total Tasks) */}
  <div className="grid md:grid-cols-2 gap-6 mb-8">
    
    {/* Employees Card */}
    <div className="bg-white shadow-lg rounded-xl p-6 flex items-center justify-between">
      <div>
        <p className="text-gray-500 text-sm">Total Employees</p>
        <h2 className="text-3xl font-bold text-blue-600">
          {totalEmployees}
        </h2>
      </div>

      <div className="bg-blue-100 p-4 rounded-full text-blue-600">
        <Users size={28} />
      </div>
    </div>

    {/* Total Tasks Card */}
    <div className="bg-white shadow-lg rounded-xl p-6 flex items-center justify-between">
      <div>
        <p className="text-gray-500 text-sm">Total Tasks</p>
        <h2 className="text-3xl font-bold text-blue-600">
          {stats.total}
        </h2>
      </div>

      <div className="bg-blue-100 p-4 rounded-full text-blue-600">
        <ClipboardList size={28} />
      </div>
    </div>

  </div>

  {/* 🔥 Task Overview Card */}
  <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
    
    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
      <h2 className="text-xl font-semibold text-gray-800">
        Task Overview
      </h2>

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="all">All Tasks</option>
        <option value="pending">Pending</option>
        <option value="partial">Partial Completed</option>
        <option value="completed">Completed</option>
      </select>
    </div>

    {/* Count */}
    <div className="mt-6 text-center">
      <h1 className="text-5xl font-bold text-blue-600">
        {getCount()}
      </h1>
      <p className="text-gray-600 mt-2 capitalize">
        {filter === "all" ? "Total Tasks" : `${filter} tasks`}
      </p>
    </div>

    {/* Mini Stats */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
      <div className="bg-blue-100 p-4 rounded-xl text-center">
        <p className="text-sm text-blue-900">Total</p>
        <h2 className="text-xl font-bold">{stats.total}</h2>
      </div>

      <div className="bg-yellow-100 p-4 rounded-xl text-center">
        <p className="text-sm text-yellow-800">Pending</p>
        <h2 className="text-xl font-bold">{stats.pending}</h2>
      </div>

      <div className="bg-orange-100 p-4 rounded-xl text-center">
        <p className="text-sm text-orange-800">Partial</p>
        <h2 className="text-xl font-bold">{stats.partial}</h2>
      </div>

      <div className="bg-green-100 p-4 rounded-xl text-center">
        <p className="text-sm text-green-800">Completed</p>
        <h2 className="text-xl font-bold">{stats.completed}</h2>
      </div>
    </div>

  </div>

  {/* Action Cards */}
  <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
    {cards.map((card, index) => (
      <Link to={card.link} key={index}>
        <div
          className={`bg-white rounded-xl p-6 
          shadow-lg border-2 border-transparent 
          transition-all duration-300 cursor-pointer 
          hover:shadow-xl hover:-translate-y-1 ${card.color}`}
        >
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <div className="text-blue-600">{card.icon}</div>
            <h2 className="text-xl font-semibold text-gray-800">
              {card.title}
            </h2>
          </div>
        </div>
      </Link>
    ))}
  </div>

</div>
  );
};

export default Overview;
