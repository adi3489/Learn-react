import Child from "./child";
function App() {
  function getData(data) {
    console.log("Data from child", data);
  }
  return (
    <div className="App">
      <h1>Lifting Up State</h1>
      <Child getData={getData} />
    </div>
  );
}

export default App;
