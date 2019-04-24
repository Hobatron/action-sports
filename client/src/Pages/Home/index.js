import React, { Component } from "react";
import FacebookWidget from '../../components/FacebookWidget';
import CalendarWidget from '../../components/CalendarWidget';
import ReviewsWidget from '../../components/ReviewsWidget';
import Carousel from '../../components/Carousel';
import './Home.css';


const Home = () => {
      return (
            <div className="container">
                  <div className="row">
                        <div className="col-6">
                        </div>
                        <div className="col-6">
                              <Carousel />
                        </div>
                  </div>
                  <div className="row">
                        <div className="col-4">
                              <FacebookWidget />
                        </div>
                        <div className="col-4">
                              <CalendarWidget />
                        </div>
                        <div className="col-4">
                              <ReviewsWidget />
                        </div>
                  </div>
            </div >
      );
};

export default Home;