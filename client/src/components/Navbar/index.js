import React, { Component } from 'react';
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput } from 'mdbreact';
import './Navbar.css';
import { Link } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox'
import api from './api.js'

export class Navbar extends Component {
  state = {
    modal: false,
    catagories: [
      "Magic", "D&D", "Vangaurd", "Yu-Gi-Oh", "Board Games", "Starwars",
      "KeyForge", "Transformers"
    ],
    interests: [],
    email: "",
    name: "",
    signedUp: false,
  };

  submit = () => {
    if (this.state.interests.length > 0) {
      api.post("/api/user", this.state, (res) => {
        if (res) {
          this.setState({
            modal: !this.state.modal,
            signedUp: true
          });
        } else {
          //error
        }
      });
    } else {
      //must sign up for at least 1!
    }
  }

  toggle = () => {
    if (!this.state.signedUp) {
      this.setState({
        modal: !this.state.modal
      });
    } else {
      //already signed up!
    }
  };

  handleChange = (event) => {
    let stateTarget = event.target.getAttribute("data-target") || event.target.id || "eventType";
    this.setState({ [stateTarget]: event.target.value });
  };

  handleCheck = (event) => {
    const clicked = event.target.value;
    let current = this.state.interests;
    if (current.indexOf(clicked) > -1) {
      current = current.filter(catagory => catagory !== clicked);
    } else {
      current.push(clicked);
    };
    this.setState({
      interests: current,
    });

  };

  render() {

    return (
      <div>
        <div id="as-nav-bar">
          <div className="container">
            <div id="title"><Link className="link" to="/">ACTION SPORTS AND GAMING</Link></div>
            <div id="menu">
              <Link className="link" to="/calendar">EVENTS</Link> | <Link className="link" to="/buylist">BUY LIST</Link> | <span onClick={this.toggle} >NEWS LETTER</span>
            </div>
          </div>
          <div id="address"></div>
        </div>
        <MDBModal className="signupModal" isOpen={this.state.modal} toggle={this.toggle}>
          <MDBModalHeader toggle={this.toggle}>Sign up for upcoming news on your favorite things!</MDBModalHeader>
          <MDBModalBody>
            <MDBInput label="Your name" value={this.state.name} data-target={'name'} onChange={this.handleChange} className="d-inline-block" outline />
            <MDBInput label="Your email" value={this.state.email} data-target={'email'} onChange={this.handleChange} className="d-inline-block" outline />

            <FormControl component="fieldset">
              <FormGroup>
                {this.state.catagories.map(catagory => {
                  return (
                    <FormControlLabel
                      key={catagory}
                      control={<Checkbox onChange={this.handleCheck} value={catagory} />}
                      label={catagory}
                    />
                  )
                })
                }
              </FormGroup>
            </FormControl>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle}>Cancel</MDBBtn>
            <MDBBtn color="primary" onClick={this.submit}>Sign up!</MDBBtn>
          </MDBModalFooter>
        </MDBModal>

      </div >

    )
  }



}

export default Navbar;