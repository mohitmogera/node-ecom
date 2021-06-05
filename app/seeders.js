//require("dotenv").config();

const productData = require("./data/products");
const categoryData =  require("./data/categories");
const connectDB = require("../config/database.config");
const Product = require("./models/products.model");
const Categories = require("./models/productcategories.model");

connectDB();

const importData = async () => {
  try {

    await Categories.deleteMany({});
    await Categories.insertMany(categoryData);

    await Product.deleteMany({});
    await Product.insertMany(productData);

    console.log("Data Import Success");

    process.exit();
  } catch (error) {
    console.error("Error with data import", error);
    process.exit(1);
  }
};

importData();