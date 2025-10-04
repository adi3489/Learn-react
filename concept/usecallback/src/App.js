import { useCallback, useState } from "react";
import ChildA from "./ChildA";

function App() {
  const [add, setAdd] = useState(0);
  const [count, setCount] = useState(1);
  console.log(count);
  const Learning = useCallback(() => {}, []);
  return (
    <div className="App">
      <h1> Learning Usecallback Hook</h1>
      <ChildA Learning={Learning} count={count} />
      {add}
      <h1>{count}</h1>
      <button onClick={() => setAdd(add + 1)}>Addition</button>
      <button onClick={() => setCount(count + 1)}>COUNT</button>
    </div>
  );
}

export default App;
