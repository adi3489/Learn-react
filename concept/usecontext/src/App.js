import { createContext } from "react";
import ChildA from "./ChildA";

const data = createContext();
const data2 = createContext();

function App() {
  const name = "Aditya";
  const gender = "Male";
  return (
    <div className="App">
      <h1> Learning UseContext Hook</h1>
      <data.Provider value={name}>
        <data2.Provider value={gender}>
          <ChildA />
        </data2.Provider>
      </data.Provider>
    </div>
  );
}

export default App;
export { data, data2 };
