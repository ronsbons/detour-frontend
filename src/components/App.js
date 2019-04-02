import React, { Component } from 'react';
import axios from 'axios';
import { Route, Switch, Redirect } from "react-router-dom";

import NavBar from './NavBar/NavBar.js';
import HomeContainer from '../containers/HomeContainer.js';
import RegionContainer from '../containers/RegionContainer.js';
import Footer from './Footer.js';

import '../styles/App.css';

class App extends Component {
  // regions state lives here so can be accessed by NavBar and by HomeContainer
  state = {
    regions: [
      {
        _id: 1,
        regionName: 'Africa',
        regionPhoto: './images/sho-hatakeyama-117306-unsplash.jpg'
      },
      {
        _id: 2,
        regionName: 'Asia',
        regionPhoto: './images/lisheng-chang-396821-unsplash.jpg'
      },
      {
        _id: 3,
        regionName: 'Australia',
        regionPhoto: './images/christopher-burns-429015-unsplash.jpg'
      },
      {
        _id: 4,
        regionName: 'Europe',
        regionPhoto: './images/jack-ward-522993-unsplash.jpg'
      },
      {
        _id: 5,
        regionName: 'North America',
        regionPhoto: './images/guillaume-jaillet-421771-unsplash.jpg'
      },
      {
        _id: 6,
        regionName: 'South America',
        regionPhoto: './images/eduardo-flores-759719-unsplash.jpg'
      }
    ]
  };
  
  componentDidMount() {
    // successful test to connect to backend
    axios.get('http://localhost:3001/').then(response => {
      console.log(response.data);
    });
  };

  render() {
    return (
      <div className="app-container">
        <NavBar regions={this.state.regions} />
        <Switch>
          <Route exact path="/"
                render={() => {
                  return <HomeContainer regions={this.state.regions} />;
                }}
          />

          <Route path="/region"
                render={() => {
                  return <RegionContainer />;
                }}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
