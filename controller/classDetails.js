const db = require("../models");
const class_details = db.ClassDetails;
const content_category = db.ContentCategory;
const bmi_category = db.BMICategory;
const courseDetails = async (req, res) => {
  const details = await class_details.findAll({
    attributes: ["classVideo", "classTitle", "description", "duration"],
    include: [
      {
        model: content_category,
        attributes: ["contentCategoryName", "id"],
      },
      {
        model: bmi_category,
        attributes: ["categoryName", "id"],
      },
    ],
  });
  try {
    if (details) {
      return res.status(200).send({
        status: "CD01",
        message: "Details Fetched",
        data: details,
      });
    } else {
      return res.status(404).send({
        status: "CD02",
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
module.exports = courseDetails;
