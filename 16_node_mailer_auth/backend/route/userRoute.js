const express = require("express")
const route = express.Router()
const userController = require("../controller/userController")

route.post("/sendmail", userController.SendMail)

module.exports = route