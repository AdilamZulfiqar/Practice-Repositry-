const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: {
    type: String,
    require,
  },
  description: { type: String, require },
  rating: {
    type: Number,
  },

  prices: {
    type: Number,
  },
  category: { type: String, require },
  image: [{ type: String }],
});

const productModel = mongoose.model("product", productSchema);
module.exports = productModel;
