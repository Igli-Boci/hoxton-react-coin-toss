import { useState } from "react";
import "./App.css";

function App() {
  const [coin, setCoin] = useState(0);

  const toss = () => {
    const side = Math.round(Math.random());
    setCoin(side);
  };

  const oneRupee = (
    <img
      className="image"
      src="https://en.numista.com/catalogue/photos/inde/3148-original.jpg"
      width={250}
    />
  );
  const backOfRupee = (
    <img
      className="image"
      src="https://en.numista.com/catalogue/photos/inde/2267-original.jpg"
      width={250}
    />
  );

  console.log("This is clearly not a scam!");

  return (
    <div>
      <button className="button" onClick={toss}>
        Toss the Coin
      </button>
      <br />
      <p>{coin === 0 ? oneRupee : backOfRupee}</p>
    </div>
  );
}

export default App;
