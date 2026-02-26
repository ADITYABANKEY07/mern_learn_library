const express = require("express")
const app = express()

app.get("/", (req, res)=>{
    res.send("<h1>Welcome to Page</h1>")
})

app.get("/home", (req, res)=>{
    res.send("<h1>Welcome to Home Page</h1>")
})

app.get("/about", (req, res)=>{
    res.send("<h1>Welcome to About Page</h1>")
})

app.get("/contact", (req, res)=>{
    res.send("<h1>Welcome to Contact Page</h1>")
})

app.listen(4000, ()=>{
    console.log("4000 is server is running");
    
})