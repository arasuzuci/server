const sender = require("./emailSetup");

const emailTemplate = require("./mailFormat");

const link = "http://localhost:4200/Resetpassword";

const forgotPasswordGenerator = (userEmail, jsontoken) => {
  const compiler = {
    from: "raruna3012@gmail.com",
    to: userEmail,
    subject: "Forgot Password",
    html: emailTemplate(link, jsontoken),
  };
  let emailStatus;
  sender.sendMail(compiler, function (error, info) {
    if (error) {
      console.log(error);
      emailStatus = false;
    } else {
      console.log("mail sent successfully!", info.response);
      emailStatus = true;
    }
  });
  return emailStatus;
};

module.exports = forgotPasswordGenerator;
