const express = require("express")
const route = express.Router()
const userController = require("../controller/userController")

route.post("/signup", userController.SignUpPage)
route.post("/login", userController.LoginPage)

module.exports = route