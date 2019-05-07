import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';

import FacebookWidget from '../../components/FacebookWidget';
import CalendarWidget from '../../components/CalendarWidget';
import ReviewsWidget from '../../components/ReviewsWidget';
import CarouselWidget from '../../components/Carousel';
import EventsWidget from '../../components/EventsWidget';
import './Home.css';



export default withAuth(class Home extends Component {
      constructor(props) {
        super(props);
        this.state = { authenticated: null };
        this.checkAuthentication = this.checkAuthentication.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
      }
      
      checkAuthentication = async() => {
        const authenticated = await this.props.auth.isAuthenticated();
        if (authenticated !== this.state.authenticated) {
            this.setState({ authenticated });
        }
      }
      
      componentDidMount() {
        this.checkAuthentication();
      }
      
      componentDidUpdate() {
        this.checkAuthentication();
      }
      
      login() {
        this.props.auth.login('/');
      }
      
      logout() {
        this.props.auth.logout('/');
      }

      render(){
            if (this.state.authenticated === null) return null;
            
            const button = this.state.authenticated ?
            <button onClick={this.logout}>Logout</button> :
            <button onClick={this.login}>Login</button>;

            return (
                  <div className="container">
                        <div className="row">
                              <div className="col-sm-12 col-md-6 col-lg-4">
                                    <FacebookWidget />
                              </div>
                              <div className="col-sm-12 col-md-12 col-lg-8">
                                    <Carousel />
                              </div>

const Home = () => {
      return (
            <div className="container">
                  <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-4">
                              <FacebookWidget />
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-8">
                              <CarouselWidget />
                        </div>
                  </div>
                  <div className="row justify-content-end">
                        <div className="col-sm-12 col-md-6 col-lg-4">
                              <EventsWidget />

                        </div>
                        <div className="row justify-content-end">
                              <div className="col-sm-12 col-md-6 col-lg-4">
                                    <EventsWidget />
                              </div>
                              <div className="col-sm-12 col-md-6 col-lg-4 align-self-end">
                                    <CalendarWidget />
                              </div>
                        </div>
                        <div className="row justify-content-lg-center">
                              <div className="col-sm-12 col-md-6 col-lg-4 align-self-center">
                                    <ReviewsWidget />
                              </div>
                        </div>
                        
                        {button}
                   </div >
            );
      }
      
});
