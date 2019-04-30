import React from "react";
import FacebookWidget from '../../components/FacebookWidget';
import CalendarWidget from '../../components/CalendarWidget';
import ReviewsWidget from '../../components/ReviewsWidget';
import Carousel from '../../components/Carousel';
import EventsWidget from '../../components/EventsWidget';
import './Home.css';


const Home = () => {
      return (
            <div className="container">
                  <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                              <EventsWidget />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                              <Carousel />
                        </div>
                  </div>
                  <div className="row">
                        <div className="col-sm-12 col-md-4 col-lg-4">
                              <FacebookWidget />
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4">
                              <CalendarWidget />
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4">
                              <ReviewsWidget />
                        </div>
                  </div>
            </div >
      );
};

export default Home;