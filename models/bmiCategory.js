const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  const BmiCategory = sequelize.define("bmi_category", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    categoryName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return BmiCategory;
};
