import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello React Counter</h1>
      <p>Counter : {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>INCREMENT</button>
      <button onClick={() => setCount((prev) => prev - 1)}>DECREMENT</button>
      <button onClick={() => setCount(0)}>RESET</button>
    </>
  );
}

export default App;
