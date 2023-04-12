import React, { useState } from 'react'
import '../App'

function Task_11() {
    const [status, setStatus] = useState(false);
    const handleStatus = (e) => {
        setStatus(!status);
    }

    return (
        <div className="Task">
            <input type="checkbox" className="selectMargin" onChange={handleStatus}></input>
            <input type="text" disabled={!status}></input>
            {/*{status ? <input type="text"></input> : <input type="text" disabled></input>}*/}
        </div>
    );
}
export default Task_11;