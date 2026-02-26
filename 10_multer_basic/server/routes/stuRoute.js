const express = require("express")
const route = express.Router()
const stuController = require("../controllers/stuController")
const multer = require("multer")

// Create a storage strategy for multer
const storage = multer.diskStorage({
 destination: function (req, file, cb) {
 // Specify the upload directory
 cb(null, 'uploads/');
 },
 filename: function (req, file, cb) {
 // Define the file name format
 cb(null, file.originalname);
 }
});
// Create a multer instance with the storage strategy
const upload = multer({ storage: storage });

route.post("/upload", upload.single("myimage"), stuController.UploadImage)

module.exports = route