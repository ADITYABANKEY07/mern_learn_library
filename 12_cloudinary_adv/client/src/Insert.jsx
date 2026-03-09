import { useState } from "react";
import axios from "axios";

const Insert = () => {
  const [images, setImages] = useState([]);
  const [input, setInput] = useState({
    name: "",
    brand: "",
    price: "",
    description: "",
    category: "",
    tags: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImage = (e) => {
    setImages(e.target.files);
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();

      // append text fields
      for (let key in input) {
        formData.append(key, input[key]);
      }

      // // append images
      // Array.from(images).forEach((file) => {
      //   formData.append("images", file); // must match backend upload.array("images",10)
      // });

      for (let i = 0; i < images.length; i++) {
        formData.append("images", images[i]);
      }
      const api = "http://localhost:8003/product/upload";

      const response = await axios.post(api, formData);
      //   , {
      //   headers: { "Content-Type": "multipart/form-data" },
      // });

      console.log(response.data);

      alert("Product uploaded successfully");
    } catch (error) {
      console.error(error);
      alert("Upload failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Add Product</h1>

        <div className="space-y-4">
          <input
            type="text"
            name="name"
            value={input.name}
            placeholder="Product Name"
            onChange={handleInput}
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="text"
            name="brand"
            value={input.brand}
            placeholder="Brand"
            onChange={handleInput}
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="number"
            name="price"
            value={input.price}
            placeholder="Price"
            onChange={handleInput}
            className="w-full p-3 border rounded-lg"
          />

          <textarea
            name="description"
            value={input.description}
            placeholder="Description"
            onChange={handleInput}
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="text"
            name="category"
            value={input.category}
            placeholder="Category"
            onChange={handleInput}
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="text"
            name="tags"
            value={input.tags}
            placeholder="Tags (comma separated)"
            onChange={handleInput}
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="file"
            multiple
            onChange={handleImage}
            className="w-full border p-2 rounded-lg bg-gray-300"
          />

          <button
            disabled={images.length === 0}
            onClick={handleSubmit}
            className={`w-full py-3 rounded-lg text-white ${
              images.length === 0
                ? "bg-gray-400"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            Upload Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default Insert;
