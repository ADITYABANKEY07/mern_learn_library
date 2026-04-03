require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const adminRoute = require("./route/adminRoute");
const userRoute = require("./route/userRoute");

const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/admin", adminRoute)
app.use("/user", userRoute)

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("Db connected successfully!!!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
