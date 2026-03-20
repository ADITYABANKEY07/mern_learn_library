const userModel = require("../models/userModel");
const nodemailer = require("nodemailer");

const SendMail = async (req, res) => {
  let { name, email, subject, mobile } = req.body;
  let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODE_MAIL,
      pass: process.env.NODE_PASS,
    },
  });

  let mailDetails = {
    from: process.env.NODE_MAIL,
    to: email,
    subject: "Mail from Aditya Bankey",
    text: `Your Basic Information \n
    Name: ${name}\n
    email: ${email}\n
    subject: ${subject}\n
    mobile: ${mobile}\n`,
  };

  mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      console.log("Error Occurs");
    } else {
      console.log("Email sent successfully");
    }
  });
  res.send("Okk");
};

module.exports = {
  SendMail,
};
