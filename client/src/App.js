import React, { Component } from "react";
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Pages/Home/index.js';
import Admin from './Pages/Admin';
import Calendar from './Pages/Calendar';
import Buylist from "./Pages/Buylist";


class App extends Component {
  render() {
    return (
      <div className="as-container">
        <Router>
          <Navbar />

          <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/calendar" component={Calendar} />
          {/* <Route path="/buylist" component={BuyList} /> */}
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/buylist" component={Buylist} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

