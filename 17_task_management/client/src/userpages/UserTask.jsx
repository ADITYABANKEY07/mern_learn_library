import React, { useEffect, useState } from "react";
import axios from "axios";

const UserTask = () => {
  const [mydata, setMyData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskId, setTaskId] = useState(null);

  // ✅ FIX: input state
  const [input, setInput] = useState({
    status: "Pending",
    daysCompleted: "",
  });

  const userId = localStorage.getItem("userId");

  const loadData = async () => {
    try {
      let api = `${import.meta.env.VITE_API_URL}/user/getuserdata?id=${userId}`;
      let res = await axios.get(api);

      setMyData(res.data.tasks);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // ✅ FIX: handleInput
  const handleInput = (e) => {
    let { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ Open Modal
  const openModal = (id) => {
    setTaskId(id);
    setIsModalOpen(true);
  };

  // ✅ Submit (UPDATE TASK)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let api = `${import.meta.env.VITE_API_URL}/user/sendreport`;

      await axios.post(api, {
        taskId: taskId,
        status: input.status,
        daysCompleted: input.daysCompleted,
      });

      alert("Task Updated ✅");

      setIsModalOpen(false);
      setInput({
        status: "Pending",
        daysCompleted: "",
      });

      loadData(); // 🔥 refresh
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-6 bg-blue-50 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-blue-900">My Tasks Dashboard</h1>

        <p className="text-gray-600 mt-1">
          Logged in as:
          <span className="text-blue-600 font-semibold ml-1">
            {localStorage.getItem("userEmail")}
          </span>
        </p>
      </div>

      {/* Table Card */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        {loading ? (
          <p className="text-center py-6">Loading...</p>
        ) : mydata.length > 0 ? (
          <table className="w-full">
            <thead>
              <tr className="bg-blue-600 text-white text-left">
                <th className="p-3">#</th>
                <th className="p-3">Task</th>
                <th className="p-3">No. Of Days Completed</th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {mydata.map((item, index) => (
                <tr
                  key={item._id}
                  className="border-b hover:bg-blue-50 transition"
                >
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">{item.task}</td>

                  {/* Days Completed */}
                  <td className="p-3">{item.daysCompleted || "Not completed"}</td>

                  {/* Action */}
                  <td className="p-3 text-center">
                    <button
                      onClick={() => openModal(item._id)}
                      className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white px-4 py-1 rounded-lg transition"
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center py-6">No tasks found</p>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-6 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-500 text-lg"
            >
              ✖
            </button>

            <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">
              Update Task
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Status */}
              <select
                name="status"
                value={input.status}
                onChange={handleInput}
                className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-400"
              >
                <option value="Pending">Pending</option>
                <option value="Partial Completed">Partial Completed</option>
                <option value="Completed">Completed</option>
              </select>

              {/* Days Completed */}
              <input
                type="number"
                name="daysCompleted"
                value={input.daysCompleted}
                onChange={handleInput}
                placeholder="Enter days completed"
                className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-400"
                required
              />

              <div className="flex gap-3">
                <button className="w-full bg-blue-600 cursor-pointer hover:bg-blue-700 text-white py-2 rounded-lg transition">
                  Submit
                </button>

                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="w-full bg-gray-400 cursor-pointer hover:bg-gray-500 text-white py-2 rounded-lg transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserTask;
