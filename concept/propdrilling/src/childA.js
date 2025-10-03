import ChildB from "./childB";
function ChildA({ name }) {
  return (
    <>
      <h1> Child A Component</h1>
      <ChildB name={name} />
    </>
  );
}
export default ChildA;
