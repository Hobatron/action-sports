import React, { Component } from 'react'
import { MDBContainer } from "mdbreact"
import "./index.css"
import totallyLost from "../../components/images/404img.JPG"
import logo from "../../components/images/ASLogo_Alpha.png"
import { Link } from 'react-router-dom';


export class page404 extends Component {
    render() {
        return (
            <MDBContainer className="wrapper404">
                <div className="top404 text-center">
                    <img alt="Action Sports" src={logo} />
                </div>
                <div className="middle404 text-center">
                    404
                    <br />
                    You seem...
                    <img alt="Totally lost" src={totallyLost} />
                </div>
                <Link className="link" to="/">
                    <div className="text-center bottom404">
                        <div className="">Home</div>
                    </div>
                </Link>

            </MDBContainer>
        )
    }
}

export default page404
