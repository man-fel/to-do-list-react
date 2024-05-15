import React from "react";
import { useState } from "react";
import TodoItem from "./TodoItem";
import InputArea from "./InputArea";

function App() {
  const [items, setItem] = useState([]);

  function handleItem(inputValue){
    setItem((prevItems)=>{
      return [...prevItems, inputValue]
    })
}
function deleteItem(id){
  setItem((prevItems)=>{
    return prevItems.filter((item, index)=>{
      return index !== id;
    })
  })
}
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <InputArea
        onAdd={handleItem}
        />
      </div>
      <div>
        <ul>
            {items.map((todoItem, index) =>(
            <TodoItem
            key= {index}
            id= {index}
            text={todoItem}
            onChecked = {deleteItem}  
            />
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
