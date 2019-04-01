import React, { Component } from 'react';

import Carousel from '../components/Carousel/Carousel.js';
import About from '../components/About.js';
import LocationList from '../components/Location/LocationList.js';


class HomeContainer extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <div className="home-content">
          <About />
          <LocationList />
        </div>
      </div>
    );
  }
}

export default HomeContainer;
