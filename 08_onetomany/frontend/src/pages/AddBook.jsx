import axios from "axios";
import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const AddBook = () => {
  const { id } = useParams();
  const [bookname, setBookName] = useState("");
  const [price, setPrice] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    let api = "http://localhost:6001/employee/addbook";
    let res = await axios.post(api, {
      id: id,
      bookname: bookname,
      price: price,
    });
    console.log(res.data);
  };

  return (
    <div>
      <h1>Add More Book</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={bookname}
          onChange={(e) => {
            setBookName(e.target.value);
          }}
          placeholder="Enter book name"
          className="border-2 mt-2"
        /> <br />
        <input
          type="text"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          placeholder="Enter price"
          className="border-2 mt-2"
        /> <br />
        <button type="submit" className="px-3 py-2 bg-blue-700 text-white font-semibold">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
