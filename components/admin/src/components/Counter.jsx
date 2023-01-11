import React from "react";

const Counter = ({ count, handleIncrement, handleDecrement }) => {
  return (
    <div>
      {count}
      <button onClick={handleDecrement}>--</button>
      {count}
      <button onClick={handleIncrement}>++</button>
      {count}
    </div>
  );
};

export default Counter;
