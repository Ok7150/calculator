import { useState } from "react";

import "./App.css";
import Keys from "./component/Keys";

function App() {
  const [input, setInput] = useState("");

  const handleKeyPress = (key) => {
    if (key === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else if (key === "C") {
      setInput("");
    } else {
      setInput(input + key);
    }
  };

  return (
    <>
      <div className="calculator">
        <div className="display">{input}</div>
        <Keys onKeyPress={handleKeyPress} />
      </div>
    </>
  );
}

export default App;
