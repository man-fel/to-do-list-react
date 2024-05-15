import React from "react";
import { useState } from "react";

function InputArea(props){
    const[inputValue, setinputValue] = useState("");

    function handleChange(event){
        setinputValue(event.target.value)
    }
    
return(
    <div>
        <input type="text" name="fItem" value={inputValue} onChange={handleChange} />
        <button onClick={()=>{
            props.onAdd(inputValue);
            setinputValue("");
        }}>
        <span>Add</span>
        </button>
    </div>
)
}

export default InputArea;