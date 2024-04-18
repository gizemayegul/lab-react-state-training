import glasses from "../assets/images/glasses.png";
import maxence from "../assets/images/maxence.png";
import { useState } from "react";

export default function ClickablePicture() {
  const [showImage, setShowImage] = useState(false);
  const imageHandler = () => {
    setShowImage(!showImage);
  };

  return (
    <>
      <div className="images">
        <img src={maxence} alt="maxence" onClick={imageHandler} />
        {showImage && <img className="glasses" src={glasses} alt="glasses" />}
      </div>
    </>
  );
}
