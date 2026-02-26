const express = require("express")
const route = express.Router()
const teacherController = require("../controllers/teacherController.js")

route.get("/home", teacherController.homePage)
route.get("/dept", teacherController.deptPage)
route.get("/info", teacherController.infoPage)
route.get("/salary", teacherController.salaryPage)

module.exports = route