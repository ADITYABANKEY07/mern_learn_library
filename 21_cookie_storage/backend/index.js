require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const userRoute = require("./route/userRoute")
const cookieParser = require("cookie-parser")

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use("/user", userRoute)

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Db connected successfully!!!");
})

app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port ${process.env.PORT}`);
})