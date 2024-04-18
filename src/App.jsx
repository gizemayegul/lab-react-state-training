import "./App.css";
import Counter from "./Components/Counter";
import LikeButton from "./Components/LikeButton";
import ClickablePicture from "./Components/ClickablePicture";
import Dice from "./Components/Dice";
import DiscoButton from "./Components/DiscoButton";
import Carousel from "./Components/Crousel";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <h2>Iteration 1 | LikeButton </h2>

      <LikeButton />
      <LikeButton />
      <Counter />
      <ClickablePicture />
      <Dice />
      <DiscoButton />
      <DiscoButton />
      <Carousel
        images={[
          "https://randomuser.me/api/portraits/women/1.jpg",
          "https://randomuser.me/api/portraits/men/1.jpg",
          "https://randomuser.me/api/portraits/women/2.jpg",
          "https://randomuser.me/api/portraits/men/2.jpg",
        ]}
      />
    </div>
  );
}

export default App;
