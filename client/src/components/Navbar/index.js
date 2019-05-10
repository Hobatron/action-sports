import React, { Component } from 'react';
// import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import './Navbar.css';
import { Link } from 'react-router-dom';


export class Navbar extends Component {
  state = {
    modal: false
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {

    return (
      <div id="as-nav-bar">
        <div className="container">
            <div id="title"><Link className="link" to="/">ACTION SPORTS AND GAMING</Link></div>
            <div id="menu"><Link className="link" to="/calendar">EVENTS</Link> | <Link className="link" to="/buylist">BUY LIST</Link></div>
        </div>
        <div id="address"></div>

      </div>
    )
  }



}

export default Navbar;