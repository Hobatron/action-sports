import React, { Component } from 'react';
import Calendar from 'react-big-calendar';
import './calendar.css';
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import api from "./api"

const localizer = Calendar.momentLocalizer(moment);

class CalendarPage extends Component {
    state = {
        events: [
            {
                title: "Some title",
                start: "05-29-2019",
                end:"05-29-2019",
            }
        ]
    };

    componentDidMount() {
        // console.log(this.state)
        api.get(
            (response) => {
                this.setState({
                    events:response
                }, () => {
                    console.log(this.state.events)
                })
            }
        )
    }

    handleEventClick = event => {
        console.log(event)
    }

    render() {
        return (
            <div id= "calendar">
                    <Calendar
                        localizer={localizer}
                        defaultDate={new Date()}
                        defaultView={"month"}
                        views={['month']}
                        events={this.state.events}
                        style={{ height: "85vh" }}
                        onSelectEvent={this.handleEventClick}
                    />
            </div>
        );
    }
}

export default CalendarPage;