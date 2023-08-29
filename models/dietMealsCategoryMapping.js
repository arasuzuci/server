const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  const DietMealsCategoryMapping = sequelize.define(
    "diet_meals_category_mapping",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    }
  );
  return DietMealsCategoryMapping;
};
