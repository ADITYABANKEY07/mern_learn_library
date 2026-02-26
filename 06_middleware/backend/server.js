const express = require("express")
const app = express()

app.use((req, res, next)=>{
    console.log("App Level MiddleWare First");
     next()
})

// app.use((err, req, res, next) => {
//   console.log(err.message);
//   res.status(500).send("Something went wrong");
//   next()
// });

app.get("/home", (req, res)=> {
    console.log("Welcome to Home page")
    res.send("Response to Home Page")
})
app.get("/about", (req, res)=> {
    console.log("Welcome to About page")
    res.send("Response to About Page")
})

app.listen(3001, ()=>{
    console.log("Server running on 3001");
})