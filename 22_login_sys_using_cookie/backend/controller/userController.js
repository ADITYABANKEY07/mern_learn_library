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
    res.cookie("userId", user._id, {
      httpOnly: true,
      maxAge: 60 * 1000,
    });
    res.cookie("email", user.email, {
      httpOnly: true,
      maxAge: 60 * 1000,
    });
    res.cookie("password", user.password, {
      httpOnly: true,
      maxAge: 60 * 1000,
    });
    return res
      .status(200)
      .send({ user: user, msg: "User login successfully", status: 200 });
  }
};

const DisplayPage = async (req, res) => {
  try {
    const { userId } = req.cookies;

    if (!userId) {
      return res.status(401).send({ msg: "Not logged in" });
    }

    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).send({ msg: "User not found" });
    }

    res.status(200).send({ user });
  } catch (error) {
    console.log("DISPLAY ERROR:", error);
    res.status(500).send({ msg: error.message });
  }
};
const LogoutPage = async (req, res) => {
  res.clearCookie("email");
  res.clearCookie("password");
  res.clearCookie("userId");
  res.status(200).send({ status: 200, msg: "Logout successfully" });
};

module.exports = {
  SignUpPage,
  LoginPage,
  DisplayPage,
  LogoutPage,
};
