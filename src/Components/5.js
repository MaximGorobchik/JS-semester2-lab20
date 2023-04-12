import React, { useState } from 'react'

function Task_5() {
    const [option, setOption] = useState("");

    const handleInput = (e) => {
        setOption(e.target.value);
    }

    return (
        <div className="Task">
            <input type="radio" value="1" checked={option == 1} onChange={handleInput} />1
            <input type="radio" value="2" checked={option == 2} onChange={handleInput} />2
            <input type="radio" value="3" checked={option == 3} onChange={handleInput} />3
            <div className="Task">
                <p>{option}</p>
            </div>
        </div>
    );
};
export default Task_5;