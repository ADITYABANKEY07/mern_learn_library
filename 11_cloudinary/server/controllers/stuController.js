const stuModel = require("../models/stuModel");

const UploadImage = async (req, res) => {
  console.log(req.body);
  const { rollno, name, city, myimg } = req.body;
  const student = await stuModel.create({
    rollno: rollno,
    name: name,
    city: city,
    myimg: myimg,
  });
  res.send("Data inserted successfully");
};

const DisplayImage = async (req, res) => {
  const student = await stuModel.find();
  res.send(student);
};

module.exports = {
  UploadImage,
  DisplayImage,
};
