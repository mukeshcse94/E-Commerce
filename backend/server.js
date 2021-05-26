const express = require('express');
const products = require('./data/products');
const dotenv = require('dotenv');
const connectDB = require('./config/config')

const app = express();

//dotenv config
dotenv.config();

connectDB();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('<h1>welcome to ECommerce');
});


app.listen(PORT, function () {
  console.log(`Server listening ${process.env.NODE_ENV} mode on port ${process.env.PORT}.`);
});