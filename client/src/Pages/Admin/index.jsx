import React, { Component } from 'react'
import './admin.css'
import { MDBContainer, MDBRow, MDBInput, MDBCol, MDBInputSelect, MDBBtn } from 'mdbreact';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import AAddRemoveCarousel from './AAddRemoveCarousel';
import AdminCalendar from './AdminCalendar';



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

    handleSetChange = event => {
        console.log(event)
    }

    render() {
        return (
            <MDBContainer className="mt-5 white-bg">
                <AdminCalendar />
                <MDBRow className="font-weight-bold pl-5 pr-5 pt-4">
                    Space for editing upcoming events
                </MDBRow>
                <MDBRow className="font-weight-bold pl-5 pr-5 pt-4">
                    <div className="">
                        <span className="font-weight-bold"></span>
                        <div className="pl-3 w-100 pr-3 border">
                            <AAddRemoveCarousel>
                            </AAddRemoveCarousel>
                        </div>
                    </div>
                </MDBRow>
                <MDBRow className="pl-5 pr-5 pt-4">
                    <div>
                        <span className="font-weight-bold">Add to Buylist</span>
                        <div className="pl-3 pr-3 border">
                            <MDBRow>
                                <MDBCol>
                                    <MDBInput label="Card Name" className="d-inline-block" outline />
                                </MDBCol>
                                <MDBCol className="mt-3">
                                    <FormControlLabel className=""
                                        control={<Checkbox
                                            onChange={this.handleSetChange('set')}
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
                    <div className="w-100">
                        <span className="font-weight-bold">Email Blast</span>
                        <div className="pl-3 w-100 pr-3 border">
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
                        </div>
                    </div>
                </MDBRow>
            </MDBContainer>
        );
    };
};

export default Admin;
