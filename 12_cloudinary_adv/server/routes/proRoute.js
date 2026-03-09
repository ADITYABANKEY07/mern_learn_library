const express = require("express");
const router = express.Router();
const proController = require("../controllers/proController");

router.post("/upload", proController.UploadProduct);
router.get("/display", proController.DisplayProduct);

module.exports = router;