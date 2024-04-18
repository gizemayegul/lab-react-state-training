import React from "react";
import { useState } from "react";

export default function Carousel(props) {
  const [count, setCount] = useState(0);
  const [image, setImage] = useState(props.images[count]);
  function rightHandler() {
    if (count < props.images.length - 1) {
      setCount(count + 1);
      setImage(props.images[count + 1]);
      console.log(count);
    }
  }

  function leftHandler() {
    if (count > 0) {
      setCount(count - 1);
      setImage(props.images[count - 1]);
      console.log(count);
    }
  }
  return (
    <div>
      <button onClick={leftHandler}>Left</button>
      <img src={image} />
      <button onClick={rightHandler}>Right</button>
    </div>
  );
}
