const express = require("express")
const app = express()
const cors = require("cors")
const bodyparser = require('body-parser')
const stuRoute = require("./routes/stuRoute")
const mongoose = require("mongoose")

app.use(cors())
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/merndb").then(()=>{
    console.log("Database connected successfully");
})

app.use("/students", stuRoute)

app.listen(8000, ()=>{
    console.log("Server running on 8000 port!!!");
})