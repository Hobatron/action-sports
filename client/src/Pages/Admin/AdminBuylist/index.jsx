import React, { Component } from 'react'
import { MDBRow, MDBInput, MDBCol, MDBInputSelect, MDBBtn } from 'mdbreact';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export class AdminBuylist extends Component {
    render() {
        return (
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
        );
        {/* Will map to show all available sets here*/ }
    }
}

export default AdminBuylist
