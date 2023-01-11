import React from "react";
import MyVideoComponent from "../video/MyVideoComponent";
import MyHouse from "../images/house-img.jpg";
import Product from "../blog/Products";

const LandingPage = () => {
  return (
    <div>
      <div
        className="header-img"
        style={{
          backgroundImage: `url(${MyHouse})`,
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <MyVideoComponent />
      </div>
      <Product />
    </div>
  );
};

export default LandingPage;
