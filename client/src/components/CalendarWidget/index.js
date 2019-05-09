import React, { Component } from 'react';
import './CalendarWidget.css';
import IndividualEvent from '../IndividualEvent';

class CalendarWidget extends Component {
    state={
        events: [
            {
                title: "event-one",
                time: "4:30",
                date: "05/01/2019",
                description: "Yu-Gi-Oh Tournament",
                cost: "$10"
            },
            {
                title: "event-two",
                time: "4:30",
                date: "05/02/2019",
                description: "Magic the Gathering",
                cost: "$50"
            }
        ]
    }

    render() {
    return (
    <div id="calendar-widget">
        <div id="calendar">
        <div id="weekly-events">
            Upcoming Events
        </div>
            {this.state.events.map(event => (
                <IndividualEvent 
                name={event.title}
                time={event.time}
                date={event.date}
                description={event.description}
                cost={event.cost}
                />
            ))}
            
        </div>
    </div>
    )}
}

export default CalendarWidget;