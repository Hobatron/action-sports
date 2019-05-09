import React from 'react';

import FacebookWidget from '../../components/FacebookWidget';
import CalendarWidget from '../../components/CalendarWidget';
import ReviewsWidget from '../../components/ReviewsWidget';
import CarouselWidget from '../../components/Carousel';
import EventsWidget from '../../components/EventsWidget';
import './Home.css';


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
                        <div className="col-sm-12 col-md-6 col-lg-4 align-self-end">
                              <CalendarWidget />
                        </div>
                  </div>
                  <div className="row justify-content-lg-center">
                        <div className="col-sm-12 col-md-6 col-lg-4 align-self-center">
                              <ReviewsWidget />
                        </div>
                  </div>
            </div >
      );
};

export default Home;