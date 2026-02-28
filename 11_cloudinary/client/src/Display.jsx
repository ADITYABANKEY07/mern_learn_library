import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Display = () => {
  let [mydata, setMyData] = useState([]);
  let loadData = async () => {
    let api = "http://localhost:8003/student/display";
    let res = await axios.get(api)
    setMyData(res.data)
  };
  useEffect(()=>{
    loadData()
  },[])
return (
  <div className="min-h-screen bg-gray-100 p-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {mydata.map((item, index) => {
        return (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-5"
          >
            <div className="flex flex-col items-center">
              <img
                src={item.myimg}
                alt="no image found"
                className="w-32 h-32 object-cover rounded-full border-4 border-gray-200 mb-4"
              />

              <h2 className="text-xl font-bold text-gray-800">
                {item.name}
              </h2>

              <p className="text-gray-600">
                Roll No: <span className="font-semibold">{item.rollno}</span>
              </p>

              <p className="text-gray-600">
                City: <span className="font-semibold">{item.city}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);
};

export default Display;
