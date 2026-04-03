const AdminModel = require("../models/adminModel");
const UserModel = require("../models/userModel");
const TaskModel = require("../models/taskModel");
const RandomPass = require("../middleware/randomPassword");
const userModel = require("../models/userModel");
const nodemailer = require("nodemailer");

const Login = async (req, res) => {
  const { email, password } = req.body;
  const admin = await AdminModel.findOne({ email: email });
  if (!admin) {
    return res.status(400).send({ msg: "Invalid Email" });
  }
  if (admin.password != password) {
    return res.status(400).send({ msg: "Invalid Password" });
  }
  res.send({ admin, msg: "Admin Login Successfully" });
};

const CreateUser = async (req, res) => {
  try {
    let { name, email, post } = req.body;

    // Generate password
    let userPassword = RandomPass.randomPassword();

    // Save user
    await userModel.create({
      name,
      email,
      post,
      password: userPassword,
    });

    // Transporter
    let mailTransporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NODE_MAIL,
        pass: process.env.NODE_PASS, // App password (NOT your Gmail password)
      },
    });

    // Mail content
    let mailDetails = {
      from: `"Admin Panel" <${process.env.NODE_MAIL}>`,
      to: email,
      subject: "Your Account Credentials",
      html: `
        <h2>User Account Created ✅</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Role:</b> ${post}</p>
        <p><b>Password:</b> ${userPassword}</p>
        <br/>
        <p>Please login and change your password.</p>
      `,
    };

    // Send Mail
    await mailTransporter.sendMail(mailDetails);

    res.status(200).send({
      msg: "User created & email sent successfully ✅",
    });
  } catch (error) {
    console.log(error);

    res.status(500).send({
      msg: "Something went wrong ❌",
    });
  }
};

const AdminUserDisplay = async (req, res) => {
  let admin = await UserModel.find();
  res.send(admin);
};
const OverviewTaskAdmin = async (req, res) => {
  let task = await TaskModel.find();
  res.send(task);
};

const AdminUserEditFormDisplay = async (req, res) => {
  let { id } = req.query;
  let admin = await UserModel.findById(id);
  res.send(admin);
};
const AdminUserFormDelete = async (req, res) => {
  let { id } = req.query;
  let admin = await UserModel.findByIdAndDelete(id);
  res.send("User deleted successfully");
};

const AdminUserEdit = async (req, res) => {
  let { _id, name, email, post } = req.body;
  let admin = await UserModel.findByIdAndUpdate(_id, {
    name: name,
    email: email,
    post: post,
  });
  res.send("User details edited successfully");
};
const AssignTask = async (req, res) => {
  const { task, daysAssign, userId } = req.body;
  let admin = await TaskModel.create({
    task: task,
    daysAssign: daysAssign,
    userId: userId,
  });
  res.send("User assign task successfully");
};

const AdminSeeReport = async (req, res) => {
  const report = await TaskModel.find().populate("userId");
  res.send(report);
};

module.exports = {
  Login,
  CreateUser,
  AdminUserDisplay,
  AdminUserEditFormDisplay,
  AdminUserFormDelete,
  AdminUserEdit,
  AssignTask,
  OverviewTaskAdmin,
  AdminSeeReport,
};
