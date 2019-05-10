import React, { Component } from 'react';
// import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import './Navbar.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';


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
            <div id="title"><Link class="link" to="/">ACTION SPORTS AND GAMING</Link></div>
            <div id="menu"><Link class="link" to="/calendar">EVENTS</Link> | <Link class="link" to="/buylist">BUY LIST</Link></div>
        </div>
        <div id="address"></div>

      </div>
    )
  }



}

export default Navbar;