import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const increaseHandler = () => {
    setCounter((prev) => prev + 1);
  };
  const decreaseHandler = () => {
    counter > 0 ? setCounter((prev) => prev - 1) : 0;
  };

  return (
    <div>
      <button onClick={increaseHandler}>+</button>
      <span>{counter}</span>
      <button onClick={decreaseHandler}>-</button>
    </div>
  );
};
export default Counter;
