const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  task: String,
  daysAssign: Number,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  status:String,
  daysCompleted: Number
});

module.exports = mongoose.model("task", taskSchema);
