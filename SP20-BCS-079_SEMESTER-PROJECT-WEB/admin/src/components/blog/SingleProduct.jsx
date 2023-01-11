import React from "react";
import { Link } from "react-router-dom";
import "./SingleProduct.css";
const SingleProduct = ({ product }) => {
  return (
    <div className="blog-container">
      <div className="blog-card-img">
        <img src={product.images[0]} alt="" />
      </div>
      <div className="blog-card-detail">
        <h4>
          {product.brand}
          {product.category}
        </h4>
        <h2>{product.title}</h2>
        <p className="product-des">{product.description}</p>
        <Link to="/update">
          <button id="update">Update</button>
        </Link>
        <button id="edit">Edit</button>
        <button id="del">Delete</button>
      </div>
    </div>
  );
};

export default SingleProduct;
