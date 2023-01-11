import React from "react";
import "./Product.css";

const Product = ({ title, price, onAddToCart, count }) => {
  var title = title;
  var priceClass = price < 700 ? "green" : "orange";

  return (
    <div>
      <h1 style={{ backgroundColor: "red" }}>{title}</h1>
      {count}
      <b className={priceClass}>Price:{price} </b>
      <button
        onClick={() => {
          onAddToCart(title);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
<div></div>;
