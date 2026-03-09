import axios from "axios";
import { useState, useEffect } from "react";

const Display = () => {

  const [mydata, setMyData] = useState([]);

  const loadData = async () => {
    const api = "http://localhost:8003/product/display";
    const res = await axios.get(api);
    setMyData(res.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {mydata.map((item) => (
          <div key={item._id} className="bg-white rounded-xl shadow-lg p-5">

            {/* Images */}
            <div className="flex gap-2 flex-wrap mb-3">
              {item.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="w-20 h-20 object-cover rounded-md"
                />
              ))}
            </div>

            {/* Product Info */}
            <h2 className="text-xl font-bold">{item.name}</h2>

            <p className="text-gray-600">{item.brand}</p>

            <p className="text-green-600 font-bold">₹{item.price}</p>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Display;