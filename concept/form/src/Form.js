import React, { useEffect } from "react";
import { useState } from "react";
const Form = () => {
  const data = {
    name: "",
    email: "",
    password: "",
  };
  const [inputData, setInputData] = useState(data);
  const [flag, setFlag] = useState(false);
  function handleData(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.log(inputData);
  }
  useEffect(() => {
    console.log("Registered");
  }, [flag]);

  function handleSumbit(e) {
    e.preventDefault();
    if (
      inputData.name === "" ||
      inputData.email === "" ||
      inputData.password === ""
    ) {
      alert("Please fill all the fields");
    } else {
      setFlag(true);
    }
  }
  return (
    <>
      {flag ? <h1>you have register succesfully {inputData.name}</h1> : ""}

      <form
        onSubmit={handleSumbit}
        style={{
          width: "300px",
          margin: "0 auto",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1>Registration Form</h1>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            value={inputData.name}
            onChange={handleData}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <input
            name="email"
            type="text"
            placeholder="Enter your Email"
            value={inputData.email}
            onChange={handleData}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <input
            name="password"
            type="text"
            placeholder="Enter your Password"
            value={inputData.password}
            onChange={handleData}
          />
        </div>

        <div style={{ textAlign: "center" }}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default Form;
