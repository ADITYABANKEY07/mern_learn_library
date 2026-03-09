const ProductModel = require("../models/proModel");
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../cloudinary");

// Cloudinary Storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "product_images",
    allowed_formats: ["jpg", "png", "jpeg"],
    public_id: (req, file) => Date.now() + "-" + file.originalname,
  },
});

const upload = multer({ storage }).array("images", 10);

// Upload Product Controller
const UploadProduct = (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }

    try {
      const { name, brand, price, description, category, tags } = req.body;

      const imageUrls = req.files.map((file) => file.path);

      const newProduct = new ProductModel({
        name,
        brand,
        price,
        description,
        category,
        tags,
        images: imageUrls,
        defaultImage: imageUrls[0],
      });

      await newProduct.save();

      res.status(201).json({
        message: "Product uploaded successfully",
        product: newProduct,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
};

const DisplayProduct = async (req, res) => {
  let products = await ProductModel.find();
  res.send(products);
};

module.exports = {
  UploadProduct,
  DisplayProduct,
};
