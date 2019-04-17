import React, { Component } from "react";
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import FacebookWidget from './components/FacebookWidget';
import CalendarWidget from './components/CalendarWidget';
import ReviewsWidget from './components/ReviewsWidget';

class App extends Component {
  render() {
    return (
      <div className="as-container">
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-4">
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
            <div className="col-8">
              <Carousel />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

