import { useState } from "react";

function Step() {
  const [step, setStep] = useState(1);

  return (
    <div>
      <button onClick={() => setStep(step - 1)}>-</button>
      Step:{step}
      <button onClick={() => setStep(step + 1)}>+</button>
    </div>
  );
}
export default Step;
