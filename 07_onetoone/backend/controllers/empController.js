const userModel = require("../model/userModel");
const profileModel = require("../model/profileModel");

const homePage = (req, res) => {
  res.send("Welcome to Home page");
};
const empInsert = async (req, res) => {
  let { username, email, fname, lname } = req.body;
  let user = await userModel.create({
    username: username,
    email: email,
  });
  let profile = await profileModel.create({
    firstname: fname,
    lastname: lname,
    userId: user._id
  });
  res.send("User data inserted successfully");
};
const empDisplay = async (req, res) => {
  let user = await profileModel.find().populate("userId");
  res.send(user);
};

module.exports = {
  homePage,
  empInsert,
  empDisplay,
};
