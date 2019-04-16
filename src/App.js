import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import FacebookWidget from './components/FacebookWidget';
import CalendarWidget from './components/CalendarWidget';
import ReviewsWidget from './components/ReviewsWidget';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <div className="main-body">
        <Carousel />
        <FacebookWidget />
        <CalendarWidget />
        <ReviewsWidget />
        </div>
      </div>
    );
  }
}

export default App;
