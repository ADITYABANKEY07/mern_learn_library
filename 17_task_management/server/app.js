require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const adminRoute = require("./route/adminRoute");
const userRoute = require("./route/userRoute");

const PORT = process.env.PORT;

// ✅ ROOT
app.get("/", (req, res) => {
  res.send("Server running ✅");
});

// ✅ CORS
app.use(
  cors({
    origin: "https://task-manager-app-woad-ten.vercel.app",
    credentials: true,
  })
);

// ✅ BODY
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ ROUTES
app.use("/admin", adminRoute);
app.use("/user", userRoute);

// ✅ DB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB ERROR:", err));

// ✅ SERVER (FIXED)
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});