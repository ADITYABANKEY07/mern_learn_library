require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const userRoute = require("./route/userRoute");

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    key: "addyId",
    secret: "adi123", // Used to sign the session ID cookie
    resave: false, // Prevents resaving session if nothing changed
    saveUninitialized: true, // Recommended: false for login sessions
    cookie: {
      secure: false, // Set to true if using HTTPS
      maxAge: 1000 * 60 * 60, // 1 hours
    },
  }),
);
app.use("/user", userRoute);

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("Db connected successfully!!!");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
