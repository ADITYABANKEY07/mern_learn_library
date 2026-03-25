const AdminModel = require("../models/adminModel");

const Login = async (req, res) => {
  const { email, password } = req.body;
  const admin = await AdminModel.findOne({ email: email });
  if(!admin){
    return res.status(400).send({msg: "Invalid Email"})
  }
  if(admin.password!=password){
    return res.status(400).send({msg: "Invalid Password"})
  }
  res.send({ admin, msg: "Admin Login Successfully" });
};

module.exports = {
  Login,
};
