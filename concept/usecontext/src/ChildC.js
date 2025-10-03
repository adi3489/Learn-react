import { useContext } from "react";
import { data, data2 } from "./App";
function ChildC() {
  const name = useContext(data);
  const gender = useContext(data2);
  return (
    <>
      <h1>
        Hi my name is {name} and my gender is {gender}
      </h1>
    </>
  );
}
export default ChildC;
