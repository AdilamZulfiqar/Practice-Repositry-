const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const {
  createProduct,
  getAllProducts,
  deleteProduct,
  updateProduct,
} = require("./productOperations");
app.use(express.json());

mongoose
  .connect("mongodb://localhost/mernstack", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4,
  })
  .then(async () => {
    console.log("connection to mongodb created");
    //let product = await createProduct("hello", "aliiii", true);
    //console.log(product);

    //let allProducts = await getAllProducts();
    //console.log(allProducts);

    //console.log(await deleteProduct("639dbccc311959781e400901"));
    let updatedProduct = await updateProduct(
      "639dbc80a49e02457d679ce7",
      "laptop",
      "Domenor",
      true
    );
    console.log(updatedProduct);
  })
  .catch((err) => {
    console.log("error connecting");
    console.log(err);
  });
app.listen(3000);
