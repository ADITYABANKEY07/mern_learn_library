const express = require("express");
const stuController = require("../controllers/stuController");

const route = express.Router()

route.post("/save", stuController.stuSave);

module.exports = route