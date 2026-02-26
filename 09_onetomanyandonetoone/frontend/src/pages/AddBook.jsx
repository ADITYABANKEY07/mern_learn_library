import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const AddBook = () => {
  let { id } = useParams();
  let [bookname, setBookName] = useState("");
  let [price, setPrice] = useState("");
  let handleSubmit = async (e) => {
    e.preventDefault()
    let api = "http://localhost:6001/employee/addbook";
    let res = await axios.post(api, {
      id: id,
      bookname: bookname,
      price: price,
    });
    alert("Add Book")
  };
  return (
    <div>
      <h1>Add Book {id}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="border-2 mt-1"
          value={bookname}
          onChange={(e) => {
            setBookName(e.target.value);
          }}
          placeholder="Enter your bookname"
        />{" "}
        <br />
        <input
          type="text"
          className="border-2 mt-1"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          placeholder="Enter your price"
        />{" "}
        <br />
        <button
          type="submit"
          className="px-3 py-2 bg-red-500 text-white font-semibold"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
