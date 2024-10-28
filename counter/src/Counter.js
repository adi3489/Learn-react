import { useState } from "react";
import Step from "./Step";
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Step />
      <button onClick={() => setCount(count - 1)}>-</button>Count:
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
export default Counter;
