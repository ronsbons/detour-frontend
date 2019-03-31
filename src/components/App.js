import React, { Component } from 'react';
import axios from 'axios';

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
      <p>Hello, world</p>
    );
  }
}

export default App;
