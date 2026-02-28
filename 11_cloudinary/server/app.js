const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const mongoose = require("mongoose")
const stuRoute = require("./routes/stuRoute")

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use("/student", stuRoute)

mongoose.connect("mongodb://localhost:27017/clouddbprac").then(()=>{
    console.log("Db connected successfully");
})


app.listen(8003, ()=>{
    console.log("Server run on 8003");
})