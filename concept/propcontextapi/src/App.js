import { createContext } from "react";
import ChildA from "./ChildA";

const data = createContext();
function App() {
  const name = "Aditya";
  return (
    <div className="App">
      <h1> Learning Prop Drilling Parent</h1>
      <data.Provider value={name}>
        <ChildA />
      </data.Provider>
    </div>
  );
}

export default App;
export { data };
// Context API
// create,provider,consumer
//problematic-YES - data consumer can accept only a function
// it become a callbackHell
