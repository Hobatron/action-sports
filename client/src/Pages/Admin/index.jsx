import React, { Component } from 'react'
import './admin.css'
import { MDBContainer, MDBRow, MDBInput, MDBBtn } from 'mdbreact';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import AdminCarousel from './AdminCarousel';
import AdminCalendar from './AdminCalendar';
import AdminBuylist from './AdminBuylist';



export class Admin extends Component {

    state = {
        catagories: [
            "Magic", "D&D", "Vangaurd", "Yu-Gi-Oh", "Board Games", "Starwars",
            "KeyForge", "Transformers"
        ],
        selectedValue: '',
    };

    getPickerValue = (value) => {
        console.log(value);
    };

    handleRadioChange = event => {
        console.log(this.state.selectedValue)
        this.setState({ selectedValue: event.target.value });
    };



    render() {
        return (
            <MDBContainer className="mt-5">
                <MDBRow className="form-group pl-5 pr-5 pt-4">
                    <div>
                        <div className="bshadow p-3 w-100 border">
                            <AdminCalendar />
                        </div>
                    </div>
                </MDBRow>
                <MDBRow className="font-weight-bold pl-5 pr-5 pt-4">
                    Space for editing upcoming events
                </MDBRow>
                <MDBRow className="font-weight-bold pl-5 pr-5 pt-4">
                    <div>
                        <div className="bshadow p-3 w-100 border">
                            <AdminCarousel />
                        </div>
                    </div>
                </MDBRow>
                <MDBRow className="pl-5 pr-5 pt-4">
                    <div>
                        <div className="bshadow p-3 border">
                            <AdminBuylist />
                        </div>
                    </div>
                </MDBRow>
                {/* Will map to show all available sets here*/}
                <MDBRow className="font-weight-bold pl-5 pr-5 pt-4 mb-5">
                    <div className="bshadow w-100 p-3 border">
                        <div className="p-3 w-100 white-bg">
                            <span className="font-weight-bold">Email Blast</span>

                            <form className="form-inline">
                                {this.state.catagories.map((catagory) => {
                                    return (
                                        <FormControlLabel
                                            key={catagory}
                                            control={
                                                <Radio className="radio"
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
                                    );
                                })}
                            </form>
                            <MDBInput type="textarea" label="Email" outline />
                            <MDBBtn className="ml-2" color="light-green">Add Event</MDBBtn>
                        </div>
                    </div>
                </MDBRow>
            </MDBContainer >
        );
    };
};

export default Admin;
