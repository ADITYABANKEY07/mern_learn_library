const userModel = require("../models/userModel");

const SignUpPage = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await userModel.create({
    name: name,
    email: email,
    password: password,
  });
  res.status(200).send({ msg: "User signup successfully 🎉", status: 200 });
};

const LoginPage = async (req, res) => {
  const { email, password } = req.body;

  // 🔥 use DB instead of dummy
  const user = await userModel.findOne({ email });

  if (!user) {
    return res.status(400).json({ msg: "Invalid Email" });
  }

  if (user.password !== password) {
    return res.status(400).json({ msg: "Invalid Password" });
  }

  // ✅ SAVE SESSION
  req.session.name = user.name;
  req.session.email = user.email;

  req.session.save(() => {
    console.log("SESSION SAVED:", req.session);

    res.send({
      status: 200,
      msg: "Login successful",
      user: user,
    });
  });
};

const CreatePage = async (req, res) => {
  req.session.name = "Aditya Bankey";
  res.send("Session created successfully!!!");
};
const DisplayPage = async (req, res) => {
  const myname = req.session.name;
  res.send(`Display session name ${myname}`);
};

const HomeDisplayPage = async (req, res) => {
  console.log("SESSION IN HOME:", req.session);

  res.send({
    name: req.session.name,
    email: req.session.email,
  });
};

module.exports = {
  SignUpPage,
  LoginPage,
  CreatePage,
  DisplayPage,
  HomeDisplayPage,
};
