const mongoose = require('mongoose');
const dotenv = require('dotenv');
const user = require('./data/user');
const users = require('./models/users');
const product = require('./models/products');
const orders = require('./models/orders');
const products = require('./data/products');
const connectDB = require('./config/config');


dotenv.config();
connectDB();

const importData = async () => {
  try {
    await orders.deleteMany();
    await product.deleteMany();
    await users.deleteMany();

    const createUser = await users.insertMany(user)
    const adminUser = createUser[0]._id
    const sampleData = products.map((product) => {
      return { ...product, users: adminUser }
    })

    await product.insertMany(sampleData)
    console.log('data imported')
    process.exit();
  } catch (err) {
    console.log(`${err}`);
    process.exit(1);;
  }
}

const deleteData = async () => {
  try {
    await orders.deleteMany();
    await product.deleteMany();
    await users.deleteMany();
    console.log('data destroyed');
    process.exit();
  } catch (err) {
    console.log(`${err}`);
    process.exit(1);
  }
}


if (process.argv[2] === '-d') {
  deleteData();
}
else {
  importData();
}