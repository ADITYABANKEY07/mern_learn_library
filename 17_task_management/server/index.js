require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const userRoute = require("./route/userRoute")

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
// app.use("/user", userRoute)

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Db connected successfully!!!");
})

app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port ${process.env.PORT}`);
})