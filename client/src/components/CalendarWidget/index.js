import React from 'react';
import './CalendarWidget.css';
import Calendar from 'react-calendar';

const CalendarWidget = () => {
    return <div id="calendar-widget">
        <div id="calendar">
            <Calendar />
        </div>
    </div>
}

export default CalendarWidget;