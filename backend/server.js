const express = require('express');
const mongoose = require('mongoose');
const products = require('./data/products');

const app = express();

const PORT = 5000;

app.get('/', (req, res) => {
  res.send('<h1>welcome to ECommerce');
});

app.get('/products', (req, res) => {
  res.json(products);
});

app.get('products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})


app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}.`);
});