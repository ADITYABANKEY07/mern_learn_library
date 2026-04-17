const express = require("express")
const route = express.Router()
const userController = require("../controller/userController")

route.get("/setcookie", userController.SetCookiePage)
route.get("/getcookie", userController.GetCookiePage)
route.get("/delcookie", userController.DelCookiePage)

module.exports = route