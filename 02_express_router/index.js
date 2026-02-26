const express = require("express")
const app = express()
const stuRoutes = require("./routes/stuRoutes")

app.use("/students", stuRoutes)

app.listen(8000, ()=>{
    console.log("Server running on 8000 server");
    
})