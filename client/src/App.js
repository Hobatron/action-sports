import React, { Component } from "react";
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Pages/Home/index.js';
import Admin from './Pages/Admin';
import BuyList from "./Pages/BuyList";


class App extends Component {
  render() {
    return (
      <div className="as-container">
        <Navbar />
        <Router>
          <div>
          <Route exact path="/" component={Home} />
          {/* <Route path="/calendar" component={Calendar} />  */}
          <Route path="/admin" component={Admin} />
          <Route path='/buylist' component={BuyList} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

