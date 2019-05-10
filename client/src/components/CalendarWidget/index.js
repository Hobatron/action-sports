import React, { Component } from 'react';
import './CalendarWidget.css';
import IndividualEvent from '../IndividualEvent';
import api from './api';

class CalendarWidget extends Component {
    state={
        events: []
    }

    componentDidMount() {
        api.get((res) => {
            this.setState({
                events: res.data
            })
        })
    }

    render() {
    function time (time) {
        const hrs = time.split(":")
        if (hrs[0] > 12) {
            return `${hrs[0] - 12}:${hrs[1]} PM`
        } else if (hrs[0] === "12") {
            return `${time} PM`
        } else {
            return `${time} AM`
        }
    }
    function convertCost(cost) {
        if (cost === 0) {
            return "Free"
        } else {
            return `$${cost.toFixed(2)}`
        }
    }
    return (
    <div id="calendar-widget">
        <div id="calendar">
        <div id="weekly-events">
            Upcoming Events
        </div>
            {this.state.events.map(day => (
                day.map(event => {
                    return (
                    <IndividualEvent
                        key={event._id}
                        name={event.title}
                        time={time(event.startTime)}
                        date={event.start}
                        description={event.description}
                        cost={convertCost(event.cost)}
                    />
                    )
                })
            ))}
            
        </div>
    </div>
    )}
}

export default CalendarWidget;