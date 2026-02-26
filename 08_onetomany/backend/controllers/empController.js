const authorModel = require("../model/authorModel");
const bookModel = require("../model/bookModel");

const homePage = (req, res) => {
  res.send("Welcome to Home page");
};
const empInsert = async (req, res) => {
  let { authorname, email, bookname, price } = req.body;
  let author = await authorModel.create({
    authorname: authorname,
    email: email,
  });
  let book = await bookModel.create({
    bookname: bookname,
    price: price
  });
  await authorModel.findByIdAndUpdate(author._id,{$push:{books:book._id}})
  res.send("author data inserted")
};
const empDisplay = async (req, res) => {
  let author = await authorModel.find().populate("books");
  res.send(author);
};

const addBook = async (req, res) => {
  const {id, bookname, price} = req.body
  const book = await bookModel.create({
    bookname:bookname,
    price:price
  })
  await authorModel.findByIdAndUpdate(id, {
    $push:{books: book._id}
  })
  console.log(book)
}

module.exports = {
  homePage,
  empInsert,
  empDisplay,
  addBook
};
