const homePage = (req, res) => {
  res.send("<h1>This is a Teacher Home Page</h1>");
};
const deptPage = (req, res) => {
  res.send("<h1>This is a Teacher Dept Page</h1>");
};
const infoPage = (req, res) => {
  res.send("<h1>This is a Teacher Info Page</h1>");
};
const salaryPage = (req, res) => {
  res.send("<h1>This is a Teacher Salary Page</h1>");
};

module.exports = {
  homePage,
  deptPage,
  infoPage,
  salaryPage,
};
