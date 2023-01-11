import axios from "axios";
import React from "react";

const Update = (props) => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const [description, SetDescription] = React.useState("");
  console.log(props);
  return (
    <div>
      <h1>Update</h1>

      <section id="form-detail">
        <div className="form-container">
          <form>
            <h2>Update a Product</h2>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Product Name"
            />
            <br />
            <input
              type="text"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              placeholder="Product Price"
            />
            <br />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Product Description"
              value={description}
              onChange={(e) => {
                SetDescription(e.target.value);
              }}
            ></textarea>
            <br />
            <button
              onClick={() => {
                console.log("Send api call to add");
              }}
            >
              Update Product
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Update;
