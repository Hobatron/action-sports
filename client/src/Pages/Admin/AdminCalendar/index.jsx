import React, { Component } from 'react'
import { MDBRow, MDBInput, MDBCol, MDBInputSelect, MDBBtn } from 'mdbreact';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

export class AdminCalender extends Component {
    state = {
        catagories: [
            "Magic", "D&D", "Vangaurd", "Yu-Gi-Oh", "Board Games", "Starwars",
            "KeyForge", "Transformers"
        ],
        selectedValue: '',
    };

    handleDateChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    render() {
        return (
            <MDBRow className="form-group pl-5 pr-5 pt-4">
                <div className="">
                    <span className="font-weight-bold">Add to Calendar</span>
                    <div className="pl-3 w-100 pr-3 border">
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
                    </div>
                </div>
            </MDBRow>
        )
    }
}

export default AdminCalender;
