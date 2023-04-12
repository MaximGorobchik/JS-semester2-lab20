import React, { useState } from 'react'
import '../App'

function Task_9() {
    const [paragraph, setParagraph] = useState(false);

    const handleParagraph = (e) => {
        setParagraph(e.target.value);
    }
    return (
        <div className="Task, selectMargin">
            <select onChange={handleParagraph}>
                <option selected disabled>Choose paragraph</option>
                <option value="p1">Paragraph#1</option>
                <option value="p2">Paragraph#2</option>
                <option value="p3">Paragraph#3</option>
            </select>
            {paragraph === 'p1' && (<p>U chose paragraph#1!</p>)}
            {paragraph === 'p2' && (<p>U chose paragraph#2!</p>)}
            {paragraph === 'p3' && (<p>U chose paragraph#3!</p>)}
        </div>
    );
}
export default Task_9;