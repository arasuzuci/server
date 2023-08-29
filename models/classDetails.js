const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  const ClassDetails = sequelize.define("class_details", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    classVideo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    classTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    duration: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  return ClassDetails;
};
