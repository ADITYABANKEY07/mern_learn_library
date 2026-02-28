const express = require("express")
const route = express.Router()
const stuController = require("../controllers/stuController")


route.post("/upload", stuController.UploadImage)
route.get("/display", stuController.DisplayImage)

module.exports = route