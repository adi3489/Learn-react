import React, { useState } from "react";
function App() {
  const [name, setName] = React.useState("Aditya");
  const [password, setPassword] = useState("12345");
  function handleChange(e) {
    if (e.target.name == "firstname") {
      console.log(e.target.name);
      const capname = e.target.value.toUpperCase();
      setName(capname);
    } else {
      setPassword(e.target.value);
    }
  }
  // function handlePassword(e) {
  //   setPassword(e.target.value);
  // }
  return (
    <>
      <form>
        <label>First name:</label>
        <br />
        <input
          type="text"
          name="firstname"
          value={name}
          // onChange={(e) => setName(e.target.value)}
          onChange={handleChange}
        />{" "}
        <br />
        <label>Password:</label>
        <br />
        <input
          type="text"
          name="password"
          value={password}
          // onChange={(e) => setName(e.target.value)}
          // onChange={handlePassword}
          onChange={handleChange}
        />
        <br />
        {/* <label>Last name:</label><br/>
    <input type="text" name="lastname"/><br/><br/>
    <input type="submit" value="Submit"/> */}
      </form>
    </>
  );
}

export default App;
