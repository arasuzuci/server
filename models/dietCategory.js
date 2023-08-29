const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  const DietCategory = sequelize.define("diet_category", {
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
  return DietCategory;
};
