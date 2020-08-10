const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    brand: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
  },
  {timestamps: false}
);

module.exports = mongoose.model('products', productSchema);
