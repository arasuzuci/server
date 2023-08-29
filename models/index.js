const { Sequelize } = require("sequelize");
const sequelize = require("../util/database");

const db = {};

const User = require("./user")(sequelize);
const UserDetails = require("./userDetails")(sequelize);
const Role = require("./role")(sequelize);
const Questions = require("./questions")(sequelize);
const BMICategory = require("./bmiCategory")(sequelize);
const Blog = require("./blog")(sequelize);
const ClassDetails = require("./classDetails")(sequelize);
const ContentCategory = require("./contentCategory")(sequelize);
const DietCategory = require("./dietCategory")(sequelize);
const DietMeals = require("./dietMeals")(sequelize);
const DietMealsCategoryMapping = require("./dietMealsCategoryMapping")(
  sequelize
);

UserDetails.belongsTo(User, { foreignKey: "userId" });
UserDetails.belongsTo(Role, { foreignKey: "roleId" });
UserDetails.belongsTo(BMICategory, { foreignKey: "categoryId" });
ClassDetails.belongsTo(BMICategory, { foreignKey: "categoryId" });
ClassDetails.belongsTo(ContentCategory, { foreignKey: "contentCategoryId" });
Blog.belongsTo(BMICategory, { foreignKey: "categoryId" });
Blog.belongsTo(ContentCategory, { foreignKey: "contentCategoryId" });
DietMealsCategoryMapping.belongsTo(DietCategory, {
  foreignKey: "dietCategoryId",
});
BMICategory.hasMany(UserDetails, { foreignKey: "categoryId" });
DietMealsCategoryMapping.belongsTo(DietMeals, { foreignKey: "dietMealsId" });
DietMealsCategoryMapping.belongsTo(BMICategory, { foreignKey: "categoryId" });
Questions.belongsTo(User, { foreignKey: "userId" });
User.hasOne(UserDetails, { foreignKey: "userId" });

db.User = User;
db.UserDetails = UserDetails;
db.Role = Role;
db.Questions = Questions;
db.BMICategory = BMICategory;
db.Blog = Blog;
db.ClassDetails = ClassDetails;
db.ContentCategory = ContentCategory;
db.DietCategory = DietCategory;
db.DietMeals = DietMeals;
db.DietMealsCategoryMapping = DietMealsCategoryMapping;

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
