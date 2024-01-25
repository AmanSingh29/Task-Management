const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Assignment");
    console.log("Database Connected");
  } catch (error) {
    console.log(`Error in connection to database : ${error}`);
  }
};
