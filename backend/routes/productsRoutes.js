const express = require('express');
const route = express.Router();
const asyncHandler = require('express-async-handler');
const products = require('../models/products');


route.get('/products', (req, res) => {
  res.json(products);
});

route.get('products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
});


module.exports = route;