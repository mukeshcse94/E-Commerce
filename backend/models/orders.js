const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  User: { type: Schema.Types.ObjectId, required: true, ref: 'user' },
  orderItems: [
    {
      name: { type: String, required: true },
      qty: { type: Number, required: true },
      image: { type: String, required: true },
      price: { type: Number, required: true }
    }
  ],
  product: { type: Schema.Types.ObjectId, required: true, ref: 'products' },
  shippingAddress: {
    address: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: Number, required: true },
    country: { type: String, required: true },
  },
  payment: { type: String, required: true },
  paymentResult: {
    id: { type: String },
    status: { type: String },
    update_time: { type: String },
    email_address: { type: String }
  },
  textPrice: { type: Number, required: true, default: 0.0 },
  shippingPrice: { type: Number, required: true, default: 0.0 },
  totalPrice: { type: Number, required: true, default: 0.0 },
  isPaid: { type: Boolean, require: true, default: false },
  paidAt: { type: Date },
  isDelevired: { type: Boolean, require: true, default: false },
  deleviredAt: { type: Boolean, require: true, default: false }
}, { timestamps: true })


module.exports = Order = mongoose.model('order', orderSchema);