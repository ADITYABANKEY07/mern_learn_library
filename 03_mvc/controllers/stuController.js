const Stumodel = require("../models/stuModel")

const homePage = (req, res) => {
  res.render("Home");
};
const aboutPage = (req, res) => {
  res.render("About");
};
const facultyPage = (req, res) => {
  res.render("Faculty");
};
const coursesPage = (req, res) => {
  res.render("Courses");
};
const contactPage = (req, res) => {
  res.render("Contact");
};

module.exports = {
  homePage,
  aboutPage,
  facultyPage,
  coursesPage,
  contactPage,
};
