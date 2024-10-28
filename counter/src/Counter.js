import { useState } from "react";
import Step from "./Step";
function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date("October 28 2024");
  date.setDate(date.getDate() + count);
  return (
    <div>
      <div>
        <button onClick={() => setStep(step - 1)}>-</button>
        Step:{step}
        <button onClick={() => setStep(step + 1)}>+</button>
      </div>
      <button onClick={() => setCount(count - step)}>-</button>Count:
      {count}
      <button onClick={() => setCount(count + step)}>+</button>
      <p>
        <span>
          {count === 0
            ? "Today is"
            : count > 0
            ? `${count} days from today is`
            : `${count} days ago was`}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
export default Counter;
