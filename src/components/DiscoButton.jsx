import { useState } from "react";

const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

function DiscoButton() {
  const [count, setCount] = useState(0);
  return (
    <button
      style={{
        background: colors[count % colors.length],
        color: "white",
        fontSize: "20px",
        margin: "3px",
      }}
      onClick={() => setCount(count + 1)}
    >
      {count} Likes
    </button>
  );
}

export default DiscoButton;

//!Another solution

// import { useState } from "react";

// const DiscoButton = () => {
//   const [DiscoButton, setDiscoButton] = useState({
//     count: 0,
//     backgroundColor: "purple",
//   });

//   const counterHandler = () => {
//     setDiscoButton({
//       count: DiscoButton.count + 1,
//       backgroundColor: colorArray[randomColor],
//     });
//   };

//   const colorArray = ["purple", "blue", "green", "yellow", "orange", "red"];
//   const randomColor = Math.floor(Math.random() * colorArray.length) + 1;

//   return (
//     <>
//       <button
//         style={{
//           backgroundColor: DiscoButton.backgroundColor,
//           color: "white",
//           fontSize: "20px",
//           margin: "3px",
//         }}
//         onClick={counterHandler}
//       >
//         {DiscoButton.count + " likes"}
//       </button>
//     </>
//   );
// };

// export default DiscoButton;
