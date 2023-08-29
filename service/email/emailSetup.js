const nodemailer = require("nodemailer");

const sender = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "raruna3012@gmail.com",
    pass: "dsvbvvvffphfofsi",
  },
});

module.exports = sender;
