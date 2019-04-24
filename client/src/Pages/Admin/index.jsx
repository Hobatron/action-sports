import React, { Component } from 'react'
import './admin.css'
import { MDBContainer, MDBRow, MDBInput, MDBCol, MDBInputSelect, MDBBtn } from 'mdbreact';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

export class Admin extends Component {

    state = {
        catagories: [
            "magic", "d&d"
        ],
        selectedValue: 'a',
    };


    getPickerValue = (value) => {
        console.log(value);
    };

    handleDateChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };
    handleRadioChange = event => {
        console.log(this.state.selectedValue)
        this.setState({ selectedValue: event.target.value });
    };

    render() {
        return (
            <MDBContainer className="mt-5 white-bg">
                <MDBRow className="form-group pl-5 pr-5 pt-4">
                    <div className="">
                        <span className="font-weight-bold">Add to Calendar</span>
                        <div className="pl-3 w-100 pr-3 border">
                            <MDBInput required={true} label="Event Name" className="d-inline-block" outline />
                            <MDBInput required={true} type="textarea" label="Details" outline />
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
                                        value={10}
                                        step={0.25}
                                        className="mb-2"
                                    />
                                </MDBCol>
                            </MDBRow>
                            <MDBBtn color="light-green">Add Event</MDBBtn>
                        </div>
                    </div>
                </MDBRow>
                <MDBRow className="font-weight-bold pl-5 pr-5 pt-4">
                    Space for editing upcoming events
                </MDBRow>
                <MDBRow className="font-weight-bold pl-5 pr-5 pt-4">
                    Space for editing carousel
                </MDBRow>
                <MDBRow className="pl-5 pr-5 pt-4">
                    <div>
                        <span className="font-weight-bold">Add to Buylist</span>
                        <div className="pl-3 pr-3 border">
                            <MDBRow>
                                <MDBCol>
                                    <MDBInput required={true} label="Card Name" className="d-inline-block" outline />
                                </MDBCol>
                                <MDBCol className="mt-3">
                                    <FormControlLabel className=""
                                        control={<Checkbox
                                            onChange={this.handleDateChange('set')}
                                            value="repeat"
                                            label="Male"
                                        />}
                                        label="All sets"
                                    />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol>
                                    Paying
                                <MDBInputSelect
                                        precision={2}
                                        value={10}
                                        step={0.25}
                                        className="mb-2"
                                    />
                                </MDBCol>
                            </MDBRow>
                            <MDBBtn color="light-green">Add card</MDBBtn>
                        </div>
                    </div>
                </MDBRow>
                {/* Will map to show all available sets here*/}
                <MDBRow className="font-weight-bold pl-5 pr-5 pt-4">
                    <div>
                        <span className="font-weight-bold">Email Blast</span>
                        <div className="pl-3 pr-3 border">
                            <RadioGroup>
                                {this.state.catagories.map((catagory) => {
                                    return (
                                        <FormControlLabel
                                            key={catagory}
                                            control={
                                                <Radio
                                                    checked={this.state.selectedValue === `${catagory}`}
                                                    onChange={this.handleRadioChange}
                                                    value={catagory}
                                                    name="radio-button-demo"
                                                    aria-label="A"
                                                />
                                            }
                                            label={`${catagory}`}
                                            labelPlacement="end"
                                        />
                                    )
                                })}
                            </RadioGroup>
                            <MDBInput required={true} type="textarea" label="Email" outline />
                        </div>
                    </div>
                </MDBRow>
            </MDBContainer>
        );
    };
};

export default Admin;
