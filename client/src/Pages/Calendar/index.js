import React, { Component } from 'react';
import Calendar from 'react-big-calendar';
import { MDBPopover, MDBPopoverBody, MDBPopoverHeader, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput, MDBBtn } from 'mdbreact';
import './calendar.css';
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import api from "./api"
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import client from 'braintree-web/client';
import paypalCheckout from 'braintree-web/paypal-checkout';
import paypal from 'paypal-checkout';

const localizer = Calendar.momentLocalizer(moment);

class CalendarPage extends Component {
    state = {
        selectedEvent: { cost: 1 },
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
        modal: true,
        name: "",
        email: "",
        hide: "rsvpModal",
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    componentDidMount() {
        api.get("/api/client_token", (token) => {
            paypal.Button.render({
                braintree: {
                    client: client,
                    paypalCheckout: paypalCheckout
                },
                client: {
                    production: token,
                    sandbox: token
                },
                env: "sandbox",
                commit: true,

                payment: (data, actions) => {
                    return actions.braintree.create({
                        flow: 'checkout', // Required
                        amount: this.state.selectedEvent.cost, // Required
                        currency: 'USD', // Required
                        enableShippingAddress: false,
                    });
                },
                onAuthorize: (payload) => {
                    let { title, cost } = this.state.selectedEvent;
                    payload.descriptor = `${title}`;
                    payload.paymentMethod = payload.nonce;
                    payload.amount = cost;
                    console.log(payload)
                    api.post("/api/transaction", payload, (res) => {
                        console.log(res)
                    })
                }
            }, '#paypal-button');
        });

        api.get("/api/calendar", (response) => {
            this.setState({
                events: response,
                allEvents: response,
            });
        })
    };
    handleEventClick = (event, e) => {
        this.setState({
            selectedEvent: event,
            hide: "",
        })
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
                        <button onClick={this.toggle} className="eventRSVP btn ripple waves-effect">RSVP</button>
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
                <div className={this.state.hide}>
                    <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                        <MDBModalHeader toggle={this.toggle}>{this.state.selectedEvent.title}</MDBModalHeader>
                        <MDBModalBody>
                            <div>{this.state.selectedEvent.description}</div>
                            <MDBInput label="Your name" value={this.state.name} data-target={'name'} onChange={this.handleChange} className="d-inline-block" outline />
                            <MDBInput label="Your email" value={this.state.email} data-target={'email'} onChange={this.handleChange} className="d-inline-block" outline />
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="secondary" onClick={this.toggle}>Cancel</MDBBtn>
                            {`$${this.state.selectedEvent.cost.toFixed(2)}`}
                            <div id="paypal-button"></div>
                        </MDBModalFooter>
                    </MDBModal>
                </div>
            </div>
        );
    }
}
export default CalendarPage;