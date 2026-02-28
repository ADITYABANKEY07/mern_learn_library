import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Insert = () => {
  let navigate = useNavigate();
  let [myimage, setMyImage] = useState("");
  let [input, setInput] = useState({
    rollno: "",
    name: "",
    city: "",
  });
  let handleInput = (e) => {
    let { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleImage = (e) => {
    console.log(e.target.files[0]);
    setMyImage(e.target.files[0]);
  };
  const handleSubmit = async () => {
    let api = "http://localhost:8003/student/upload";
    let formData = new FormData();
    formData.append("file", myimage);
    formData.append("upload_preset", "adityapre");
    formData.append("cloud_name", "dhaqmwrc2");
    let res = await axios.post(
      "http://api.cloudinary.com/v1_1/dhaqmwrc2/image/upload",
      formData,
    );
    console.log(res.data.url);
    let myimg = res.data.url;
    let res1 = await axios.post(api, { ...input, myimg: myimg });
    alert("Data inserted successfully");
    navigate("/display")
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          File Upload Form
        </h1>

        <div className="space-y-4">
          <input
            type="text"
            name="rollno"
            value={input.rollno}
            placeholder="Enter your rollno"
            onChange={handleInput}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="text"
            name="name"
            value={input.name}
            placeholder="Enter your name"
            onChange={handleInput}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="text"
            name="city"
            value={input.city}
            placeholder="Enter your city"
            onChange={handleInput}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="file"
            onChange={handleImage}
            className="w-full border p-2 rounded-lg bg-gray-300"
          />

          <button
            disabled={!myimage}
            onClick={handleSubmit}
            className={`w-full py-3 rounded-lg text-white font-semibold transition duration-300 ${
              !myimage
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default Insert;
