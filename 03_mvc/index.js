// const express = require("express")
// const app = express()

// const teacherRoutes = require("./routes/teacherRoutes")

// app.use("/teachers", teacherRoutes)

// app.listen(4000, ()=>{
//     console.log("Server running on 4000");
// })

// EJS Program

const express = require("express")
const app= express()
const ejs = require("ejs")
app.set("view engine", "ejs")
const stuRoutes = require("./routes/stuRoutes")
const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/hellodb").then(()=>{
    console.log("Db successfully connected");
})

app.use("/", stuRoutes)

app.listen(3001, ()=>{
    console.log("Server running on 3001");
})
