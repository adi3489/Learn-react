import { data } from "./App";
function ChildC() {
  return (
    <>
      <h1> Child C Component</h1>
      <data.Consumer>
        {(name) => {
          return <h1>My name is {name}</h1>;
        }}
      </data.Consumer>
    </>
  );
}
export default ChildC;
