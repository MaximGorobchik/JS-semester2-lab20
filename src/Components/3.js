import React, { useState } from 'react'

function Task_3() {
    const [status, setStatus] = useState(false);
    const [text, setText] = useState("");

    const handleStatus = () => {
        setStatus(!status);
        setText("text");
    }
    return (
        <div className="Task">
            <input type="checkbox" onChange={handleStatus} />
            <p>{status ? text : ""}</p>
        </div>
    );
};
export default Task_3;