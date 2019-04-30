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
            "Magic", "D&D", "Vangaurd", "Yu-Gi-Oh", "Board Games", "Starwars",
            "KeyForge", "Transformers"
        ],
        selectedValue: '',
        value: 0,
    };

    handleDateChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    handleChange = (event, value) => {
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
                        onChange={this.handleChange}
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
                        <MDBInput label="Event Name" className="d-inline-block" outline />
                        <MDBInput type="textarea" label="Details" outline />
                        <MDBRow>
                            <MDBCol>
                                <TextField
                                    id="date"
                                    label="Date"
                                    type="date"
                                    defaultValue={null}
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
                                    defaultValue="12:00"
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
                                        onChange={this.handleDateChange('checkedA')}
                                        value="repeat"
                                        label="Male"
                                    />}
                                    label="Repeat"
                                />
                            </MDBCol>
                            <MDBCol>
                                Cost
                                            <MDBInputSelect
                                    precision={2}
                                    value={0}
                                    step={0.25}
                                    className="mb-2"
                                />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol>
                                <MDBBtn className="ml-2" color="light-green">Add Event</MDBBtn>
                            </MDBCol>
                            <MDBCol>
                                <FormControl>
                                    <InputLabel shrink htmlFor="select-multiple-native">
                                        Event Type
                                                </InputLabel>
                                    <Select
                                        multiple
                                        native
                                        inputProps={{
                                            id: 'select-multiple-native',
                                        }}
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
                    <TabContainer dir={theme.direction}>Item Two</TabContainer>
                </SwipeableViews>
            </div>
        )
    }
}
export default withStyles(styles, { withTheme: true })(AdminCalender)
