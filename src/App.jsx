import "./App.css";

function App() {
  const seconds = 60;

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Countdown Timer</h1>
      <div style={{ fontSize: "48px", margin: "20px" }}>{seconds}s</div>
      {seconds === 0 && <div>Time's up!</div>}
    </div>
  );
}

export default App;
