import React, { Component } from 'react';
import Calendar from 'react-big-calendar';
import './calendar.css';
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

const localizer = Calendar.momentLocalizer(moment);

class CalendarPage extends Component {
    state = {
        events: [
            {
                title: "Some title",
                start: "04/29/2019",
                end: new Date(moment().add(1, "days"))

            }
        ]
    };

    render() {
        return (
            <div id= "calendar">
                    <Calendar
                        localizer={localizer}
                        defaultDate={new Date()}
                        defaultView={"month"}
                        views={['month']}
                        events={this.state.events}
                        style={{ height: "75vh" }}
                        
                    />
            </div>
        );
    }
}

export default CalendarPage;