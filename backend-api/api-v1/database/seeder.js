const mongoose = require("mongoose");
const { brandsData } = require("./data/brandsData");
const { categoriesData } = require("./data/categoriesData");
const { productsData } = require("./data/productsData");
const { reviewsData } = require("./data/reviewsData");
const { usersData } = require("./data/usersData");
const User = require("../models/userModel");
const Brand = require("../models/brandModel");
const Category = require("../models/categoryModel");
const Product = require("../models/productModel");
const Review = require("../models/reviewModel");
const database = require("../config/database");

require("dotenv").config();

database.connect();

const importData = async () => {
  try {
    await Brand.deleteMany();
    await Category.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    await Review.deleteMany();

    const createdBrands = await Brand.insertMany(brandsData);
    const createdUsers = await User.insertMany(usersData);
    await Category.insertMany(categoriesData);

    const adminUser = createdUsers[0]._id;
    const consumerUser = createdUsers[1]._id;

    const products = productsData.map((product, index) => {
      return {
        ...product,
        user: adminUser,
        detail: { ...product.detail, brand: createdBrands[index]._id },
      };
    });

    const createdProducts = await Product.insertMany(products);

    const reviews = reviewsData.map((review, index) => {
      return {
        ...review,
        product: createdProducts[index]._id,
        user: consumerUser,
      };
    });

    await Review.insertMany(reviews);

    console.log("Data Imported Successfully!");
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Category.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    await Brand.deleteMany();

    console.log("Data Destroyed!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
