import React, {Component} from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import './Navbar.css';

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
        return (<div id ="as-nav-bar">
        <div className="container">
        <div id="title">ACTION SPORTS AND GAMING</div>
        <div id="menu">
             <span onClick={this.toggle}>Events</span>
             <MDBModal className="text-dark" isOpen={this.state.modal} toggle={this.toggle}>
               <MDBModalHeader toggle={this.toggle}>Events</MDBModalHeader>
               <MDBModalBody>
                type
               </MDBModalBody>
               <MDBModalFooter>
                 <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
               </MDBModalFooter>
             </MDBModal>| BUY LIST | LOG-IN</div>
        </div>
        <div id="address">6041 NE ANTIOCH RD GLADSTONE, MO 64119 | (816) 455-6319</div>
        </div>)
    }


   
}

export default Navbar;