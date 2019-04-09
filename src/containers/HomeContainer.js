import React, { Component } from 'react';

import Carousel from '../components/Carousel.js';
import About from '../components/About.js';
import RegionSquare from '../components/Location/RegionSquare';

class HomeContainer extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <div className="home-content">
          <About />
          <RegionSquare regions={this.props.regions} />
        </div>
      </div>
    );
  }
}

export default HomeContainer;
