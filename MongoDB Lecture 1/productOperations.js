const ProductModel = require("./models/ProductModel");
const createProduct = async (title, author, price) => {
  console.log("create Product");
  let product = new ProductModel();
  product.title = title;
  product.author = author;
  product.price = price;
  await product.save();
  return product;
};

const getAllProducts = async () => {
  let products = await ProductModel.find();
  return products;
};

const deleteProduct = async (_id) => {
  let product = await ProductModel.findByIdAndDelete(_id);
  return product;
};

const updateProduct = async (_id, title, author, price) => {
  let product = await ProductModel.findById(_id);
  product.title = title;
  product.author = author;
  product.price = price;
  await product.save();
  return product;
};

module.exports.createProduct = createProduct;
module.exports.getAllProducts = getAllProducts;
module.exports.deleteProduct = deleteProduct;
module.exports.updateProduct = updateProduct;
