import React from "react";
import SingleProduct from "./SingleProduct";
import "./SingleProduct.css";
import axios from "axios";

<script src="https://unpkg.com/axios/dist/axios.min.js"></script>;

const Product = () => {
  const [products, setProducts] = React.useState([]);
  const getData = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  React.useEffect(getData, []);

  return (
    <div>
      <h3 className="categ-head">Our Blogs</h3>
      <h1 className="recent-blog-head">Check Our Recent Blogs</h1>
      <div className="single-product-parent">
        {products.map((product, index) => (
          <SingleProduct key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;
