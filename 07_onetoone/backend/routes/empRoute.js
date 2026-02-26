const express = require("express")
const route = express.Router()
const empController = require("../controllers/empController")

route.post("/insert", empController.empInsert)
route.get("/display", empController.empDisplay)

module.exports = route