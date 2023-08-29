const db = require("../models");
const content_category = db.ContentCategory;

const contentCategory = async (req, res) => {
  const details = await content_category.findAll({
    attributes: ["id", "contentCategoryName"],
  });
  try {
    if (details) {
      return res.status(200).send({
        status: "BC01",
        message: "Categories Fetched",
        data: details,
      });
    } else {
      return res.status(404).send({
        status: "BC02",
        message: "Categories Not Found",
      });
    }
  } catch (err) {
    return res.status(500).send({
      status: "CA05",
      message: "Something went wrong. Please try again later" + err.message,
    });
  }
};
module.exports = contentCategory;
