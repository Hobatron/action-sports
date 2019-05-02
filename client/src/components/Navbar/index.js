import React, { Component } from 'react';
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import './Navbar.css';

export class Navbar extends Component {
  state = {
    modal1: false,
    modal2: false
  }

  toggle1 = () => {
    this.setState({
      modal1: !this.state.modal1
    });
  };
  toggle2 = () => {
    this.setState({
      modal2: !this.state.modal2
    });
  }
  render() {
    return (<div id="as-nav-bar">
      <div className="container">
        <div id="title">ACTION SPORTS AND GAMING</div>
        <div id="menu">
          <span onClick={this.toggle1}>EVENTS </span>
          <MDBModal className="text-dark modal-lg"  isOpen={this.state.modal1} toggle={this.toggle1}>
            <MDBModalHeader className="modalTitle" toggle={this.toggle1}>Events</MDBModalHeader>
            <MDBModalBody>
              I am going to be a calendar!
               </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={this.toggle1}>Close</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
          | BUY LIST
             <span onClick={this.toggle2}>| LOG-IN</span>
          <MDBModal className="text-dark" isOpen={this.state.modal2} toggle={this.toggle2}>
            <MDBModalHeader toggle={this.toggle2}>Account</MDBModalHeader>
            <MDBModalBody>
            Email: 
            <input name="emailLogIn" placeholder="JohnDoe@gmail.com"></input>
            <br/>
            Password: 
            <input name="passwordLogIn" placeholder="JohnDoePassword"></input>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={this.toggle2}>Close</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </div>
      </div>
      <div id="address">6041 NE ANTIOCH RD GLADSTONE, MO 64119 | (816) 455-6319</div>
    </div>)
  }



}

export default Navbar;