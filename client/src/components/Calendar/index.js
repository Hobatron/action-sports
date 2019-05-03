import React, { Component } from 'react';
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import Calendar from "react-big-calendar";


class Calendar2 extends Component {
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
        <div className="fullCalendar">
          <Calendar
            localizer={localizer}
            defaultDate={new Date()}
            defaultView="month"
            events={this.state.events}
            style={{ height: "100vh" }}
          />
        </div>
      );
    }
  }

export default Calendar2;