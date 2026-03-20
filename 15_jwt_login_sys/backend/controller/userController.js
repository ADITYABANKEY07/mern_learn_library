const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SignUpPage = async (req, res) => {
  const { name, email, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const newPassword = await bcrypt.hash(password, salt);
  const user = await userModel.create({
    name: name,
    email: email,
    password: newPassword,
  });
  res.status(200).send({ msg: "User signup successfully 🎉", status: 200 });
};

const LoginPage = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email: email });
    if (!user) {
      return res.status(400).send({ msg: "Invalid Email" });
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).send({ msg: "Invalid Password" });
    }
    const token = await jwt.sign({ id: user._id }, "addy123", {
      expiresIn: "30 days",
    });
    res.status(200).send({
      user: user,
      token: token,
      msg: "User login successfully",
      status: 200,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Server Error" });
  }
};

const UserAuth = async (req, res) => {
  try {
    const token = req.header("mytoken");

    if (!token) {
      return res.status(401).send({ msg: "Token missing" });
    }

    const verified = jwt.verify(token, "addy123");
    const user = await userModel.findById(verified.id);
    console.log(user);
    console.log(verified);
    res.status(200).send({user});
  } catch (error) {
    console.log(error);
    res.status(401).send({ msg: "Invalid Token" });
  }
};

module.exports = {
  SignUpPage,
  LoginPage,
  UserAuth,
};
