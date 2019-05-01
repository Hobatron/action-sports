import React from "react";
import FacebookWidget from '../../components/FacebookWidget';
import CalendarWidget from '../../components/CalendarWidget';
import ReviewsWidget from '../../components/ReviewsWidget';
import Carousel from '../../components/Carousel';
import EventsWidget from '../../components/EventsWidget'
import './Home.css';


const Home = () => {
      return (
            <div className="container">
                  <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-4">
                              <FacebookWidget />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-8">
                              <Carousel />
                        </div>
                  </div>
                  <div className="row justify-content-end">
                        <div className="col-sm-12 col-md-6 col-lg-4 col align-self-end">
                              <CalendarWidget />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                              <ReviewsWidget />
                        </div>
                  </div>
                  <div className="row justify-content-md-end justify-content-lg-start">
                        <div className="col-sm-12 col-md-6 col-lg-4 align-self-md-end">
                              <EventsWidget />
                        </div>
                  </div>
            </div >
      );
};

export default Home;