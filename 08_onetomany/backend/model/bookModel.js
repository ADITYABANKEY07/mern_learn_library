const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  bookname: String,
  price: Number,
});

module.exports = mongoose.model("book", bookSchema)