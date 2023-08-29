const db = require("../models");
const Users = db.User;
const UserDetails = db.UserDetails;
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  const { emailId, password, gender, height, weight, age, firstName, goal } =
    req.body;
  if (
    !emailId ||
    !password ||
    !gender ||
    !height ||
    !weight ||
    !age ||
    !firstName ||
    !goal

  ) {
    return res.status(400).send({
      status: "RS02",
      message: "please check require field has filled",
    });
  }
  try {
    const passwordHash = async (data) => {
      const password = await bcrypt.hash(data, 10);
      return password;
    };
    const bmi = (weight / (height * height)) * 10000;

    let value = 0;
    const bmiHandler = () => {
      if (bmi < 18.5) {
        value = 1;
      } else if (bmi > 18.5 && bmi <= 25) {
        value = 2;
      } else if (bmi > 25 && bmi <= 30) {
        value = 3;
      } else {
        value = 4;
      }
      return value;
    };

    const password_handler = await passwordHash(password);
    const user = await Users.create({ emailId, password: password_handler });
    const user_details = await UserDetails.create({
      roleId: 1,
      userId: user.id,
      firstName,
      gender,
      height,
      weight,
      age,
      goal,
      bmiCalculation: bmi,
      categoryId: bmiHandler(),
    });
    if (user && user_details) {
      return res.status(201).json({
        status: "RS01",
        message: "Register Successfully",
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
      message: "Something went wrong. Please try again later",
    });
  }
};
module.exports = register;
