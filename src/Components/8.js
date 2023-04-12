import React, { useState } from 'react'
import '../App'

function Task_8() {
    const [status, setStatus] = useState(false);

    const handleStatus = (e) => {
        const value = e.target.value;
        if (value === 'NotChecked') {
            setStatus(false);
        }
        else {
            setStatus(true);
        }
    }
    return (
        <div className="Task">
            <select onChange={handleStatus}>
                <option selected>NotChecked</option>
                <option>Checked</option>
            </select>
            <input type="checkbox" checked={status} onChange={() => setStatus(!status)} disabled></input>
        </div>
    );
}
export default Task_8;