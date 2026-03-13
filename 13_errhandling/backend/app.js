const express = require("express")
const app = express()
const cors = require("cors")
const bodyparser = require('body-parser')
const mongoose = require("mongoose")

app.use(cors())
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use("/home", (req,res)=>{
    let err = new Error("Something went wrong")
    console.log("Home Page error")
    // throw new Error("Sync error");
    res.status(500).send(err)
     
})

app.use("/about", (req,res)=>{
    res.status(200).send("Okk")
     
})

// Global error handling function

app.use((err, req, res, next)=>{
    console.log("Error in system")
})

app.listen(8000, ()=>{
    console.log("Server running on 8000 port!!!");
})