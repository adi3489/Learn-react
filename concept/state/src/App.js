import { useState } from "react";
function App() {
  // let x = 10;
  // function updateState() {
  //   x = x + 1;
  //   console.log(x);
  const [count, setCount] = useState(0);
  function updateState() {
    setCount(count + 1);
    console.log(count);
  }

  return (
    <div className="App">
      <h1> Learning State {count}</h1>
      <button onClick={updateState}>Click me</button>
    </div>
  );
}

export default App;
