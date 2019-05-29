import React, { Component } from 'react';
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput } from 'mdbreact';
import './Navbar.css';
import Snackbar from '@material-ui/core/Snackbar';
import { Link } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import api from './api.js';
import CustomSnackbar from '../Snackbar';

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
    snackOpen: false,
    snackVariant: "success",
    snackText: ""
  };

  submit = () => {
    if (this.state.interests.length > 0) {
      const { interests, email, name } = this.state;
      const dataToSend = {
        interests: interests,
        email: email,
        name: name,
      }
      api.post("/api/user", dataToSend, (res) => {
        if (res !== "err") {
          this.setState({
            modal: !this.state.modal,
            snackOpen: true,
            snackVariant: "success",
            snackText: "Thanks for signing up!",
            signedUp: true
          });
        } else {
          this.setState({
            modal: !this.state.modal,
            snackOpen: true,
            snackVariant: "danger",
            snackText: "Something goofed, contact an admin",
          })
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

  handleSnackToggle = () => {
    this.setState({
      snackOpen: !this.state.snackOpen,
    })
  }

  render() {

    return (
      <div>
        <div id="as-nav-bar">
          <div className="container">
            <Snackbar
              autoHideDuration={4000}
              open={this.state.snackOpen}
              anchorOrigin={{
                vertical: "top",
                horizontal: "center"
              }}
              onClose={this.handleSnackToggle}
            >
              <CustomSnackbar
                className="mt-3 font-bold"
                text={this.state.snackText}
                variant={this.state.snackVariant}
                onClose={this.handleSnackToggle}
              />
            </Snackbar>
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
                })}
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