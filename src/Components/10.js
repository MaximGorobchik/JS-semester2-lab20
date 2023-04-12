import React, { useState } from 'react'
import '../App'

function Task_10() {
    const [inputValue, setInputValue] = useState("");
    const [selectOptions, setSelectOptions] = useState([]);

    const handleInput = (e) => {
        setInputValue(e.target.value);
    }
    const handleOption = () => {
        if (inputValue) {
            setSelectOptions([...selectOptions, inputValue]);
            setInputValue("");
        }
    }
    return (
        <div className="Task">
            <input className="selectMargin" type="text" value={inputValue} placeholder="Enter text" onChange={handleInput}></input>
            <button onClick={handleOption}>Add to select</button>
            <select>
                {selectOptions.map((option, i) => (<option key={i} value={option}>{option}</option>))}
            </select>
        </div>
    );
}
export default Task_10;