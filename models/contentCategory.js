const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  const ContentCategory = sequelize.define("content_category", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    contentCategoryName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return ContentCategory;
};
