const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const Product = require('../models/products');


router.get('/products', asyncHandler(async (req, res) => {
  const products = await Product.find({})
  //to show Alert in UI
  // throw new Error("custome error");
  // console.log('ssssss', products)
  res.json(products);
})
);

router.get("/products/:id", asyncHandler(async (req, res) => {
  const products = await Product.findById(req.params.id)
  // console.log('ssssss', products)
  if (products) {
    res.json(products)
  }
  else {
    res.status(404).json({ message: 'Product not found' })
  }
})
);


module.exports = router;