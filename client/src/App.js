import React, { Component } from "react";
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

import Login from "./components/auth/Login";
import Home from './Pages/Home/index.js';
import Admin from './Pages/Admin';
import Calendar from './Pages/Calendar';
import Buylist from "./Pages/Buylist";
import Footer from './components/Footer';


function onAuthRequired({history}){
  history.push("/login");
}

class App extends Component {
  render() {
    return (
      <div className="as-container">
        
          <Router>
            <Security issuer='https://dev-409099.okta.com/oauth2/default'
                  client_id='0oajvo73n9QUtk2px356'
                  redirect_uri={window.location.origin + '/implicit/callback'}
                  onAuthRequired={onAuthRequired} >
              <div>
                <Navbar />

                <Route exact path="/" component={Home} />
                <Route path="/calendar" component={Calendar} />

                <Route path="/buylist" component={Buylist} />

                <SecureRoute path="/admin" component={Admin} />
                <Route path='/login' render={() => <Login baseUrl='https://dev-409099.okta.com' />} />
                
                <Route path='/implicit/callback' component={ImplicitCallback} />
              </div>
            </Security>
          </Router>
          <Footer />
      </div>
    );
  }
}
export default App;