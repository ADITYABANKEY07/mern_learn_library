const express = require("express")
const route = express.Router()
const empController = require("../controllers/empController")

route.get("/home", empController.homePage)
route.post("/insert", empController.empInsert)
route.get("/display", empController.empDisplay)
route.get("/update", empController.empUpdate)
route.get("/recorddel", empController.empRecDel)
route.get("/getrec", empController.empGetRec)
route.get("/empedit", empController.empEditRec)
route.post("/editedDataRec", empController.empEditedData)
route.get("/empsearch", empController.empSearchData)

module.exports = route