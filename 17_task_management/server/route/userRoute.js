const express = require("express")
const route = express.Router()
const userController = require("../controller/userController")

route.post("/login", userController.Login)
route.get("/getuserdata", userController.getUserData)
route.post("/sendreport", userController.sendReportData)
route.post("/forgot-password", userController.ForgotPassword)

module.exports = route