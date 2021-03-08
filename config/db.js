const mongoose = require("mongoose");
const config = require("config"); //access to global variables
const db = config.get("mongoURI"); //grab the value from default.json file

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewURIParse: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
