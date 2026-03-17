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
  const user = await userModel.findOne({ email: email });
  if (!user) {
    res.status(400).send({ msg: "Invalid Email" });
  } else if (user.password != password) {
    res.status(400).send({ msg: "Invalid Password" });
  } else {
    res.status(200).send({ user:user, msg: "User login successfully", status: 200 });
  }
};

module.exports = {
  SignUpPage,
  LoginPage,
};
