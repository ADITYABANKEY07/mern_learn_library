const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  userId: {type: mongoose.Schema.Types.ObjectId, ref:"user"}
});

module.exports = mongoose.model("profile", profileSchema)