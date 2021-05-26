const express = require('express');
const products = require('./data/products');
const dotenv = require('dotenv');
const connectDB = require('./config/config')

const productRoutes = require('./routes/productsRoutes');
const { errorHandler } = require('./middleware/errorHandler');

const app = express();

//dotenv config
dotenv.config();

connectDB();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('<h1>welcome to ECommerce');
});

app.use('/api', productRoutes);
//custome define error handler
app.use(errorHandler);

app.listen(PORT, function () {
  console.log(`Server listening ${process.env.NODE_ENV} mode on port ${process.env.PORT}.`);
});