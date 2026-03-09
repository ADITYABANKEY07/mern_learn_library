const express = require("express");
const router = express.Router();
const { UploadProduct } = require("../controllers/proController");

router.post("/upload", UploadProduct);

module.exports = router;