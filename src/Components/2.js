import React, { useState } from 'react'

function Task_2() {
    const [status, setStatus] = useState(false);

    const handleStatus = () => {
        setStatus(!status);
    }

    return (
        <div className="Task">
            <input type="checkbox" onChange={handleStatus} />
            <p>{status ? 'checked' : 'uncheked'}</p>
        </div>
    );
};
export default Task_2;