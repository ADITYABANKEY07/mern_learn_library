import axios from "axios";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SeeReport = () => {
  let navigate = useNavigate()
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [selectedTask, setSelectedTask] = useState(null);
  const [users, setUsers] = useState([]);
  const [newUserId, setNewUserId] = useState("");

  const loadUsers = async () => {
    try {
      const api = `${import.meta.env.VITE_API_URL}/admin/adminuserdisplay`;
      const res = await axios.get(api);
      console.log("users:", res.data); // debug
      setUsers(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const loadData = async () => {
    try {
      const api = `${import.meta.env.VITE_API_URL}/admin/seereportdata`;
      const response = await axios.get(api);
      setTasks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

const handleReassign = async (userId) => {
  try {
    const taskId = selectedTask._id;

    const api = `${import.meta.env.VITE_API_URL}/admin/reassign-task?taskId=${taskId}&userId=${userId}`;

    await axios.put(api);

    loadData();
    setSelectedTask(null);

  } catch (err) {
    console.log(err);
  }
};

  useEffect(() => {
    loadData();
    loadUsers(); // ✅ ADD THIS
  }, []);

  // ✅ Filter logic
  const filteredTasks =
    filter === "all"
      ? tasks
      : tasks.filter((t) => (t.status || "Pending") === filter);

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <ToastContainer position="top-right" autoClose={3000} />
          <div className="flex justify-start mb-6">
      <button
        onClick={() => navigate("/dashboard")}
        className="flex md:hidden items-center gap-2 px-4 py-2 
        bg-gradient-to-r from-blue-600 to-blue-500 
        text-white rounded-lg shadow-md 
        hover:from-blue-700 hover:to-blue-600 
        transition-all duration-300 text-sm font-medium"
      >
        <ArrowLeft size={18} />
        <span>Go Back</span>
      </button>
    </div>
      {/* Header */}
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Task Reports</h1>

      {/* 🔥 Filter Buttons */}
      <div className="flex gap-3 mb-6 flex-wrap">
        {["all", "Pending", "Partial Completed", "Completed"].map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`px-4 py-2 rounded-lg text-sm font-medium cursor-pointer transition ${
              filter === item
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-600 hover:bg-blue-100"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* 🔥 Selected Task Table */}
      {selectedTask && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="relative w-full max-w-4xl rounded-2xl bg-white p-6 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedTask(null)}
              className="absolute right-4 top-4 text-2xl text-gray-500 hover:text-red-500 transition"
            >
              ✕
            </button>

            <h2 className="mb-6 text-center text-3xl font-bold text-blue-700">
              Reassign Task Details
            </h2>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse overflow-hidden rounded-xl">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="p-4 text-left">User</th>
                    <th className="p-4 text-left">Task</th>
                    <th className="p-4 text-center">Days</th>
                    <th className="p-4 text-center">Completed</th>
                    <th className="p-4 text-center">Status</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b align-top">
                    <td className="p-4 font-medium text-gray-800 whitespace-nowrap">
                      {selectedTask.userId?.name}
                    </td>

                    <td className="p-4 text-gray-700 leading-7">
                      {selectedTask.task}
                    </td>

                    <td className="p-4 text-center font-semibold text-blue-600">
                      {selectedTask.daysAssign}
                    </td>

                    <td className="p-4 text-center font-semibold text-blue-600">
                      {selectedTask.daysCompleted}
                    </td>

                    <td className="p-4 text-center">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                          selectedTask.status === "Completed"
                            ? "bg-green-100 text-green-700"
                            : selectedTask.status === "Partial Completed"
                              ? "bg-orange-100 text-orange-700"
                              : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {selectedTask.status || "Pending"}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Reassign Section */}
            <div className="mt-6 border-t pt-5">

<div className="flex items-center w-full gap-2">
{users
  .filter((u) => u._id == selectedTask.userId?._id)
  .map((user) => (
    <button
      key={user._id}
      onClick={() => handleReassign(user._id)}
      className="px-4 py-2 bg-blue-500 text-white rounded-lg"
    >
      Confirm Reassign
    </button>
))}
</div>
            </div>
          </div>
        </div>
      )}
      {/* 🔥 Task Cards */}
      {filteredTasks.length === 0 ? (
        <p className="text-center mt-10 text-gray-600">No tasks found</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {filteredTasks.map((task) => {
            const progress =
              task.status === "Pending" || !task.status
                ? 0
                : task.daysAssign
                  ? Math.min((task.daysCompleted / task.daysAssign) * 100, 100)
                  : 0;

            return (
              <div
                key={task._id}
                className={`bg-white rounded-xl shadow-lg p-6 ${
                  selectedTask?._id === task._id
                    ? "border-2 border-blue-600"
                    : ""
                }`}
              >
                {/* User Name */}
                <p className="text-sm text-gray-500 mb-1">
                  Assigned to:
                  <span className="font-semibold text-blue-600 ml-1">
                    {task.userId?.name || "Unknown"}
                  </span>
                </p>

                {/* Task Title */}
                <h2 className="text-lg font-semibold text-gray-800 mb-3">
                  {task.task}
                </h2>

                {/* View Button */}
                <button
                  onClick={() => {
                    setSelectedTask(task);
                    setNewUserId(task.userId?._id); // ✅ auto select current user
                  }}
                  className="mt-4 w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white py-1 rounded-lg"
                >
                  View Details
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SeeReport;
