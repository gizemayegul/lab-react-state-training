import { useState } from "react";

const LikeButton = () => {
  const [LikeButton, setLikeButton] = useState(0);
  const counterHandler = () => {
    setLikeButton((prev) => prev + 1);
  };
  return (
    <>
      <button onClick={counterHandler}>{LikeButton + " likes"}</button>
    </>
  );
};

export default LikeButton;
