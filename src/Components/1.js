import React, { useState } from 'react'
import '../App.css'

function Task_1() {
    const [text, setText] = useState("");

    const handleText = (e) => {
        setText(e.target.value);
    }

    return (
        <div className="Task">
            <textarea placeholder="Enter text" onChange={handleText} className="txtarea" />
            <p>{text}</p>
        </div>
    );
};
export default Task_1;