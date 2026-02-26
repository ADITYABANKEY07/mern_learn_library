const express = require("express")
const app = express()
const empRoute = require("./routes/empRoute")
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

mongoose.connect("mongodb://127.0.0.1:27017/mnydb").then(()=>{
    console.log("Db connected successfully");
})

app.use("/employee", empRoute)

app.listen(6001, ()=>{
    console.log("Server running on 6001 port");
})