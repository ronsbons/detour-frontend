import React, { Component } from 'react';

import Carousel from '../components/Carousel.js';
import About from '../components/About.js';
import RegionSquare from '../components/Location/RegionSquare';

class HomeContainer extends Component {
  render() {
    return (
      <section>
        <Carousel />
        <div className="home-content">
          <About />
          <RegionSquare regions={this.props.regions} />
        </div>
      </section>
    );
  }
}

export default HomeContainer;
