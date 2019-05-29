import React, { Component } from 'react';
import Calendar from 'react-big-calendar';
import { MDBPopover, MDBPopoverBody, MDBPopoverHeader } from 'mdbreact';
import './calendar.css';
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import api from "./api"
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const localizer = Calendar.momentLocalizer(moment);

class CalendarPage extends Component {
    state = {
        events: [],
        catagories: [
            "Show All", "Magic", "D&D", "Vangaurd", "Yu-Gi-Oh", "Board Games", "Starwars",
            "KeyForge", "Transformers"
        ],
        eventType: "",
        allEvents: [],
        eventColors: {
            "Magic": "rgb(106,82,52)",
            "D&D": "rgb(191,58,17)",
            "Vangaurd": "rgb(76,100,204)",
            "Yu-Gi-Oh": "rgb(184,44,129)",
            "Board Games": "orange",
            "Starwars": "rgb(4,205,6)",
            "Keyforge": "rgb(245,233,100)",
            "Transformers": "red"
        },
    };
    componentDidMount() {
        // console.log(this.state)
        api.get(
            (response) => {
                this.setState({
                    events: response,
                    allEvents: response
                })
            }
        )
    }
    handleEventClick = (event, e) => {
        
    }

    handleEventSelect = event => {
        const currentEvents = [];
        if (event.target.value === "Show All") {
            this.setState({
                events: this.state.allEvents,
                eventType: event.target.value
            })
        } else {
            for (let i = 0; i < this.state.allEvents.length; i++) {
                if (this.state.allEvents[i].eventType === event.target.value) {
                    currentEvents.push(this.state.allEvents[i])
                }
            }
            this.setState({
                events: currentEvents,
                eventType: event.target.value
            });
        }

    }
    eventStyleGetter = (event) => {
        const color = this.state.eventColors[event.eventType]
        var style = {
            backgroundColor: color,
            borderRadius: '0px',
            opacity: 0.8,
            border: '0px',
            display: 'block'
        };
        return {
            style: style
        };
    }
    time = (time) => {
        const hrs = time.split(":")
        if (hrs[0] > 12) {
            return `${hrs[0] - 12}:${hrs[1]} PM`
        } else if (hrs[0] === "12") {
            return `${time} PM`
        } else {
            return `${time} AM`
        }
    }
    convertCost = (cost) => {
        if (cost === 0) {
            return "Free"
        } else {
            return `$${cost.toFixed(2)}`
        }
    }
    eventElement = ({ event }) => {
        return (
            <MDBPopover
                className="z1"
                placement="top"
                popover
                clickable
                domElement
                isVisible={this.state.popoverVisible}
                id={event._id}
            >
                <div>
                    {event.title}
                </div>
                <div>
                    <MDBPopoverHeader><span>{event.title}</span><span className="float-right">{this.convertCost(event.cost)}</span></MDBPopoverHeader>
                    <MDBPopoverBody>
                        {this.time(event.startTime)}: {event.description}
                        <br />
                        <button className="eventRSVP btn ripple waves-effect">RSVP</button>
                    </MDBPopoverBody>
                </div>
            </MDBPopover>
        )
    }
    render() {
        return (
            <div>
                <FormControl id="eventSelect">
                    <div id="selection">
                        <InputLabel shrink htmlFor="select-multiple-native" id="inputLabel">
                        </InputLabel>
                        <div id="select-div">
                            Event Type<br /><br />
                            <Select
                                native
                                value={this.state.eventType}
                                onChange={this.handleEventSelect}
                            >
                                {this.state.catagories.map(name => {
                                    return (
                                        <option key={name} value={name}>
                                            {name}
                                        </option>
                                    )
                                })}
                            </Select>
                        </div>
                    </div>
                </FormControl>
                <div id="calendar">
                    <Calendar
                        localizer={localizer}
                        defaultDate={new Date()}
                        defaultView={"month"}
                        views={['month']}
                        components={{
                            event: this.eventElement
                        }}
                        events={this.state.events}
                        style={{ height: "85vh" }}
                        onSelectEvent={this.handleEventClick}
                        onSelectSlot={(this.slotSelected)}
                        eventPropGetter={(this.eventStyleGetter)}
                    />
                </div>

            </div>
        );
    }
}
export default CalendarPage;