const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  bookname: String,
  price: Number,
  authorId: {type: mongoose.Schema.Types.ObjectId, ref:"author"}
});

module.exports = mongoose.model("book", bookSchema)