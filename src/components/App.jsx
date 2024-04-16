import React from "react";
import { useState } from "react";

function App() {
    const[inputValue, setinputValue] = useState("");
    const [items, setItem] = useState([]);

    function handleChange(event){
        setinputValue(event.target.value)
    }
    function handleItem(){
        setItem((prevItems)=>{
          return [...prevItems, inputValue]
        })
    setinputValue("");
    }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" name="fItem" value={inputValue} onChange={handleChange} />
        <button onClick={handleItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
            {items.map(todoItem => <li>{todoItem}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
