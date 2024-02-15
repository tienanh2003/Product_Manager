const mongoose = require("mongoose");

module.exports.connect = async () => {
  // mongoose.connect(process.env.MONGO_URL)
  //   .then(() => console.log('Connected!'));
  try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log('Connected!')
  } catch (error) {
    console.log('Connected Error!');
  }
}