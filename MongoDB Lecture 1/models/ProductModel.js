const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  title: String,
  author: String,
  price: Boolean,
  slug: {
    type: String,
    lowercase: true,
  },
});

const ProductModel = mongoose.model("Product", productSchema);
module.exports = ProductModel;
