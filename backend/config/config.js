const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_UTI ||
      "mongodb://localhost:27017/ecommerce", {
      useUnifiedTopology: true,
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false
    })
    console.log(`mongoDB connected ${conn.connection.host}`)
  } catch (err) {
    console.log(`Error: ${err.message}`)
    process.exit(1);
  }
}

module.exports = connectDB;