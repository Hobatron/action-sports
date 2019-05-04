import React from 'react';
import './individual-event.css';

const IndividualEvent = (props) => {
    return (
        <div id="individual-event">
        <div id="event-name">
            {props.name}<br />
        </div>
        <div id="event-time"> 
            {props.date} {props.time}
        </div>
        <div id="event-description">
            {props.description}
        </div>    
        <div id="event-cost">
            {props.cost}
        </div>
        </div>
    )
}

export default IndividualEvent;