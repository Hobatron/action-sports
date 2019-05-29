import React, { Component } from 'react'
import { withAuth } from '@okta/okta-react';
import './admin.css'
import { MDBContainer, MDBRow, MDBInput, MDBBtn } from 'mdbreact';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import AdminCarousel from './AdminCarousel';
import AdminCalendar from './AdminCalendar';
import AdminBuylist from './AdminBuylist';
import CustomSnackbar from '../../components/Snackbar';
import Snackbar from '@material-ui/core/Snackbar';
import api from './api'


export default withAuth(class Admin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            catagories: [
                "Magic", "D&D", "Vangaurd", "Yu-Gi-Oh", "Board Games", "Starwars",
                "KeyForge", "Transformers"
            ],
            selectedInterest: '',
            authenticated: null,
            snackOpen: false,
            snackVariant: "success",
            snackText: "Item added!"
        };
        this.checkAuthentication = this.checkAuthentication.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }


    checkAuthentication = async () => {
        const authenticated = await this.props.auth.isAuthenticated();
        if (authenticated !== this.state.authenticated) {
            this.setState({ authenticated });
        };
    };

    componentDidMount() {
        this.checkAuthentication();
    };

    componentDidUpdate() {
        this.checkAuthentication();
    };

    login() {
        this.props.auth.login('/');
    };

    logout() {
        this.props.auth.logout('/');
    };

    getPickerValue = (value) => {

    };

    handleEmailPull = () => {
        api.get(`/api/user/${this.state.selectedInterest}`, (results) => {
            let emails = results.map(user => {
                return user.email + " ";
            });
            this.setState({
                emails: emails,
            });
        });
    };

    handleRadioChange = event => {
        this.setState({ selectedInterest: event.target.value });
    };

    handleSnackToggle = () => {
        this.setState({
            snackOpen: !this.state.snackOpen,
        });
    };

    render() {
        if (this.state.authenticated === null) return null;

        const button = this.state.authenticated ?
            <button onClick={this.logout}>Logout</button> :
            <button onClick={this.login}>Login</button>;

        return (
            <MDBContainer className="mt-5">
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
                <MDBRow className="form-group pl-5 pr-5 pt-4">
                    <div>
                        <div className="bshadow p-3 w-100 border">
                            <AdminCalendar onAdd={this.handleSnackToggle} />
                        </div>
                    </div>
                </MDBRow>
                <MDBRow className="font-weight-bold pl-5 pr-5 pt-4">
                </MDBRow>
                <MDBRow className="font-weight-bold pl-5 pr-5 pt-4">
                    <div>
                        <div className="bshadow p-3 w-100 border">
                            <AdminCarousel onAdd={this.handleSnackToggle} />
                        </div>
                    </div>
                </MDBRow>
                <MDBRow className="pl-5 pr-5 pt-4">
                    <div>
                        <div className="bshadow p-3 border">
                            <AdminBuylist onAdd={this.handleSnackToggle} />
                        </div>
                    </div>
                </MDBRow>
                {/* Will map to show all available sets here*/}
                <MDBRow className="font-weight-bold pl-5 pr-5 pt-4 mb-5">
                    <div className="bshadow w-100 p-3 border">
                        <div className="p-3 w-100 white-bg">
                            <span className="font-weight-bold">Email Blast</span>

                            <form className="form-inline">
                                {this.state.catagories.map((catagory) => {
                                    return (
                                        <FormControlLabel
                                            key={catagory}
                                            control={
                                                <Radio className="radio"
                                                    checked={this.state.selectedInterest === `${catagory}`}
                                                    onChange={this.handleRadioChange}
                                                    value={catagory}
                                                    name="radio-button-demo"
                                                    aria-label="A"
                                                />
                                            }
                                            label={`${catagory}`}
                                            labelPlacement="end"
                                        />
                                    );
                                })}
                            </form>
                            <div className="email-display">{this.state.emails}</div>
                            <MDBBtn className="ml-2" color="light-green" onClick={this.handleEmailPull}>Pull emails</MDBBtn>
                        </div>
                    </div>
                </MDBRow>
                {button}
            </MDBContainer >
        );
    };
});