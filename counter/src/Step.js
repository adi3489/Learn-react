import { useState } from "react";

function Step() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      Step:{count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
export default Step;
