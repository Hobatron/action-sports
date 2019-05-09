import React, { Component } from 'react';
import Calendar from 'react-big-calendar';
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
            "Show All", "Magic", "D&D", "Vangaurd", "Yu-Gi-Oh", "BoardGames", "Starwars",
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
                    events:response,
                    allEvents: response
                }, () => {
                    console.log(this.state.events)
                })
            }
        )
    }
    handleEventClick = event => {
        console.log(event)
    }
    handleEventSelect = event => {
        const currentEvents = [];
        if(event.target.value === "Show All"){
            this.setState({
                events: this.state.allEvents,
                eventType: event.target.value
            })
        }else{
            for(let i=0; i < this.state.events.length; i++){
                if(this.state.events[i].eventType === event.target.value){
                    currentEvents.push(this.state.events[i])
                }
            }
            this.setState({
                events: currentEvents,
                eventType: event.target.value
            });
        }
        
    }
    eventStyleGetter = (event, start, end, isSelected) => {
        console.log(event.eventType);
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
    render() {
        return (
            <div>
                <FormControl>
                <InputLabel shrink htmlFor="select-multiple-native">
                    Event Type
                </InputLabel>
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
                </FormControl>
                <div id= "calendar">
                         <Calendar
                            localizer={localizer}
                            defaultDate={new Date()}
                            defaultView={"month"}
                            views={['month']}
                            events={this.state.events}
                            style={{ height: "85vh" }}
                            onSelectEvent={this.handleEventClick}
                            onSelectSlot={(this.slotSelected)}
                            onSelectEvent={(this.eventSelected)}
                            eventPropGetter={(this.eventStyleGetter)}
                            />
                </div>
            </div>
        );
    }
}
export default CalendarPage;