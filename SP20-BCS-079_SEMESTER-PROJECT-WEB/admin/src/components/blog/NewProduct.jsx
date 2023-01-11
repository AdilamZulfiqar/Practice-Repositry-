import axios from "axios";
import React from "react";

const NewProduct = (props) => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const [description, SetDescription] = React.useState("");
  console.log(props);
  return (
    <div>
      <h1>New Product</h1>

      <section id="form-detail">
        <div className="form-container">
          <form>
            <h2>Create a New Product</h2>
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
                axios
                  .post("https://dummyjson.com/api/products", {
                    name,
                    price,
                    description,
                  })
                  .then((res) => {
                    console.log(res.data);
                    props.history.push("/blogs");
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              Add new Product
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default NewProduct;
