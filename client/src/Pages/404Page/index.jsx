import React, { Component } from 'react'
import { MDBRow, MDBContainer, MDBCol } from "mdbreact"
import "./index.css"

export class page404 extends Component {
    render() {
        return (
            <MDBContainer className="wrapper">
                <MDBRow className="header">

                </MDBRow>
                <MDBRow>
                    This is a 404 page
                </MDBRow>

                <MDBRow bottom className="footer">

                </MDBRow>

            </MDBContainer>
        )
    }
}

export default page404
