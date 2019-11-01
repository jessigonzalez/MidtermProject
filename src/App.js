import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"

import './App.css';

import Home from './containers/Home/index.js'
import Adopt from './components/adoptionPage'

class App extends Component {
    render(){
        return(
            <div className="App">
              <Router>
                  <Route exact path="/" component={Home} />
                  <div><button onClick={this.redirectToTarget} component={Adopt}>Redirect</button></div>
              </Router>
            </div>
        );
    }
}
export default App;
