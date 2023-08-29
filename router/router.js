const express = require("express");
const Router = express.Router();
const controllers = require("../controller/index");
const { checkToken } = require("../middleware/tokenValidation");
Router.route("/api/register").post(controllers.register);
Router.route("/api/login").post(controllers.login);
Router.route("/api/forgot-password").post(controllers.forgot_password);
Router.route("/api/reset-password/:token").put(controllers.reset_password);
Router.route("/api/class-details").get(checkToken, controllers.class_details);
Router.route("/api/add-class-details").post(
  checkToken,
  controllers.add_class_details
);
Router.route("/api/bmi-category").get(checkToken, controllers.bmi_categories);
Router.route("/api/content-category").get(
  checkToken,
  controllers.content_categories
);

module.exports = Router;
