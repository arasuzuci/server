const db = require("../models");
const bcrypt = require("bcryptjs");
const Users = db.User;

const resetPassword = async (req, res) => {
  const { password } = req.body;
  const { token } = req.params;

  try {
    const user = await Users.findOne({ where: { resetToken: token } });

    if (!user) {
      return res.status(404).json({ message: "Invalid token" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const passwordDetails = await Users.update(
      { password: hashedPassword, resetToken: null },
      {
        where: { resetToken: token },
      }
    );
    if (passwordDetails) {
      return res.status(200).send({
        status: "RP01",
        message: "Password changed successfully",
      });
    } else {
      res.status(500).json({
        status: "CA05",
        message: "Something went wrong. Please try again later",
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
module.exports = resetPassword;
