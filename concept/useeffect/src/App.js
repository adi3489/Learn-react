import { useState, useEffect } from "react";
function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState("Nisha");

  // useEffect(() => {
  //   console.log("Use Effect called");
  // },);       // runs on every render

  //   useEffect(() => {
  //   console.log("Use Effect called");
  // }, []);    // runs only once when the component mounts

  useEffect(() => {
    console.log("Use Effect called");
  }, [data]); // runs only when 'data' changes

  function updateState() {
    setCount(count + 1);
    console.log(count);
  }

  function updateData() {
    setData("Aditya");
  }

  return (
    <div className="App">
      <h1> Learning State {count}</h1>
      <button onClick={updateState}>Click me</button>
      <h1>{data}</h1>
      <button onClick={updateData}>Update Data </button>
    </div>
  );
}

export default App;
