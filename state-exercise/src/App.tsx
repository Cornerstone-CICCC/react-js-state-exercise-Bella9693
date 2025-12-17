import { useState } from "react";
import LightToggle from "./components/LightToggle";
import LottoNumbers from "./components/LottoNumbers";
import ClickCounter from "./components/ClickCounter";

const App = () => {
  const [isLightsOn, setIsLightsOn] = useState(true);

  const [lottoNumbers, setLottoNumbers] = useState<number[]>([]);

  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Light Toggle</h2>
      <LightToggle setIsLightsOn={setIsLightsOn} />
      <div
        style={{
          width: "200px",
          height: "100px",
          backgroundColor: isLightsOn ? "white" : "black",
          border: "1px solid gray",
        }}
      />

      <h2>Lotto Numbers</h2>
      <LottoNumbers setLottoNumbers={setLottoNumbers} />
      <div className="output">{lottoNumbers.join(", ")}</div>

      <h2>Click Counter</h2>
      <ClickCounter setCount={setCount} />
      <div className="output">Count: {count}</div>
    </div>
  );
};

export default App;
