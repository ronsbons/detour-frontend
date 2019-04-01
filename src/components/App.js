import React, { Component } from 'react';
import axios from 'axios';
import { Route, Switch, Redirect } from "react-router-dom";

import NavBar from './NavBar/NavBar.js';
import HomeContainer from '../containers/HomeContainer.js';
import Footer from './Footer.js';

import '../styles/App.css';

class App extends Component {
  componentDidMount() {
    // successful test to connect to backend
    axios.get('http://localhost:3001/').then(response => {
      console.log(response.data);
    });
  };

  render() {
    return (
      <div className="app-container">
        <NavBar />
        <Switch>
          <Route path="/"
                render={() => {
                  return <HomeContainer />;
                }}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
