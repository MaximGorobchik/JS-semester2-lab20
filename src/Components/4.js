import React, { useState } from 'react'

function Task_4() {
    const [town, setTown] = useState("");

    const handleTown = (e) => {
        setTown(e.target.value);
    }
    return (
        <div className="Task">
            <select onChange={handleTown}>
                <option selected disabled>Choose town</option>
                <option>Kyiv</option>
                <option>Lviv</option>
                <option>Chernivtsi</option>
            </select>
            <p>{town}</p>
        </div>
    );
};
export default Task_4;