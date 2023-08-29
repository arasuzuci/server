const env = require("dotenv").config();
const express = require("express");
const config = require("./config/config_db");
const db = require("./models/index");
const router = require("./router/router");
var cors = require("cors");
const app = express();
app.use(cors());
const PORT = config.SERVER_PORT;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
