import { useState } from "react";

const DiscoButton = () => {
  const [DiscoButton, setDiscoButton] = useState({
    count: 0,
    backgroundColor: "purple",
  });

  const counterHandler = () => {
    setDiscoButton((prev) => ({
      ...prev,
      count: prev.count + 1,
      backgroundColor: colorArray[randomColor],
    }));
  };

  const colorArray = ["purple", "blue", "green", "yellow", "orange", "red"];
  const randomColor = Math.floor(Math.random() * colorArray.length) + 1;

  return (
    <>
      <button
        style={{ backgroundColor: DiscoButton.backgroundColor }}
        onClick={counterHandler}
      >
        {DiscoButton.count + " likes"}
      </button>
    </>
  );
};

export default DiscoButton;
