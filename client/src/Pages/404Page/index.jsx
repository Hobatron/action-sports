import React, { Component } from 'react'
import { MDBContainer } from "mdbreact"
import "./index.css"
import totallyLost from "../../components/images/404img.JPG"
import logo from "../../components/images/ASLogo_Alpha.png"
import { Link } from 'react-router-dom';


export class page404 extends Component {
    render() {
        return (
            <MDBContainer className="wrapper">
                <div className="top text-center">
                    <img src={logo} />
                </div>
                <div className="middle text-center">
                    404
                    <br />
                    You seem...
                    <img src={totallyLost} />
                </div>
                <Link className="link" to="/">
                    <div className="text-center bottom">
                        <div className="">Home</div>
                    </div>
                </Link>

            </MDBContainer>
        )
    }
}

export default page404
