require("dotenv").config()
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

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Db connected successfully");
})


app.listen(process.env.PORT, ()=>{
    console.log(`Server run on ${process.env.PORT}`);
})