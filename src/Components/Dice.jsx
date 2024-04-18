import dice0 from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";
import { useState } from "react";

const imageArray = [dice0, dice1, dice2, dice3, dice4, dice5, dice6];
const Dice = () => {
  const [Dice, setDice] = useState(imageArray[0]);
  const randomImageHandler = () => {
    let randomGenerator = Math.floor(Math.random() * 6) + 1;
    setDice(imageArray[randomGenerator]);
  };

  return (
    <>
      <img onClick={randomImageHandler} className="dice" src={Dice} />
    </>
  );
};
export default Dice;
