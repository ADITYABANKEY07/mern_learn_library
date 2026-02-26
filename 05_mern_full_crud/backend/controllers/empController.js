const empModel = require("../model/empModel");

const homePage = (req, res) => {
  res.send("Welcome to Home page");
};
const empInsert = async (req, res) => {
  let { empno, name, designation, salary } = req.body;
  let employee = await empModel.create({
    empno: empno,
    name: name,
    designation: designation,
    salary: salary,
  });
  res.send("Employee data inserted successfully");
};
const empDisplay = async (req, res) => {
  let employees = await empModel.find();
  res.json(employees);
};
const empUpdate = async (req, res) => {
  let employees = await empModel.find();
  res.json(employees);
};
const empRecDel = async (req, res) => {
  let { id } = req.query;
  await empModel.findByIdAndDelete(id);
  console.log(req.query);
  res.send("Data deleted");
};
const empGetRec = async (req, res) => {
  let { id } = req.query;
  let data = await empModel.findById(id);
  console.log(req.query);
  res.json(data);
};

const empEditRec = async (req, res) => {
  let { id } = req.query;
  let data = await empModel.findById(id);
  console.log(req.query);
  res.json(data);
};

const empEditedData = async (req, res) => {
      console.log(req.body);
  let { _id, empno, name, designation, salary } = req.body;
  await empModel.findByIdAndUpdate(_id, {
    empno: empno,
    name: name,
    designation: designation,
    salary: salary,
  });
  res.send("Data Edited Successfully");
};

const empSearchData = async (req, res) => {
  const {empno} = req.query
  const employees = await empModel.find({empno:empno})
  res.send(employees)
}

module.exports = {
  homePage,
  empInsert,
  empDisplay,
  empUpdate,
  empRecDel,
  empGetRec,
  empEditRec,
  empEditedData,
  empSearchData
};