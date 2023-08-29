const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  const DietMeals = sequelize.define("diet_meals", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    mealName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nutritional_info: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    calories: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    benefits: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return DietMeals;
};
