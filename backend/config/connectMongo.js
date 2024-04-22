const mongoose = require("mongoose");

const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDb in config");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectMongo;
