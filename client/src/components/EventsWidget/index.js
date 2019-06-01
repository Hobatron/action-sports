import React from 'react';
import './EventsWidget.css';
import { Link } from 'react-router-dom';

const EventsWidget = () => {
    return (
        <div id="events-widget">
            RSVP For<br />
            Upcoming<br />
            Events Now!
        <br />
            <Link to="/calendar"><button>Calander</button></Link>
        </div>
    )
}

export default EventsWidget;