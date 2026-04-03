const express = require("express")
const route = express.Router()
const adminController = require("../controller/adminController")

route.post("/login", adminController.Login)
route.post("/createuser", adminController.CreateUser)
route.get("/adminuserdisplay", adminController.AdminUserDisplay)
route.get("/admineditdisplay", adminController.AdminUserEditFormDisplay)
route.get("/adminuserdelete", adminController.AdminUserFormDelete)
route.post("/adminuseredit", adminController.AdminUserEdit)
route.post("/assigntask", adminController.AssignTask)
route.get("/overviewtask", adminController.OverviewTaskAdmin)
route.get("/seereportdata", adminController.AdminSeeReport)

module.exports = route