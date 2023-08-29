const db = require("../models");
const bmi_category = db.BMICategory;

const bmiCategory = async (req, res) => {
  const details = await bmi_category.findAll({
    attributes: ["id", "categoryName"],
  });
  try {
    if (details) {
      return res.status(200).send({
        status: "BC01",
        message: "Details Fetched",
        data: details,
      });
    } else {
      return res.status(404).send({
        status: "BC02",
        message: "Details Not Found",
      });
    }
  } catch (err) {
    return res.status(500).send({
      status: "CA05",
      message: "Something went wrong. Please try again later" + err.message,
    });
  }
};
module.exports = bmiCategory;
