import React, { useState} from 'react'
import '../App'

function Task_12() {
    const [day, setDay] = useState(new Date().getDate());
    const [month, setMonth] = useState(new Date().getMonth() + 1);
    const [year, setYear] = useState(new Date().getFullYear());

    const handleDayChange = (e) => {
        setDay(parseInt(e.target.value));
    }

    const handleMonthChange = (e) => {
        setMonth(parseInt(e.target.value));
    }

    const handleYearChange = (e) => {
        setYear(parseInt(e.target.value));
    }

    const getWeekday = () => {
        const date = new Date(year, month - 1, day); // ̳���� � JavaScript ����������� � 0
        const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const weekday = weekdays[date.getDay()]; // 0 - �����, 1 - ��������, � ��� ���
        return weekday;
    }

    return (
        <div className="Task, selectMargin">
            <select value={day} onChange={handleDayChange}>
                {/* �������� ����� ��� ������ ��� */}
                {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                    <option key={day} value={day}>{day}</option>
                ))}
            </select>
            <select value={month} onChange={handleMonthChange}>
                {/* �������� ����� ��� ������ ����� */}
                {Array.from({ length: 12 }, (_, i) => i + 1).map(month => (
                    <option key={month} value={month}>{month}</option>
                ))}
            </select>
            <select value={year} onChange={handleYearChange}>
                {/* �������� ����� ��� ������ ���� */}
                {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - 5 + i).map(year => (
                    <option key={year} value={year}>{year}</option>
                ))}
            </select>
            <p>Day of week: {getWeekday()}</p>
        </div>
    );
}
export default Task_12;