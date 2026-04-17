const userModel = require("../models/userModel");

const SetCookiePage = async (req, res) => {
  res.cookie("name", "adibro", { maxAge: 60 * 1000 });
  res.cookie("age", "23", { maxAge: 60 * 1000 });
  res.cookie("city", "Bhopal", { maxAge: 60 * 1000 });
  res.send("Cookie set successfully");
};
const GetCookiePage = async (req, res) => {
  const { name, age, city } = req.cookies;
  res.send(
    `Cookie get successfully name is ${name} , age is ${age} and city is ${city} `,
  );
};
const DelCookiePage = async (req, res) => {
  res.clearCookie("name");
  res.clearCookie("age");
  res.send(`Cookie deleted successfully`);
};

module.exports = {
  SetCookiePage,
  GetCookiePage,
  DelCookiePage,
  CookieLoginPage,
};
