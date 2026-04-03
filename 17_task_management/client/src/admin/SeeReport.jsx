import axios from "axios";
import { useEffect, useState } from "react";

const SeeReport = () => {
  const [tasks, setTasks] = useState([]);

  const loadData = async () => {
    try {
      const api = `${import.meta.env.VITE_API_URL}/admin/seereportdata`;
      const response = await axios.get(api);

      console.log(response.data);

      setTasks(response.data); // ✅ store all
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Task Reports</h1>

      {/* Loading */}
      {tasks.length === 0 ? (
        <p className="text-center mt-10 text-gray-600">No data found</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {tasks.map((task) => {
            const progress =
              task.status === "Pending" || !task.status
                ? 0
                : task.daysAssign
                  ? Math.min((task.daysCompleted / task.daysAssign) * 100, 100)
                  : 0;

            return (
              <div key={task._id} className="bg-white rounded-xl shadow-lg p-6">
                {/* Task Title */}
                <h2 className="text-lg font-semibold text-gray-800 mb-3">
                  {task.task}
                </h2>

                {/* Info */}
                <div className="flex justify-between mb-3">
                  <p className="text-sm text-gray-500">
                    Days:{" "}
                    <span className="font-bold text-blue-600">
                      {task.daysAssign}
                    </span>
                  </p>

                  <p className="text-sm text-gray-500">
                    Completed:{" "}
                    <span className="font-bold text-blue-600">
                      {task.daysCompleted}
                    </span>
                  </p>
                </div>

                {/* Status */}
                <div className="mb-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      task.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : task.status === "Partial Completed"
                          ? "bg-orange-100 text-orange-700"
                          : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {task.status || "Pending"}
                  </span>
                </div>

                {/* Progress */}
                <div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>

                  <p className="text-right text-xs text-gray-500 mt-1">
                    {Math.round(progress)}%
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SeeReport;
