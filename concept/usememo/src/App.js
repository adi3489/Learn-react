import { useState } from "react";
function App() {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);

  function multiply() {
    console.log("Multiply function called");
    return add * 10;
  }
  return (
    <div className="App">
      <h1> Learning UseMemo Hook</h1>
      {multiply()} <br />
      <button onClick={() => setAdd(add + 1)}>Addition</button>
      <span>{add}</span>
      <br />
      <button onClick={() => setMinus(minus - 1)}>Subtraction</button>
      <span>{minus}</span>
    </div>
  );
}

export default App;
//on subtarction also multiipy function is called because on every state change whole function is called
//to avoid this useMemo hook is used
//it will only call the function when the value in the dependency array changes
//syntax: const variable = useMemo( function, [dependency array])
// import { useState, useMemo } from "react";
// function App() {
//   const [add, setAdd] = useState(0);
//   const [minus, setMinus] = useState(100);

//   const multiply = useMemo(function multiply() {
//     console.log("Multiply function called");
//     return add * 10;
//   }, [add]);
//   return (
//     <div className="App">
//       <h1> Learning UseMemo Hook</h1>
//       {multiply} <br />
//       <button onClick={() => setAdd(add + 1)}>Addition</button>
//       <span>{add}</span>
//       <br />
//       <button onClick={() => setMinus(minus - 1)}>Subtraction</button>
//       <span>{minus}</span>
//     </div>
//   );
// }

// export default App;
