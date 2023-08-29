const db = require("../models");
const class_details = db.ClassDetails;

const addCourseDetails = async (req, res) => {
  const {
    classVideo,
    classTitle,
    description,
    duration,
    categoryId,
    contentCategoryId,
  } = req.body;
  try {
    const details = await class_details.create({
      classVideo,
      classTitle,
      description,
      duration,
      categoryId,
      contentCategoryId,
    });
    if (!categoryId || !contentCategoryId) {
      return res.status(400).send({
        status: "AD02",
        message: "BMI category or Content category missing",
      });
    }

    if (details) {
      return res.status(201).json({
        status: "AD01",
        message: "Class added successfully",
      });
    } else {
      console.log(details);
      res.status(500).json({
        status: "CA05",
        message: "Something went wrong. Please try again later",
      });
    }
  } catch (err) {
    return res.status(500).send({
      status: "CA05",
      message: "Something went wrong. Please try again later" + err.message,
    });
  }
};
module.exports = addCourseDetails;
