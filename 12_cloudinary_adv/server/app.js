const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const mongoose = require("mongoose")
const productRoute = require("./routes/proRoute");

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use("/product", productRoute);

mongoose.connect("mongodb://localhost:27017/clouddbpracadv").then(()=>{
    console.log("Db connected successfully");
})


app.listen(8003, ()=>{
    console.log("Server run on 8003");
})