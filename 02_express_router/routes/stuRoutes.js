const express = require("express")
const route = express.Router()

route.get("/classes", (req, res)=>{
    res.send("<h1>Student classes</h1>")
})

route.get("/semester", (req, res)=>{
    res.send("<h1>Semester Page</h1>")
})

route.get("/fees", (req, res)=>{
    res.send("<h1>Fees page</h1>")
})

module.exports = route