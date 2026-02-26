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
    bookname:bookname,
    price:price,
    authorId:author._id
  })

  
  await authorModel.findByIdAndUpdate(author._id, {$push:{books: book._id}})
  res.send("Data inserted successfully")
};



const empDisplay = async (req, res) => {
  let author = await authorModel.find().populate("books");
  res.send(author);
};
const bookByDisplay = async (req, res) => {
  let book = await bookModel.find().populate("authorId");
  res.send(book);
};

const addbook = async (req, res) => {
  const {id, bookname, price} = req.body
    let book = await bookModel.create({
    bookname:bookname,
    price:price,
    authorId:id
  });
  await authorModel.findByIdAndUpdate(id, {
    $push:{
      books: book._id
    }
  })
  console.log(book)
}

module.exports = {
  homePage,
  empInsert,
  empDisplay,
  addbook,
  bookByDisplay
};
