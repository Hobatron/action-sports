import React, { Component } from "react";
import FacebookWidget from '../components/FacebookWidget';
import CalendarWidget from '../components/CalendarWidget';
import ReviewsWidget from '../components/ReviewsWidget';
import Carousel from '../components/Carousel';
import './Home.css';


const Home = () => {
      return (
            <div className="container">
                  <div className="row">
                        <div className="col-sm-4 col-med-4 col-lg-4 col-xl">
                              <div className="row">
                                    <FacebookWidget />
                              </div>
                              <div className="row">
                                    <CalendarWidget />
                              </div>
                              <div className="row">
                                    <ReviewsWidget />
                              </div>
                        </div>
                        <div className="col-sm-8 col-med-8 col-lg-8 col-xl-8">
                              <Carousel />
                        </div>
                  </div>
            </div>
      );
};

export default Home;