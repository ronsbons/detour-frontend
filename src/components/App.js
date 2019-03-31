import React, { Component } from 'react';
import axios from 'axios';

import NavBar from './NavBar/NavBar.js';
import Carousel from './Carousel.js';

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
        <Carousel />
      </div>
    );
  }
}

export default App;
