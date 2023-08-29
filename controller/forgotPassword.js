const db = require("../models");
const Users = db.User;

const { sign } = require("jsonwebtoken");
const forgotPasswordGenerator = require("../service/email/forgotPasswordGenerator");

const forgotPassword = async (req, res) => {
  const { emailId } = req.body;
  try {
    const validEmail = await Users.findOne({
      attributes: ["emailId"],
      where: { emailId: emailId },
    });
    if (validEmail) {
      const jsontoken = sign(validEmail.dataValues, process.env.JWT_KEY, {
        expiresIn: "10m",
      });
      forgotPasswordGenerator(emailId, jsontoken);

      await Users.update(
        { resetToken: jsontoken },
        { where: { emailId: emailId } }
      );
      return res.status(200).send({
        status: "FP01",
        message: "Mail send successfully",
      });
    } else {
      return res.status(404).send({
        status: "FP02",
        message: "Invalid Email",
      });
    }
  } catch (err) {
    res.status(500).json({
      status: "CA05",
      message:
        "Something went wrong. Please try again later" + " " + err.message,
    });
  }
};
module.exports = forgotPassword;
