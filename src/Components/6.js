import React, { useState } from 'react'
import '../App'

function Task_6() {
    const [text, setText] = useState([]);
    const [textareaValue, setTextareaValue] = useState('');
    const handleText = (e) => {
        setTextareaValue(e.target.value);
    }
    const handleButton = () => {
        setText([...text, textareaValue]);
    }
    return (
        <div className="Task">
            <textarea placeholder="Enter text" className="txtarea" value={textareaValue} onChange={handleText}></textarea>
            <button onClick={handleButton}>Add text</button>
            {text.map((t, i) => (<li key={i}>{t}</li>))}
        </div>
    );
}
export default Task_6;