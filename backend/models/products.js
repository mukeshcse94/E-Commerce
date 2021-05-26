const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewsSchema = new Schema({
  name: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true }
}, { timestamps: true })

const productSchema = new Schema({
  User: { type: Schema.Types.ObjectId, required: false, ref: 'user' },
  name: { type: String, required: true },
  image: { type: String, required: true },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  numReviews: [reviewsSchema],
  rating: { type: Number, required: true },
  numReviews: { type: Number, required: true },
  price: { type: Number, required: true },
  contInStock: { type: Number, required: true },

})


module.exports = Products = mongoose.model('products', productSchema);