const config = require("../config/config_db");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
  }
);
sequelize.sync();
module.exports = sequelize;
