import React, { useState } from 'react'
import '../App'

function Task_7() {
    const [color, setColor] = useState('#000000');

    const handleColor = (e) => {
        setColor(e.target.value);
    }
    return (
        <div className="Task">
            <select className="selectMargin" defaultValue="Blue" value={color} onChange={handleColor}>
                <option disabled>Choose color</option>
                <option value="#000000">Black</option>
                <option value="#FF0000">Red</option>
                <option value="#00FF00">Green</option>
                <option value="#0000FF">Blue</option>
            </select>
            <p style={{ backgroundColor: color, color:'white' }}>Adaptive color change</p>
        </div>
    );
}
export default Task_7;