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
            }, () => {
                console.log(this.state)
            })
        })
    }

    render() {
    function time (time) {
        const hrs = time.split(":")
        if (hrs[0] > 12) {
            return `${hrs[0] - 12}:${hrs[1]} PM`
        } else {
            return `${time} AM`
        }
    }
    return (
    <div id="calendar-widget">
        <div id="calendar">
        <div id="weekly-events">
            Upcoming events:
        </div>
            {this.state.events.map(day => (
                day.map(event => {
                    return (
                    <IndividualEvent 
                        name={event.title}
                        time={time(event.startTime)}
                        date={event.start}
                        description={event.description}
                        cost={event.cost || "Free"}
                    />
                    )
                })
            ))}
            
        </div>
    </div>
    )}
}

export default CalendarWidget;