const mongoose = require("mongoose");

const connectDb = async () => {
  await mongoose.connect(process.env.DB_URL);
  console.log("database connected successfully");
};

module.exports = connectDb;
