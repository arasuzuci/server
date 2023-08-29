"use strict";
const fs = require("fs");
/** @type {import('sequelize-cli').Migration} */
const {
  User,
  UserDetails,
  Role,
  Questions,
  BMICategory,
  Blog,
  ClassDetails,
  ContentCategory,
  DietCategory,
  DietMeals,
  DietMealsCategoryMapping,
} = require("../models/index");
const bcrypt = require("bcrypt");

const seederData = async (queryInterface) => {
  await Promise.all([
    queryInterface.sequelize.query("DELETE FROM questions;"),
    queryInterface.sequelize.query("DELETE FROM diet_meals_category_mappings;"),
    queryInterface.sequelize.query("DELETE FROM diet_categories;"),
    queryInterface.sequelize.query("DELETE FROM diet_Meals;"),
    queryInterface.sequelize.query("DELETE FROM content_categories;"),
    queryInterface.sequelize.query("DELETE FROM blogs;"),
    queryInterface.sequelize.query("DELETE FROM class_details;"),
    queryInterface.sequelize.query("DELETE FROM user_details;"),
    queryInterface.sequelize.query("DELETE FROM bmi_categories;"),
    queryInterface.sequelize.query("DELETE FROM roles;"),
    queryInterface.sequelize.query("DELETE FROM users;"),
  ]);

  const passworHash = async (data) => {
    const password = await bcrypt.hash(data, 10);
    console.log(password);
    return password;
  };
  const users = [
    {
      emailId: "shreeguru@gmail.com",
      password: await passworHash("Password@1"),
    },
    {
      emailId: "aruna@gmail.com",
      password: await passworHash("Password*1"),
    },
    {
      emailId: "admin@gmail.com",
      password: await passworHash("Password#1"),
    },
  ];
  const [userOne, userTwo, userThree] = await User.bulkCreate(users);
  const role = [
    {
      role: "student",
    },
    {
      role: "admin",
    },
    { role: "Trainer" },
  ];
  const [studentRole, adminRole, trainerRole] = await Role.bulkCreate(role);

  const bmiCategory = [
    { categoryName: "underweight" },
    { categoryName: "normal" },
    { categoryName: "overweight" },
    { categoryName: "obesity" },
  ];
  const [underweight, normal, overweight] = await BMICategory.bulkCreate(
    bmiCategory
  );

  const userDetails = [
    {
      firstName: "Aruna",
      lastName: "Ramesh",
      gender: "female",
      height: 150,
      weight: 55.0,
      bmiCalculation: 21.5,
      age: 23,
      isUserActive: 1,
      images:
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp",
      isPremiumUser: false,
      userId: userTwo.dataValues.id,
      roleId: studentRole.dataValues.id,
      categoryId: underweight.dataValues.id,
    },
    {
      firstName: "Shree Guru",
      lastName: "S",
      gender: "male",
      height: 170.0,
      weight: 60.0,
      bmiCalculation: 20.8,
      age: 22,
      isUserActive: 1,
      images:
        "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg",
      isPremiumUser: true,
      userId: userOne.dataValues.id,
      roleId: trainerRole.dataValues.id,
      categoryId: overweight.dataValues.id,
    },
    {
      firstName: "Pon Arasu",
      lastName: "K",
      gender: "male",
      height: 180.0,
      weight: 92.0,
      bmiCalculation: 28.4,
      age: 21,
      isUserActive: 1,
      images:
        "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg",
      isPremiumUser: true,
      userId: userThree.dataValues.id,
      roleId: adminRole.dataValues.id,
      categoryId: normal.dataValues.id,
    },
  ];
  await UserDetails.bulkCreate(userDetails);
  const contentCategory = [
    { contentCategoryName: "Yoga" },
    { contentCategoryName: "Cardio" },
    { contentCategoryName: "Gym" },
  ];
  const [yoga, cardio, gym] = await ContentCategory.bulkCreate(contentCategory);

  const classDetails = [
    {
      classVideo: "https://www.youtube.com/watch?v=zpxHe8NxLmI",
      classTitle: "Easy Yoga Asanas For Weight Gain",
      description:
        "Being underweight and skinny can hamper your confidence. Here are some yoga asanas that can help you gain weight the healthy way",
      duration: "13:00",
      categoryId: underweight.dataValues.id,
      contentCategoryId: yoga.dataValues.id,
    },
    {
      classVideo: "https://www.youtube.com/watch?v=Ci3na6ThUJc",
      classTitle: "Yoga For Weight Loss | 40 Minute Fat Burning Workout",
      description:
        "Yoga For Weight Loss - Balance Practice ... Yoga For Weight Loss | Healthy Energy Flow | Yoga With Adriene.",
      duration: "13:00",
      categoryId: overweight.dataValues.id,
      contentCategoryId: yoga.dataValues.id,
    },
    {
      classVideo: "https://www.youtube.com/watch?v=mfv9tehZNr0",
      classTitle: "Total Body Strength Workout in the Gym",
      description:
        "If you are looking for a workout to lose weight then this is the video for you. Most of the time, when people attempt to lose weight",
      duration: "13:00",
      categoryId: normal.dataValues.id,
      contentCategoryId: gym.dataValues.id,
    },
  ];
  await ClassDetails.bulkCreate(classDetails);
  // const data = fs.readFileSync("./sampleFiles/sample.pdf", "utf8");

  const blog = [
    {
      attachment: "",
      blogName: "Cardio Fitness Tips",
      description:
        "We are a highly experienced group of health & fitness equipment experts who have joined to produce a unique brand of fitness equipment. In this blog, you will get beginner tips for treadmill workouts and some other cardio exercises.",
      images:
        "https://assets.sweat.com/html_body_blocks/images/000/016/860/original/CardioAtHome_en198c593a6da46c6f07deb08e9ee740fc.jpg?1623214037",
      categoryId: overweight.dataValues.id,
      contentCategoryId: cardio.dataValues.id,
    },
  ];
  await Blog.bulkCreate(blog);
  const dietCategory = [
    {
      categoryName: "All",
    },
    {
      categoryName: "Breakfast",
    },
    {
      categoryName: "Lunch",
    },
    {
      categoryName: "Dinner",
    },
  ];
  const [all, breakfast, lunch, dinner] = await DietCategory.bulkCreate(
    dietCategory
  );
  const dietMeals = [
    {
      mealName: "idly",
      quantity: "3",
      nutritional_info:
        "The Nutrition Facts label must list total fat, saturated fat, trans fat, cholesterol, sodium, total carbohydrate, dietary fiber, total sugars, added sugars, protein, and certain vitamins and minerals.",
      calories: 500,
      benefits: "Gives your brain a boost",
    },
  ];
  const [idly] = await DietMeals.bulkCreate(dietMeals);

  const dietMealsCategoryMapping = [
    {
      dietMealsId: idly.dataValues.id,
      dietCategoryId: breakfast.dataValues.id,
      categoryId: overweight.dataValues.id,
    },
    {
      dietMealsId: idly.dataValues.id,
      dietCategoryId: dinner.dataValues.id,
      categoryId: overweight.dataValues.id,
    },
  ];
  await DietMealsCategoryMapping.bulkCreate(dietMealsCategoryMapping);
};
module.exports = {
  async up(queryInterface, Sequelize) {
    let res = null;
    console.info("----Initializing setup----");
    try {
      console.info("----Executing  Getting started seeders file----");
      res = await seederData(queryInterface, Sequelize);
    } catch (e) {
      console.error("Error: Getting started", e);
    }
    return res;
  },

  async down() {
    return true;
  },
};
