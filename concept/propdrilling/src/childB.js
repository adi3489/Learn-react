import ChildC from "./childC";
function ChildB({ name }) {
  return (
    <>
      <h1> Child B Component</h1>
      <ChildC name={name} />
    </>
  );
}
export default ChildB;
