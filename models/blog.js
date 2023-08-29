const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  const Blog = sequelize.define("blog", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    attachment: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
    blogName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    images: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  return Blog;
};
