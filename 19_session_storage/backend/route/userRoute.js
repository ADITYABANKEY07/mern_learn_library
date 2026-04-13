const express = require("express")
const route = express.Router()
const userController = require("../controller/userController")

route.post("/signup", userController.SignUpPage)
route.post("/login", userController.LoginPage)
route.get("/createsession", userController.CreatePage)
route.get("/displaysession", userController.DisplayPage)
route.get("/homegetuser", userController.HomeDisplayPage)

module.exports = route