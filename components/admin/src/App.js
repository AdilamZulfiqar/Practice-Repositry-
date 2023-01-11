import logo from "./logo.svg";
import "./App.css";
import Product from "./components/Product";
import Counter from "./components/Counter";
import React from "react";
const handleAddToCartClick = (title) => {
  alert("Add to cart click for " + title);
};
function App() {
  const [count, setCount] = React.useState(4);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1 style={{ backgroundColor: "burlywood" }}>react components</h1>
      //passing count value jo meri app.js k pas h.
      <Counter
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
      <Product
        title="Audi"
        price="400"
        onAddToCart={handleAddToCartClick}
        count={count}
      />
      <Product title="Suzuki" price="400" onAddToCart={handleAddToCartClick} />
      <Product title="Farari" price="800" onAddToCart={handleAddToCartClick} />
    </div>
  );
}

export default App;
