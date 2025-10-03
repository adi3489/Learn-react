import ChildA from "./childA";
function App() {
  const name = "Aditya";
  return (
    <div className="App">
      <h1> Learning Prop Drilling Parent</h1>
      <ChildA name={name} />
    </div>
  );
}

export default App;
