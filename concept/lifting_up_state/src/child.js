import { useState } from "react";

function Child(props) {
  const [name, setName] = useState("Aditya");

  function handleSumbit(e) {
    e.preventDefault();
    props.getData(name);
  }
  return (
    <div>
      <form onSubmit={handleSumbit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <button>Sumbit</button>
      </form>
    </div>
  );
}
export default Child;
