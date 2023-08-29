const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  const Questions = sequelize.define("questions", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    questions: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    answers: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Questions;
};
