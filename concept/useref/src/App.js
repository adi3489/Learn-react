import { useRef, useState } from "react";
function App() {
  const refElement = useRef("");
  // console.log(refElement);

  const [name, setName] = useState("Aditya");

  function Reset() {
    setName("");
    refElement.current.focus();
  }

  return (
    <div className="App">
      <h1> Learning UseRef </h1>
      <input
        ref={refElement}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={Reset}>RESET</button>
    </div>
  );
}

export default App;

//useref is used to access a DOM element directly without re-rendering the component
// manipulate the DOM directly
