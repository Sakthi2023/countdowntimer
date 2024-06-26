import { useEffect } from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [seconds, setSeconds] = useState(1);
  useEffect(() => {
    let id = null;
    id = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);
    if (seconds === 0) clearInterval(id);
    return () => clearInterval(id);
  }, [seconds]);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Countdown Timer</h1>
      <div style={{ fontSize: "48px", margin: "20px" }}>{seconds}s</div>
      {seconds === 0 && <div>Times up!</div>}
    </div>
  );
}

export default App;
