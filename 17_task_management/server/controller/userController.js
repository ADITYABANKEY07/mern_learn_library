const userModel = require("../models/userModel");
const taskModel = require("../models/taskModel");

const Login = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email: email });
  if (!user) {
    return res.status(400).send({ msg: "Invalid Email" });
  }
  if (user.password != password) {
    return res.status(400).send({ msg: "Invalid Password" });
  }
  res.send({ user, msg: "User Login Successfully" });
};

const getUserData = async (req, res) => {
  let { id } = req.query;
  let user = await userModel.findById(id);
  let tasks = await taskModel.find({ userId: id });
  res.status(200).send({
    user: user,
    tasks: tasks,
  });
};
const sendReportData = async (req, res) => {
  const { taskId, status, daysCompleted } = req.body;

  try {
    const updatedTask = await taskModel.findByIdAndUpdate(
      taskId,
      {
        status: status,
        daysCompleted: daysCompleted,
      },
      { new: true }, // ✅ return updated document
    );

    if (!updatedTask) {
      return res.status(404).send({ msg: "Task not found ❌" });
    }

    res.send({
      msg: "Task Updated Successfully ✅",
      task: updatedTask,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Server Error ❌" });
  }
};

module.exports = {
  Login,
  getUserData,
  sendReportData,
};
