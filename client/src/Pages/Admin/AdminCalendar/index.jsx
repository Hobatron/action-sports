import React, { Component } from 'react'
import { MDBRow, MDBInput, MDBCol, MDBInputSelect, MDBBtn } from 'mdbreact';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';
import axios from '../api';
import Calendar from 'react-big-calendar';
import './calendar.css';
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

const localizer = Calendar.momentLocalizer(moment);


function TabContainer(props) {
    const { children, dir } = props;

    return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 500,
        position: 'relative',
        minHeight: 200,
    }
});


export class AdminCalender extends Component {
    state = {
        catagories: [
            "Select One:", "Magic", "D&D", "Vangaurd", "Yu-Gi-Oh", "Board Games", "Starwars",
            "KeyForge", "Transformers"
        ],
        eventTitle: '',
        description: '',
        date: '',
        time: '12:00',
        eventType: '',
        selectedValue: '',
        value: 0,
        cost: 0,
        repeat: false,
        events: [],
    };

    componentDidMount() {
        axios.get("api/calendar/",
            (response) => {
                this.setState({
                    events: response
                }, () => {
                    console.log(this.state.events)
                })
            }
        )
    }

    handleEventClick = (event) => {
        console.log(event)
    }

    handleSubmit = () => {
        //NEED TO ADD VALIDATION
        axios.post('/api/calendar', this.state)
        this.setState({
            eventTitle: '',
            description: '',
            date: '',
            time: '12:00',
            eventType: '',
            selectedValue: '',
            value: 0,
            cost: 0,
            repeat: false
        })
    };

    getValue = value => this.setState({ cost: value });

    handleRepeatChange = event => {
        this.setState({
            repeat: !this.state.repeat
        });
    };

    handleChange = (event) => {
        let stateTarget = event.target.getAttribute("data-target") || event.target.id || "eventType";
        this.setState({ [stateTarget]: event.target.value });
    };

    handleTabChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };

    render() {
        const { classes, theme } = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleTabChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                    >
                        <Tab label="Add Event" />
                        <Tab label="Remove Event" />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={this.state.value}
                    onChangeIndex={this.handleChangeIndex}
                >
                    <TabContainer dir={theme.direction}>
                        <MDBInput label="Event Title" value={this.state.eventTitle} data-target={'eventTitle'} onChange={this.handleChange} className="d-inline-block" outline />
                        <MDBInput value={this.state.description} data-target={'description'} onChange={this.handleChange} type="textarea" label="Details" outline />
                        <MDBRow>
                            <MDBCol>
                                <TextField
                                    id="date"
                                    label="Date"
                                    type="date"
                                    value={this.state.date}
                                    data-target={'startDate'}
                                    onChange={this.handleChange}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </MDBCol>
                            <MDBCol>
                                <TextField
                                    id="time"
                                    label="Start Time"
                                    type="time"
                                    value={this.state.time}
                                    data-target={'startTime'}
                                    onChange={this.handleChange}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    inputProps={{
                                        step: 300, // 5 min
                                    }}
                                />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className="mt-2">
                            <MDBCol>
                                <FormControlLabel
                                    control={<Checkbox
                                        onChange={this.handleRepeatChange}
                                    />}
                                    label="Repeat"
                                />
                            </MDBCol>
                            <MDBCol>
                                Cost
                                <MDBInputSelect
                                    precision={2}
                                    value={this.state.cost}
                                    getValue={this.getValue}
                                    step={0.25}
                                    className="mb-2"
                                />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol>
                                <MDBBtn className="ml-2" onClick={this.handleSubmit} color="light-green">Add Event</MDBBtn>
                            </MDBCol>
                            <MDBCol>
                                <FormControl>
                                    <InputLabel shrink htmlFor="select-multiple-native">
                                        Event Type
                                    </InputLabel>
                                    <Select
                                        native
                                        value={this.state.eventType}
                                        onChange={this.handleChange}
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
                            </MDBCol>
                        </MDBRow>
                    </TabContainer>
                    <div className="test">
                        <TabContainer dir={theme.direction}>
                            {this.state.events.length > 0 &&
                                <div id="calendar">
                                    <Calendar
                                        localizer={localizer}
                                        defaultDate={new Date()}
                                        defaultView={"month"}
                                        views={['month']}
                                        events={this.state.events}
                                        style={{ height: "380px" }}
                                        onSelectEvent={this.handleEventClick}
                                        popup={true}
                                    />
                                </div>
                            }

                        </TabContainer>
                    </div>

                </SwipeableViews>
            </div>
        )
    }
}
export default withStyles(styles, { withTheme: true })(AdminCalender)
