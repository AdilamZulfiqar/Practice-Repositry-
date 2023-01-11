import React from "react";
const Header = ({ title }) => {
  const [count, setCount] = React.useState(1);

  const increment = () => {
    return setCount(count + 1);
  };
  return (
    <div>
      <h1>header</h1>
      <h3>{title}</h3>
      <button onClick={increment}>{count}</button>
    </div>
  );
};

export default Header;
