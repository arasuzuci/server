const db = require("../models");
const Users = db.User;
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");
const { UserDetails, Role, BMICategory } = require("../models");

const login = async (req, res) => {
  const { emailId, password } = req.body;
  if (!emailId || !password) {
    return res.status(400).send({
      status: "LS02",
      message: "Email or password missing.",
    });
  }
  try {
    const userLogin = await Users.findOne({
      where: { emailId: emailId },
    });
    if (userLogin) {
      const passwordValidate = bcrypt.compareSync(password, userLogin.password);
      if (passwordValidate) {
        const userDetails = await Users.findOne({
          attributes: ["emailId"],
          include: [
            {
              attributes: ["firstName"],
              model: UserDetails,
              include: [
                {
                  attributes: ["id", "role"],
                  model: Role,
                },
                {
                  attributes: ["id", "categoryName"],
                  model: BMICategory,
                },
              ],
            },
          ],
          where: { emailId },
        });
        console.log(userDetails.user_detail.role);
        const jsontoken = sign(userDetails.dataValues, process.env.JWT_KEY, {
          expiresIn: "24h",
        });
        return res.status(200).send({
          status: "LS01",
          message: "login successfully",
          token: jsontoken,
          userData: userDetails,
        });
      } else {
        return res.status(401).send({
          status: "LS03",
          message: "Password incorrect",
        });
      }
    } else {
      return res.status(401).send({
        status: "LS04",
        message: "Invalid user",
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
module.exports = login;
