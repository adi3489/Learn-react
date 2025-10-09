import React from "react";
import { useState } from "react";
const Todo = () => {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);
  function addActivity() {
    // setListData([...listData, activity]);
    // console.log(listData);
    setListData((listData) => {
      const updatedList = [...listData, activity];
      console.log(updatedList);
      setActivity("");
      return updatedList;
    });
  }
  function removeActivity(i) {
    const updatedListData = listData.filter((elem, id) => {
      return i != id;
    });
    setListData(updatedListData);
  }
  function removeAll() {
    setListData([]);
  }
  return (
    <div>
      <h1>TODO LIST</h1>
      <input
        type="text"
        placeholder="Add todo"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
      />
      <button onClick={addActivity}>ADD</button>
      <p>Here is the List</p>
      <p>
        {listData != [] &&
          listData.map((data, i) => {
            return (
              <div key={i}>
                <span>{data}</span>

                <button onClick={() => removeActivity(i)}>X</button>
              </div>
            );
          })}
      </p>
      {listData.length >= 1 && <button onClick={removeAll}>Remove ALL</button>}
    </div>
  );
};

export default Todo;
