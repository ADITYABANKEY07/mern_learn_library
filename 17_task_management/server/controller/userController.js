const userModel = require("../models/userModel");
const taskModel = require("../models/taskModel");
const randomPass = require("../middleware/randomPassword");
const nodemailer = require("nodemailer");

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

const ForgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).send({ msg: "User not found" });
    }

    // 🔥 generate new password
    const newPass = randomPass.randomPassword();

    user.password = newPass;
    await user.save();

    // 📩 Transporter
    let mailTransporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NODE_MAIL,
        pass: process.env.NODE_PASS,
      },
    });

    // 📩 Mail content (UPDATED UI)
    let mailDetails = {
      from: `"Task Manager Support" <${process.env.NODE_MAIL}>`,
      to: email,
      subject: "Password Reset Successful 🔐",
      html: `
      <div style="background:#f3f4f6;padding:20px;border-radius:10px;">
        <h2>Password Reset Request ✅</h2>

        <p>Hello <b>${user.name}</b>,</p>

        <p>Your password has been successfully reset.</p>

        <p><b>Email:</b> ${email}</p>
        <p><b>New Password:</b> ${newPass}</p>

        <br/>

        <p>Please login using this password and change it immediately for security reasons.</p>

        <br/>

        <p style="color:gray;">If you did not request this, please contact admin.</p>
         </div>
      `,
    };

    // 📩 Send Mail
    await mailTransporter.sendMail(mailDetails);

    res.status(200).send({
      msg: "New password sent to email successfully ✅",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "Error resetting password ❌" });
  }
};

module.exports = {
  Login,
  getUserData,
  sendReportData,
  ForgotPassword,
};
