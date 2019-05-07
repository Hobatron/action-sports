import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
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

    return (<div id="as-nav-bar">
      <div className="container">
        <div id="title">ACTION SPORTS AND GAMING</div>
        <div id="menu">
           EVENTS | BUY LIST</div>

    return (
      <div id="as-nav-bar">
        <div className="container">
            <div id="title"><Link to="/">ACTION SPORTS AND GAMING</Link></div>
            <div id="menu"><Link to="/calendar">EVENTS</Link> | <Link to="/buylist">BUY LIST</Link> | <Link to="/admin">LOG-IN</Link></div>
        </div>
        <div id="address">6041 NE ANTIOCH RD GLADSTONE, MO 64119 | (816) 455-6319</div>

      </div>
    )
  }



}

export default Navbar;